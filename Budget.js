//get all input box
//add them all together
//make a if statement for the pay time
//make submit button start the whole calculation

let submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', function() {
  const inputAll = document.querySelectorAll('input');
  const afterTax = document.querySelector('#after-tax-input');




  let displayElement = document.querySelector('#displayElement');

  let selectedElement = document.getElementById('select-id');
  let selectedValue = Number(selectedElement.value);


  let sum = 0;
  let budgetHTML = '';

  for (let i = 0; i < inputAll.length; i++) {
    let inputValue = Number(inputAll[i].value);
    if (!isNaN(inputValue)) {
      sum += inputValue;
    }
  }

  let totalIncome = sum;

  let totalIncomeForYear = totalIncome * selectedValue;

  let housing = totalIncomeForYear * 0.50;
  let wants = totalIncomeForYear * 0.30;
  let savings = totalIncomeForYear * 0.20;

  const html = `
  <div>Total $${totalIncome.toFixed(2)}</div>
  <div>Housing $${housing.toFixed(2)}</div>
  <div>Wants $${wants.toFixed(2)}</div>
  <div>Savings $${savings.toFixed(2)}</div>`;

  budgetHTML += html;
  displayElement.innerHTML = budgetHTML;
});


