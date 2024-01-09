
// Step --1 :
document.getElementById('withdrow').addEventListener('click' , function(){
    // step --2 :
    const WithdrawFeild = document.getElementById('withdrow-input') ;
    const newWithdrawAmountString = WithdrawFeild.value ; 
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
// step--3:
    WithdrawFeild.value = ''
// step--4:
    const previouswithdrawElement = document.getElementById('withdraw-total') ;
    const previouswithdrawAmmountString = previouswithdrawElement.innerText ;
    const previouswithdrawAmmount = parseFloat(previouswithdrawAmmountString);
    previouswithdrawElement.innerText =newWithdrawAmount  ; 
//  step--5:
    const currentWithdrawAmmount = previouswithdrawAmmount + newWithdrawAmount ;
    previouswithdrawElement.innerText = currentWithdrawAmmount ;

//    if( currentWithdrawAmmount > previousBalanceTotal){
//     alert ('Ammount less')
    
//    }

// step--6:
    const balanceTotalElement = document.getElementById('balance-total') ;
    const previousBalanceTotalString = balanceTotalElement.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString) ;
    const currentBalanceTotal = previousBalanceTotal - currentWithdrawAmmount ;
    balanceTotalElement.innerText = currentBalanceTotal;

 




})