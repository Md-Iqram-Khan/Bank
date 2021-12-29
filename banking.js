function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldAmountString = inputField.value;
  const inputFieldAmountStringToNumber = +inputFieldAmountString;
  inputField.value = "";
  return inputFieldAmountStringToNumber;
}

function depositWithdrawTotal(id, inputValue) {
  const totalAmount = document.getElementById(id);
  const totalAmountTextToNumber = +totalAmount.innerText;
  return (totalAmount.innerText = totalAmountTextToNumber + inputValue);
}

function getCurrentBalance() {
  const balance = document.getElementById("balance");
  const BalanceToNumber = +balance.innerText;
  return BalanceToNumber;
}

function balance(id, inputValue, isAdd) {
  const balance = document.getElementById(id);
  const BalanceToNumber = +balance.innerText;
  if (isAdd) {
    return (balance.innerText = BalanceToNumber + inputValue);
  } else {
    return (balance.innerText = BalanceToNumber - inputValue);
  }
}

//Work on deposit button

document.getElementById("submitDeposit").addEventListener("click", function () {
  const depositInput = getInputValue("deposit");
  if (depositInput > 0) {
    depositWithdrawTotal("depositTotal", depositInput);
    balance("balance", depositInput, true);
  }
});

//work on withdraw button

document
  .getElementById("submitWithdraw")
  .addEventListener("click", function () {
    const withdrawInputToNumber = getInputValue("withdraw");
    const currentBalance = getCurrentBalance();
    if (withdrawInputToNumber > 0 && currentBalance >= withdrawInputToNumber) {
      depositWithdrawTotal("withdrawTotal", withdrawInputToNumber);
      balance("balance", withdrawInputToNumber, false);
    }
  });
