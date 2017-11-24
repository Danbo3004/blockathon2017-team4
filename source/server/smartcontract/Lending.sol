pragma solidity ^0.4.15;

contract Token{
    mapping(address => uint256) public balanceOf;
	function transfer(address receiver, uint amount);
}

contract Lending {
    
    Token tk ;
	address tokenAddress;
	mapping(address => Loan) loans;
	
    /* Constructor */
    function Lending(address token) {
        tk= Token(token);
    }
    
    struct Loan{
        uint value;
        uint tu;
        uint mau;
        uint blockNumberExpired;
        uint blockNumberTime;
        bool isPaid;
        bool isLended;
        address lender;
    }

    function balanceOf() constant returns(uint256){
        return tk.balanceOf(this);
    }

    event PickLending(address indexed  from, uint value ,uint tu, uint mau,address indexed  to,uint blockNumber);
	event PayDebt(address indexed  from, uint value ,address indexed  to,uint blockNumber);
    event NewLoan(address indexed  from, uint value ,uint tu, uint mau,uint blockNumber,uint blockNumbeExpiredr,uint blockNumberTime);
	
	//Lender pick %
    function pickLending(address _from, uint _value ,uint _tu, uint _mau,address _to)  {
	    Loan storage loan = loans[_to];
	    
	    require(loan.value > 0 && loan.isLended ==false);
	    require(loan.blockNumberExpired <= block.number);
	    require(compareFraction(_tu,_mau,loan.tu,loan.mau)==false);
	    require(loan.value <= _value);
	    
	    loan.tu = _tu;
	    loan.mau = _mau;
	    loan.lender = _from;
	    
	    if(loan.value < _value){
	        tk.transfer(_from,_value - loan.value);
	    }
	    
		PickLending( _from,  _value , _tu,  _mau,_to,block.number);        
	}
    
	
	function transferPayDebt(address _from, uint _value){
		require(msg.sender == tokenAddress);
		address lender;
		PayDebt( _from,  _value , lender,block.number);
	}
   
    function createLoan(address _from,uint _value,uint _tu, uint _mau,uint _blockNumberExpires,uint _blockNumberTime){
        Loan memory loan ;
        address emptyAddress;
        require(loans[_from].value == 0 ||(loans[_from].value>0 && loans[_from].isPaid == true));
         loan = Loan({value:_value,tu:_tu,mau:_mau,blockNumberExpired:_blockNumberExpires,blockNumberTime:_blockNumberTime,isPaid:false,isLended:false,lender:emptyAddress});
        loans[_from]= loan;
        NewLoan( _from, _value, _tu,  _mau,block.number, _blockNumberExpires, _blockNumberTime);
    }
    
    function compareFraction(uint so1, uint so2,uint so3,uint so4) constant returns(bool){
        return (so1*so4 >= so2 * so3);
    }
	
	function subFraction(uint so1, uint so2,uint so3,uint so4) constant returns(uint){
        return ((so1*so4 -so2 * so3)/(so4*so2));
    }
}