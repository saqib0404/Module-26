//----------------- Deposition---------------
document.getElementById('deposit-btn').addEventListener('click', function () {
    // Get deposit amount 
    const depositField = document.getElementById('deposit-field');
    const depositAmountstr = depositField.value;
    const depositAmount = parseFloat(depositAmountstr);

    // clearing the input field
    depositField.value = "";

    if (isNaN(depositAmount)) {
        alert("Please provide a valid number");
        return;
    }

    // Get Deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalstr = depositTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalstr);

    if (depositAmount <= 0) {
        alert("Please provide a valid number");
        return;
    }

    // Sum of deposit total and deposit amount
    const currentDepositTotal = depositTotal + depositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // get balance total
    const balancetotalElement = document.getElementById('balance-total');
    const balanceTotalStr = balancetotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalStr);

    // Sum of balance total and deposit amount
    const currentBalanceTotal = balanceTotal + depositAmount;
    balancetotalElement.innerText = currentBalanceTotal;
})


//-------------------- Withdraw-------------------
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // Get withdraw amount
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountStr = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountStr);

    // Clear the input field
    withdrawField.value = "";

    if (isNaN(withdrawAmount)) {
        alert("Please provide  valid number");
        return;
    }
    else if (withdrawAmount <= 0) {
        alert("Please provide  valid number");
        return;
    }

    // set withdraw amount
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalStr = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalStr);

    

    // Get balance Total
    const balancetotalElement = document.getElementById('balance-total');
    const balanceTotalStr = balancetotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalStr);

    if(withdrawAmount > balanceTotal){
        alert("Not Enough Money!");
        return;
    }

    // sum the withdraw
    const currentWithdraw = withdrawAmount + withdrawTotal;
    withdrawTotalElement.innerText = currentWithdraw;

    // Set balance Total
    const currentBalanceTotal = balanceTotal - withdrawAmount;
    balancetotalElement.innerText = currentBalanceTotal;
})