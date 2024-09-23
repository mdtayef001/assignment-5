function getInputValue(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  if (isNaN(inputNumber) || inputValue.includes("-")) {
    return;
  }
  return inputNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

function getTextFlidByID(id) {
  const text = document.getElementById(id);
  return text;
}

function showSectionById(id) {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
