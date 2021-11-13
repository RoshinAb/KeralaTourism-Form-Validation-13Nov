const form = document.getElementById("form");
const email = document.getElementById("userName");
const password = document.getElementById("userPw");
const emailvalue = email.value.trim();
const passwordvalue = password.value.trim();
const storedEmail = localStorage.getItem("mail");
const storedPass = localStorage.getItem("pass");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	console.log(emailvalue);
	if (emailvalue === "") {
		setErrorFor(email, "Email cannot be blank");
	} else if (!isEmail(emailvalue)) {
		setErrorFor(email, "Email is not valid");
	} else {
		setSuccessFor(email);
	}

	if (passwordvalue === "") {
		setErrorFor(password, "Password cannot be blank");
	} else {
		setSuccessFor(password);
	}
	if (email.value == storedEmail && password.value == storedPass) {
		alert("You are logged in.");
		document.location.href = "index.html";
	} else {
		alert("Enter email or password");
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	small.innerText = message;
	formControl.className = "form-control error";
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}
