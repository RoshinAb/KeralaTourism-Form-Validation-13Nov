const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const msg = document.getElementById("message");
const str = document.getElementById("strength");
const phone = document.getElementById("phone");

password.addEventListener('input', ()=>{

    var regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    if (password.value.length > 0){
        msg.style.display= "block";
    }
    else {
        msg.style.display = "none";
    }
    if (password.value.length < 6){
        str.innerHTML = "weak";
        password.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }
    else if(password.value.length>=6 && password.value.length<8)
    {
        str.innerHTML = "medium";
        password.style.borderColor = "orange";
		msg.style.color = "orange";
    }
    else if(password.value.length>=8 && password.value.match(regex) )
    {
        str.innerHTML = "strong";
        password.style.borderColor = "#26d730";
		msg.style.color = "#26d730";
    }
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
     checkInputs();
        //go to login page -> home
		// localStorage.setItem('mail',email.value);
		// localStorage.setItem('pass',password.value);
		// alert('Your account has been created');
		// window.location.href = "login.html";
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const phoneValue = phone.value.trim();

	console.log(usernameValue);
	console.log(emailValue);
	const phone_exp1 = /^[5-9][0-9]{9}$/;
	const phone_exp2 = /^([5-9])(\d{2})[-]([0-9]{3})[-]([0-9]{4})$/;
	const phone_exp3 = /^([5-9])(\d{2})\s(\d{3})\s(\d{4})$/;
	const phone_exp4 = /^([5-9])(\d{2})[.](\d{3})[.](\d{4})$/;

	if (usernameValue === "") {
		setErrorFor(username, "Username cannot be blank");
	} else {
		setSuccessFor(username);
	}

	if (emailValue === "") {
		setErrorFor(email, "Email cannot be blank");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Email is not valid");
	} else {
		setSuccessFor(email);
	}

	if (phoneValue === "") {
		setErrorFor(phone, "Phone number cannot be blank");
	} else if (phoneValue.match(phone_exp2) || phoneValue.match(phone_exp1) || phoneValue.match(phone_exp3) || phoneValue.match(phone_exp4)) {
		setSuccessFor(phone);
	} else {
		setErrorFor(phone,"Enter the number according to the format");
	}

	if (passwordValue === "") {
		setErrorFor(password, "Password cannot be blank");
	} else {
		setSuccessFor(password);
	}

	if (password2Value === "") {
		setErrorFor(password2, "Password cannot be blank");
	} else if (passwordValue !== password2Value) {
		setErrorFor(password2, "Passwords does not match");
	} else if (passwordValue == password2Value) {
		setSuccessFor(password2);
         localStorage.setItem("mail", email.value);
			localStorage.setItem("pass", password.value);
			alert("Your account has been created");
			window.location.href = "login.html";
	}

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


