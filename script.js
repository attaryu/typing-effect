// fitur text change
const header = document.querySelector(".title .title-text");
const pradata = [
	"Hello, I am Attar.",
	"I'm a Full Stack developer.",
	"I'm a graphic designer.",
	"Nice to meet you.",
];
const data = pradata.map((item) => textToArray(item));

function interval(data) {
	let count = 0;
	const typing = setInterval(() => {
		header.innerHTML += data[count++];
		if (count === data.length) clearInterval(typing);
	}, 150);
	setTimeout(() => {
		header.innerHTML = "";
	}, 1500 + 150 * data.length);
}

function textToArray(text) {
	const array = [];
	for (const arr of text) array.push(arr);
	return array;
}
