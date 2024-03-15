//get all input box
//add them all together
//make a if statement for the pay time
//make submit button start the whole calculation

let submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', function() {
  const inputAll = document.querySelectorAll('input');
  let displayElement = document.querySelector('#displayElement');
  let sum = 0;
  let budgetHTML = '';

  for (let i = 0; i < inputAll.length; i++) {
    let inputValue = Number(inputAll[i].value);
    if (!isNaN(inputValue)) {
      sum += inputValue;
    }
  }
  const html = `<div>${sum}</div>`;
  budgetHTML += html;
  displayElement.innerHTML = budgetHTML;
})


