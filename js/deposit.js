//step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //setp-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount =  parseFloat(newDepositAmmountString);
    console.log(typeof(newDepositAmmount))
   //step-3: get the current deposit total ammount
   //for non input (element other than input,textarea)use innerText to get the text
   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepositTotalString = depositTotalElement.innerText;
   const previousDepositTotal = parseFloat(previousDepositTotalString);
   console.log(typeof(previousDepositTotal))

   //step-4:add numbers to set the toatl deposit
   const currentDepositTotal = previousDepositTotal + newDepositAmmount;
   console.log(currentDepositTotal)

   depositTotalElement.innerText = currentDepositTotal;

   //step-5 get balacne current total
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal =  parseFloat(previousBalanceTotalString)

   //step-6: calulate current total balance
   const currntBalanceTotal = previousBalanceTotal + newDepositAmmount;
   balanceTotalElement.innerText = currntBalanceTotal;

   //step-7:Clear the deposit field
   depositField.value = '';

})