document.getElementById("d-btn").addEventListener("click", function () {
  const depositInput = document.getElementById("d-input-field");
  const depositAmount = parseFloat(depositInput.value);
  if (isNaN(depositAmount)) {
    alert("please Provide a number");
    return;
  }
  const currentBalance = document.getElementById("current-d");
  const previousAmount = parseFloat(currentBalance.innerText);
  const totalBalance = depositAmount + previousAmount;
  currentBalance.innerText = totalBalance;
  const totalPreviousAmount = document.getElementById("total-amount");
  const totalAmount = parseFloat(totalPreviousAmount.innerText);
  const totalMyDeposit = depositAmount + totalAmount;
  totalPreviousAmount.innerText = totalMyDeposit;

  depositInput.value = "";
});
document.getElementById("w-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("w-input");
  const withdrawPrevious = parseFloat(withdrawField.value);

  if (isNaN(withdrawPrevious)) {
    alert("Enter a Valid Number");
    return;
  }

  const previousWithdrawAmount = document.getElementById("w-amount");
  const totalPreviousWithdraw = parseFloat(previousWithdrawAmount.innerText);

  const totalAmount = document.getElementById("total-amount");
  const totalPreviousAmount = parseFloat(totalAmount.innerText);

  if (withdrawPrevious > totalPreviousAmount) {
    alert("You cannot withdraw more than your total balance");
    return;
  }

  const totalWithdraw = withdrawPrevious + totalPreviousWithdraw;
  previousWithdrawAmount.innerText = totalWithdraw;
  const myTotalWithdraw = totalPreviousAmount - withdrawPrevious;
  totalAmount.innerText = myTotalWithdraw;

  withdrawField.value = "";
});
