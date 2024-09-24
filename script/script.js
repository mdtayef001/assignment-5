const totalAmount = getTextFieldValueById("total-amount");

function hadelButtonClick(event, inputId, donateId, locations) {
  const date = new Date();
  const inputValue = getInputValue(inputId);
  const totalDonate = getTextFieldValueById(donateId);
  const location = getTextFlidByID(locations);
  const updateTottalDonate = getTextFlidByID(donateId);
  if (typeof inputValue === "undefined" || inputValue > totalAmount) {
    // document.getElementById("my_modal_1").setAttribute("hidden", true);
    return window.alert("Invalid value");
    // return window.location.reload();
  }
  const newTotalDonate = inputValue + totalDonate;
  const newTotalAmount = totalAmount - inputValue;
  document.getElementById("total-amount").innerText = newTotalAmount;
  updateTottalDonate.innerText = newTotalDonate;

  // history add

  const historySection = document.getElementById("history-section");

  historySection.innerHTML += `
    
    <div class="py-8 px-8 w-full border-2 rounded-2xl mb-4">
            <h1 class="text-black font-bold text-xl mb-4">
              ${inputValue} Taka is Donated ${location.innerText}
            </h1>
            <p class="font-light text-black2">${date}</p>
    </div>
  
  
  
  `;
  console.log(inputValue, totalDonate, location.innerText, newTotalDonate);
}
