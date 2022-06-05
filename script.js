// fitur text change
const header = document.querySelector(".title");
const pradata = [
	"Hello, I am Attar.",
	"I'm a Full Stack developer.",
	"I'm also a graphic designer.",
	"Nice to meet you.",
];
const data = pradata.map((item) => textToArray(item));

const eraser = setInterval(() => {}, 200);

function textToArray(text) {
	const array = [];
	for (const arr of text) {
		array.push(arr);
	}

	return array;
}
