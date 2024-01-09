document.getElementById('withdrow').addEventListener('click' , function(){
    const WithdrawFeild = document.getElementById('withdrow-input') ;
    const newWithdrawAmountString = WithdrawFeild.value ; 
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    const previouswithdrawElement = document.getElementById('withdraw-total') ;
    const previouswithdrawAmmountString = previouswithdrawElement.innerText ;
    const previouswithdrawAmmount = parseFloat(previouswithdrawAmmountString);
    previouswithdrawElement.innerText =newWithdrawAmount  ; 
   
    WithdrawFeild.value = ''
   if( currentWithdrawAmmount > previousBalanceTotal){
    alert ('Ammount less')
    
   }
   const currentWithdrawAmmount = previouswithdrawAmmount + newWithdrawAmount ;
   previouswithdrawElement.innerText = currentWithdrawAmmount ;

    const balanceTotalElement = document.getElementById('balance-total') ;
    const previousBalanceTotalString = balanceTotalElement.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString) ;
    const currentBalanceTotal = previousBalanceTotal - currentWithdrawAmmount ;
    balanceTotalElement.innerText = currentBalanceTotal;

 




})