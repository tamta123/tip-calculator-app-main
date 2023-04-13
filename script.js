const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipInput = document.querySelectorAll('input[name="tip"]');
const customTipInput = document.getElementById('custom');
const tipAmountOutput = document.getElementById('tipAmount');
const totalOutput = document.getElementById('total');
const resetButton = document.getElementById('reset');
const error = document.querySelector(".error")
let tipPercent = 0;


billInput.addEventListener('input',calculate);
peopleInput.addEventListener('input',calculate);
customTipInput.addEventListener('input',calculate);
tipAmountOutput.addEventListener('input',calculate);
totalOutput.addEventListener('input',calculate);
tipInput.forEach(button => {
    button.addEventListener('change',calculate)
})
resetButton.addEventListener('click',reset)


function calculate() {
  const bill = Number(billInput.value);
  const customTip = Number(customTipInput.value);
  const numPeople = Number(peopleInput.value);


  tipInput.forEach(button => {
    if (button.checked) {
      tipPercent = Number(button.value);
    }
  });

  if (customTip > 0) {
    tipPercent = customTip / 100;
  }

  if(numPeople === 0){
    error.style.display="block";
    peopleInput.style.borderColor = "rgba(225, 112, 82, 1)";
    return;
  } else {
    error.style.display = "none";
    peopleInput.style.borderColor = "initial";
  }

  const tipAmount = (bill * tipPercent) / numPeople;
  const totalAmount = bill/numPeople +tipAmount;
  tipAmountOutput.innerHTML = `$${tipAmount.toFixed(2)}`;
  totalOutput.innerHTML = `$${totalAmount.toFixed(2)}`;
}

function reset() {
    billInput.value = '';
    customTipInput.value = '';
    peopleInput.value = '';
    error.style.display = "none";
    tipAmountOutput.innerHTML = `$0.00`;
    totalOutput.innerHTML = `$0.00`;
    tipInput.forEach(button => button.checked = false);
    tipPercent=0
    resetButton.style.backgroundColor = "#9FE8DF";
  setTimeout(() => {
    resetButton.style.backgroundColor = "#0D686D"; 
  }, 100);
  }


