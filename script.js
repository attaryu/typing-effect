const header = document.querySelector(".title .title-text");

// input your text in array above
const texts = [
	"Hello, I'm Attar.",
	"This is a typing effect :D",
	"There are some bugs",
	"Please if you want to fix it :)",
];

// setting this
const typingSpeed = 90;
const eraseSpeed = 50;
const rest = 800;
const pause = 300;

// machine
const textArray = texts.map((item) => textToArray(item));

window.onload = recursive();

function recursive(i = 0) {
	interval(textArray[i]);
	setTimeout(() => {
		i++;
		if (i === textArray.length) i = 0;
		recursive(i);
	}, (typingSpeed + eraseSpeed) * textArray[i].length + (pause + rest));
}

function interval(data) {
	let count = 0;
	const typing = setInterval(() => {
		header.innerHTML += data[count++];
		if (count === data.length) clearInterval(typing);
	}, typingSpeed);
	setTimeout(() => {
		const closingText = [...data];
		const closing = setInterval(() => {
			closingText.pop();
			header.innerHTML = closingText.join("");
			if (closingText.length < 1) clearInterval(closing);
		}, eraseSpeed);
	}, typingSpeed * data.length + rest);
}

function textToArray(text) {
	const array = [];
	for (const arr of text) array.push(arr);
	return array;
}
