pragma solidity ^0.4.15;

contract Token{
    mapping(address => uint256) public balanceOf;
	function transfer(address receiver, uint amount);
}

contract Lending {
    
    Token tk ;
	address tokenAddress;
    /* Constructor */
    function Lending(address token) {
        tk= Token(token);
    }

    function balanceOf() constant returns(uint256){
        return tk.balanceOf(this);
    }

    event PickLending(address index from, uint256 value ,uint tu, uint mau,address index to);
    
	//Lender pick %
    function pickLending(address _from, uint256 _value ,uint tu, uint mau,address _to)  {
	    require(msg.sender == tokenAddress);
		PickLending( _from,  _value , tu,  mau);        
	}
    
	
	function transferPayDebt(address _from, uint256 _value){
		require(msg.sender == tokenAddress);

	}
   
    
}