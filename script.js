const form = document.querySelector('.rating__form');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const raitingValue = document.querySelector('.container__selected--p')

form.addEventListener('submit', (e) => {
   e.preventDefault();

   const checkedValues = [e.target[1].checked, e.target[2].checked, e.target[3].checked, e.target[4].checked, e.target[5].checked]
   const ratioValues = [e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value, e.target[5].value]

   for (let i = 0; i < checkedValues.length; i++) {
      const e = checkedValues[i]
      const value = ratioValues[i]
      if (e === true) {
         raitingValue.innerHTML = `You selected ${value} out of 5`
      }
   }

   screen1.classList.add("display-off")
   screen2.classList.remove("display-off")
})
