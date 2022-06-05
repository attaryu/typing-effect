// fitur text change
const header = document.querySelector(".title");
const data = header.getAttribute("data-typing");
let textNow = header.innerText.length;

const eraser = setInterval(() => {
	header.innerText += "";
	textNow--;
	console.log(textNow);
	if (textNow === 0) {
		clearInterval(eraser);
	}
}, 200);
