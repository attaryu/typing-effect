// fitur text change
const header = document.querySelector(".title .title-text");
const pradata = [
	"Hello, I am Attar.",
	"I'm a Full Stack developer.",
	"I'm a graphic designer.",
	"Nice to meet you.",
];
const text = pradata.map((item) => textToArray(item));

playAnimation();

function playAnimation() {
	let i = 0;
}

function interval(data) {
	let count = 0;
	const typing = setInterval(() => {
		header.innerHTML += data[count++];
		if (count === data.length) clearInterval(typing);
	}, 160);
	setTimeout(() => {
		const closingText = [...data];
		const closing = setInterval(() => {
			closingText.pop();
			header.innerHTML = closingText.join("");
			if (closingText.length === 0) clearInterval(closing);
		}, 70);
	}, 2500 + 150 * data.length);
}

function textToArray(text) {
	const array = [];
	for (const arr of text) array.push(arr);
	return array;
}
