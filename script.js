console.log("hello world");

// fitur text change
let count = 0;
const test = ["First Repo", "Repo Test", "Repo Beginner", "Hello World"];
setInterval(() => {
	document.querySelector("h1").innerText = test[count++];
	if (count == test.length) count = 0;
}, 1500);
