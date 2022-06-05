// fitur text change
const header = document.querySelector(".title .title-text");
const pradata = [
	"Hello, I am Attar.",
	"I'm a Full Stack developer.",
	"I'm a graphic designer.",
	"Nice to meet you.",
];
const data = pradata.map((item) => textToArray(item));

for (let i = 0; i < data.length; i++) {
	for (let j = 0; j <= data[i].length; j++) {
		header.innerHTML += `${data[i][j]}`;
	}
	header.innerHTML = "";
}

const interval = setInterval(() => {}, 200);

function textToArray(text) {
	const array = [];
	for (const arr of text) array.push(arr);
	return array;
}
