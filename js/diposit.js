document.getElementById('deposit').addEventListener('click' , function(){
    // take a value in input feild
    const depositFeild = document.getElementById('deposit-input');
    const newDepositAmountString = depositFeild.value ;
    // convert string to number
    const newDepositAmount = parseFloat(newDepositAmountString)
     // take a value in deposit  heading element
    const depositTotal = document.getElementById('deposit-total') ;
    const previousDepositAmountString = depositTotal.innerText ;
    const previousDepositAmount = parseFloat(previousDepositAmountString);
    // set value deposit heading element 
    depositTotal.innerText = newDepositAmount ;
    const currentDepositAmmount = previousDepositAmount + newDepositAmount ;
    depositTotal.innerText = currentDepositAmmount ; 
    // balance total set
    const balanceTotalElement = document.getElementById('balance-total') ;
    const previousBalanceTotalString = balanceTotalElement.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString) ;
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount ;
    balanceTotalElement.innerText = currentBalanceTotal;
    
    depositFeild.value = '' ;

})