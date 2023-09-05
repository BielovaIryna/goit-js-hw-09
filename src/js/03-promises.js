import Notiflix from 'notiflix';
const btn = document.querySelector("button");
const currentForm = document.querySelector(".form");


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));

      } else {
        reject(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay)

  });
};

const onSubmit = (e) => {
  e.preventDefault();
  const { delay: { value: delayValue }, step: { value: stepValue }, amount: { value: amountValue } } = e.target.elements;

  for (let index = 0; index < amountValue; index += 1) {
    let value=parseInt(delayValue)+parseInt(stepValue)*index;
    let position = index+1;
    createPromise(position, value)
       
   }

}
currentForm.addEventListener("submit", onSubmit);

