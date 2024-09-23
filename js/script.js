const totalAmount = getTextFieldValueById("total-amount");

function hadelButtonClick(event, inputId, donateId) {
  const inputValue = getInputValue(inputId);
  const totalDonate = getTextFieldValueById(donateId);
  if (typeof inputValue === "undefined" || inputValue > totalAmount) {
    document.getElementById("my_modal_1").setAttribute("hidden", true);
    window.alert("Invalid value");
    console.log(true);
    return window.location.reload();
  } else {
    false;
  }
  const newTotalDonate = inputValue + totalDonate;
  const newTotalAmount = totalAmount - inputValue;
  document.getElementById("total-amount").innerText = newTotalAmount;
  document.getElementById("noakhali-total-donate").innerText = newTotalDonate;
}
