// fitur text change
const header = document.querySelector(".title .title-text");
const pradata = [
	// 15 - 18 karakter agar lebih rapi, jika lebih atur di variable control
	// dan jangan beri selisih jumlah karakter yang terlalu besar setiap kalimat
	"Hello, I'm Attar.",
	"Web Developer.",
	"Graphic Designer.",
	"UI & UX Designer.",
	"Nice to meet you.",
];
const text = pradata.map((item) => textToArray(item));

// variable control -------
// kecepatan animasi mengetik
const typingSpeed = 130;
// kecepatan animasi menghapus
const eraserSpeed = 50;
// durasi menuggu jika kalimat sudah di ketik
const waiting = 1000;
// ------------------------

window.onload = () => {
	let i = 0;
	interval(text[i++]);
	setInterval(() => {
		interval(text[i++]);
		if (i === text.length) i = 0;
	}, 4500);
};

function interval(data) {
	let count = 0;
	header.innerHTML = "";
	const typing = setInterval(() => {
		header.innerHTML += data[count++];
		if (count === data.length) clearInterval(typing);
	}, typingSpeed);
	setTimeout(() => {
		const closingText = [...data];
		const closing = setInterval(() => {
			closingText.pop();
			header.innerHTML = closingText.join("");
			if (closingText.length === 0) clearInterval(closing);
		}, eraserSpeed);
	}, waiting + typingSpeed * data.length);
}

function textToArray(text) {
	const array = [];
	for (const arr of text) array.push(arr);
	return array;
}
