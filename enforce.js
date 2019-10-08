function checkIfStrongPassword() {
    let firstPasswordValue = document.getElementById("firstPassword").value;
    let usernameValue = document.getElementById("username").value;
    if (firstPasswordValue.includes(usernameValue) || firstPasswordValue.includes("Password") || firstPasswordValue.includes("password") || firstPasswordValue.length < 8) {
        return false;
    } else {
        return true;
    }
}

function checkIfEmailValid() {
    let emailValue = document.getElementById("email").value;
    if (emailValue.includes("@") && emailValue.length >= 6) {
        return true;
    } else {
        return false;
    }
}

function registerAccount() {
    let usernameValue = document.getElementById("username").value;
    let emailValue = document.getElementById("email").value;
    let firstPasswordValue = document.getElementById("firstPassword").value;
    let secondPasswordValue = document.getElementById("secondPassword").value;
    if (checkIfStrongPassword() == true && checkIfEmailValid() == true && firstPasswordValue === secondPasswordValue) {
        document.getElementById("result").innerHTML = `Account successfully registered. Please check ${emailValue} to confirm.`;
    } else if (firstPasswordValue != secondPasswordValue) {
        document.getElementById("result").innerHTML = "ERROR: Your passwords do not match.";
    } else if (firstPasswordValue.length < 8) {
        document.getElementById("result").innerHTML = "ERROR: Your password must be at least 8 characters long.";
    } else if (firstPasswordValue == usernameValue) {
        document.getElementById("result").innerHTML = "ERROR: Your password cannot be the same as your username.";
    } else {
        document.getElementById("result").innerHTML = "ERROR: Make sure you have a valid username, email, and password.";
    }
}

