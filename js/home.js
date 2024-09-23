const totalAmount = getTextFieldValueById("total-amount");

function hadelButtonClick(event, inputId, donateId) {
  const inputValue = getInputValue(inputId);
  const totalDonate = getTextFieldValueById(donateId);
  const newTotalDonate = inputValue + totalDonate;
  const newTotalAmount = totalAmount - inputValue;
  document.getElementById("total-amount").innerText = newTotalAmount;
  document.getElementById("noakhali-total-donate").innerText = newTotalDonate;
  console.log(event, inputId, donateId);
}
