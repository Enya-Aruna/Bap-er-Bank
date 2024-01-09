
// Step --1 :
document.getElementById('withdrow').addEventListener('click' , function(){
    // step --2 :
    const WithdrawFeild = document.getElementById('withdrow-input') ;
    const newWithdrawAmountString = WithdrawFeild.value ; 
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    if(isNaN(newWithdrawAmount)){
        alert('please provide a number') ;
        return ;
    }
// step--3:
    WithdrawFeild.value = ''
// step--4:
    const previouswithdrawElement = document.getElementById('withdraw-total') ;
    const previouswithdrawAmmountString = previouswithdrawElement.innerText ;
    const previouswithdrawAmmount = parseFloat(previouswithdrawAmmountString);
    // previouswithdrawElement.innerText =newWithdrawAmount  ; 
    // step--6:
    const balanceTotalElement = document.getElementById('balance-total') ;
    const previousBalanceTotalString = balanceTotalElement.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString) ;
    
    if( newWithdrawAmount > previousBalanceTotal){
      
        alert ("Sorry! you don't have enough balance" )
        return;
       }
       const currentWithdrawAmmount = previouswithdrawAmmount + newWithdrawAmount ;
       previouswithdrawElement.innerText = currentWithdrawAmmount ;
    
           //step--7:
           const currentBalanceTotal = previousBalanceTotal - currentWithdrawAmmount ;
           balanceTotalElement.innerText = currentBalanceTotal;

  





  


 




})