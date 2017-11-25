pragma solidity ^0.4.15;

contract owned {
    address public owner;

    function owned()  public {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function transferOwnership(address newOwner) onlyOwner  public {
        owner = newOwner;
    }

}

contract Token{
    mapping(address => uint256) public balanceOf;
	function transfer(address receiver, uint amount);
}

contract Lending is owned{
    
    Token tk ;
	address public tokenAddress;
	mapping(address => Loan) loans;
	mapping(address => uint) public balanceOf;
	uint minValue = 3000;
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
        uint blockNumberLended;
    }

    function tokenIn() constant returns(uint){
        return tk.balanceOf(this);
    }
    
    function viewLoan(address _from) constant returns(uint,uint,uint,uint,uint,bool,bool,address){
        Loan memory loan = loans[_from];
        return (loan.value,loan.tu,loan.mau,loan.blockNumberExpired,loan.blockNumberTime, loan.isPaid,loan.isLended,loan.lender);
    }
    
    
    event BidLending(address indexed  from, uint value ,uint tu, uint mau,address indexed  to,uint blockNumber);
	event PayDebt(address indexed  from, uint value ,address indexed  to,uint blockNumber);
    event NewLoan(address indexed  from, uint value ,uint tu, uint mau,uint blockNumber,uint blockNumbeExpiredr,uint blockNumberTime);
	
	//Lender bid %
    function bidLending(address _from, uint _value ,uint _tu, uint _mau,address _to)  {
	    //require(msg.sender == tokenAddress);
		require(_from!=_to);
		Loan storage loan = loans[_to];
	    
	    require(loan.value > 0 && loan.isLended ==false);
	    require(loan.blockNumberExpired >= block.number);
	    require(loan.value <= _value);
	    //require((loan.lender!=address(0)&& compareFraction(_tu,_mau,loan.tu,loan.mau)==-1) || (loan.lender==address(0)&& compareFraction(_tu,_mau,loan.tu,loan.mau)!=-1) );
	    if(loan.lender!=address(0)){
	        require(compareFraction(_tu,_mau,loan.tu,loan.mau)==-1);
			tk.transfer(loan.lender,loan.value);
	    }
	    else{
	        require(compareFraction(_tu,_mau,loan.tu,loan.mau)!=1);	        
	    }
	    
	    loan.tu = _tu;
	    loan.mau = _mau;
	    loan.lender = _from;
	    
	    if(loan.value < _value){
	        tk.transfer(_from,_value - loan.value);
	    }
	    
		BidLending( _from,  _value , _tu,  _mau,_to,block.number);        
	}
    
	
	function transferPayDebt(address _from, uint _value){
		//require(msg.sender == tokenAddress);
		
		Loan storage loan = loans[_from];
		require(loan.isPaid == false);
		require(loan.isLended == true);
		uint invoiceValue = calInvoice(loan);
		require(invoiceValue <= _value );
		
		if(invoiceValue<_value){
		    tk.transfer(_from, _value - invoiceValue);
		}
		
		balanceOf[loan.lender]+= invoiceValue;
		
		loan.isPaid = true;
		
		PayDebt( _from,  _value , loan.lender,block.number);
	}
   
    function createLoan(address _from,uint _value,uint _tu, uint _mau,uint _blockNumberExpires,uint _blockNumberTime){
        require(_value >= minValue);
        require(_blockNumberExpires >=block.number);
        require(_blockNumberTime > 0);
        Loan memory loan ;
        address emptyAddress;
        require(loans[_from].value == 0 ||(loans[_from].value>0 && loans[_from].isPaid == true));
         loan = Loan({value:_value,tu:_tu,mau:_mau,blockNumberExpired:_blockNumberExpires,blockNumberTime:_blockNumberTime,isPaid:false,isLended:false,lender:emptyAddress,blockNumberLended:0});
        loans[_from]= loan;
        
        NewLoan( _from, _value, _tu,  _mau,block.number, _blockNumberExpires, _blockNumberTime);
    }
    
    function safeWithdrawal(address _to){
        require(balanceOf[_to] > 0);
        tk.transfer(_to,balanceOf[_to]);
        balanceOf[_to] = 0;
    }
    
     function updateLoan(address _to){
         Loan storage loan = loans[_to];
         require(loan.value >0);
         require(loan.isLended ==false);
         require(loan.blockNumberExpired <= block.number);
         //require(loan.blockNumberExpired + loan.blockNumberTime > block.number);
         require(loan.lender!=address(0));
         
        loan.isLended = true;
        tk.transfer(_to,loan.value);
    }
    
    function compareFraction(uint so1, uint so2,uint so3,uint so4) constant returns(int){
        int status ;
        if(so1*so4 > so2 * so3){
            status = 1;
        }
		else if(so1*so4 == so2 * so3)
			status = 0;
		else 
			status = -1;
			
		return status;
    }
	
	function subFraction(uint so1, uint so2,uint so3,uint so4) constant returns(uint){
        return ((so1*so4 -so2 * so3)/(so4*so2));
    }
    
    function countDays(uint blockLended, uint blockPayDebt) constant returns(uint) {
        uint numberDay = (blockPayDebt-blockLended)*15/3600;
        if((blockPayDebt-blockLended)*15%3600 > 0 )
         numberDay+= 1;
         
        return numberDay; 
    }
    
    function calInvoice(Loan loan) internal returns(uint) {
        uint numberDay = countDays(loan.blockNumberLended,block.number);
       return (loan.value * loan.tu* numberDay / (loan.mau*365));
    }
	
	function calInvoice(address borrower) constant returns(uint) {
	    Loan memory loan = loans[borrower];
        uint numberDay = countDays(loan.blockNumberLended,block.number+1);
       return (loan.value * loan.tu* numberDay / (loan.mau*365));
    }
	
	//for test
	function setLoan(address nowAddress,uint _blockNumberExpired, uint _blockNumberTime){
		Loan storage loan = loans[nowAddress];
		loan.blockNumberExpired = _blockNumberExpired;
		loan.blockNumberTime = _blockNumberTime;
	}
}