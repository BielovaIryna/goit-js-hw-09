const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]")
const bodyEl = document.querySelector("body");
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };
  let timerId=null;
 
const changeColor = ()=>{
	timerId=setInterval(()=>{bodyEl.style.backgroundColor = getRandomHexColor()}, 1000);
	startBtn.setAttribute("disabled", "disabled")
}
const stopChangeColor =()=>{
	clearInterval(timerId);
	startBtn.removeAttribute("disabled")
}
  startBtn.addEventListener("click", changeColor)
  stopBtn.addEventListener("click", stopChangeColor)

