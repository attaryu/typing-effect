// fitur text change
const header = document.querySelector(".title .title-text");
const texts = [
	// 17 - 19 karakter agar lebih rapi, jika lebih atur di variable control
	// dan jangan beri selisih jumlah karakter yang terlalu besar setiap kalimat
	"Hello, I'm someone.",
	"Frontend Developer.",
	"Graphic Designer.",
	"UI & UX Designer.",
	"Thank you very much!",
];
const textArray = texts.map((item) => textToArray(item));

// variable control -------
// sesuaikan semua kecepatan agar lebih baik
// kecepatan animasi mengetik
const typingSpeed = 140;
// durasi menuggu jika kalimat sudah di ketik
const waiting = 2000;
// kecepatan animasi menghapus
const eraserSpeed = 30;
// jeda antar kalimat
const pause = 8000;
// ------------------------

window.onload = () => {
	let i = 0;
	interval(textArray[i++]);
	setInterval(() => {
		interval(textArray[i++]);
		if (i === textArray.length) i = 0;
	}, pause);
};

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
		}, eraserSpeed);
	}, waiting + (eraserSpeed + typingSpeed) * data.length);
}

function textToArray(text) {
	const array = [];
	for (const arr of text) array.push(arr);
	return array;
}
