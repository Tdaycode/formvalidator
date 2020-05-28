const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show error message
function showError(input, message) {

    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}
// function show success
function showSuccess(input, feedback) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    const small = formControl.querySelector("small");
    small.innerText = feedback;

}
// check email validility
function isEmailValid(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if (re.test(input.value)) {
        showSuccess(input, `${input.id} succesfully entered`);
    } else {
        showError(input, `${getFieldName(input)} is invalid`)
    }
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input, `${input.id} succesfully entered`);
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)

    } else {
        showSuccess(input, `${input.id} succesfully entered`);

    }
}

function comparePassowrd(input1, input2) {
    if (input1.value !== input2.value || password2.value === "") {
        showError(input2, "passwords do not match")
    } else {
        showSuccess(input2, "click submit to continue")
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}
// EventListeners
form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 6, 15);
    checkLength(password, 8, 25);
    isEmailValid(email);
    comparePassowrd(password, password2)





    // simple Long method
    // username conditions
    // if (username.value === "") {
    //     showError(username, "Username is required");

    // } else {
    //     showSuccess(username, "input your email below");
    // }
    // // email conditions
    // if (email.value === "") {
    //     showError(email, "Email is required");

    // } else if (!isEmailValid(email.value)) {
    //     showError(email, "Invalid Email Address");
    // } else {
    //     showSuccess(email, "input your password below");
    // }
    // // password conditions
    // if (password.value === "") {
    //     showError(password, "password is required");

    // } else {
    //     showSuccess(password, " confirm your password below");
    // }

    // // second password
    // if (password2.value === "") {
    //     showError(password2, "please confirm password");

    // } else if (password.value !== password2.value) {
    //     showError(password2, "password does not match");
    // } else {
    //     showSuccess(password2, "click the button below to submit");
    // }

});
