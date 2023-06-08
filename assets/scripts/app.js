const form = document.querySelector('form');
const submitBtn = document.querySelector('#submitBtn');
const passErr = document.querySelector('#match-err');
const emptyField = document.querySelector('#empty');
const emailInput = document.querySelector('#email');
const pass1Input = document.querySelector('#password');
const pass2Input = document.querySelector('#confirmpass');
const emailErr = document.querySelector('#emailerr')

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    emailInput.classList.remove('error-border');
    pass1Input.classList.remove('error-border');
    pass2Input.classList.remove('error-border');
    passErr.innerText = "";
    emptyField.innerText = "";
    emailErr.innerText = "";

    if (checkFields(emailInput.value, pass1Input.value, pass2Input.value)) {
        form.submit();
        window.location.href = "success.html";
    } else {
        return
    }
});


function checkFields(email, p1, p2) {
    if (email === "" || p1 === "" || p2 === "") {
        emptyField.innerText = 'Please fill out all required fields!';
        if (email === "") {
            emailInput.classList.add('error-border');
        }
        if (p1 === "") {
            pass1Input.classList.add('error-border');
        }
        if (p2 === "") {
            pass2Input.classList.add('error-border');
        }
        return false;
    }

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(email)) {
        emailErr.innerText = 'Email is not in correct format!';
        emailInput.classList.add('error-border')
        return false;
    }

    if (p1.length >= 6) {
        if (p1 === p2) {
            return true;
        } else {
            passErr.innerText = 'Passwords do not match!';
            pass1Input.classList.add('error-border');
            pass2Input.classList.add('error-border');
        }
    } else {
        passErr.innerText = 'Password must be at least 6 characters!'
    }
}