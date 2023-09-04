const firstDelay = document.querySelector("input[name=delay]");
const delayStep = document.querySelector("input[name=step]");
const amount = document.querySelector("input[name=amount]");
const btn=document.querySelector("button");


function createPromise(position, delay) {
  return new Promise ((resolve, reject)=> {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(()=>{
    if (shouldResolve) {
      resolve(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`));
      
    } else {
      reject(console.log(`❌ Rejected promise ${position} in ${delay}ms`));
    }
  }, delay)
  
});
};

const onSubmit =() =>{
for (let index = 0; index < 3; index+=1) {
  setTimeout (()=>{
    shouldResolve(index, 1000+index*500)
  }, 1000+index*500)
  
  
}
  
};
 btn.addEventListener("click", onSubmit);

