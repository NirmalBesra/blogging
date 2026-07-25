// Inputs
const userName = document.getElementById("fullName");
const userEmail = document.getElementById("email");
const userAge = document.getElementById("age");
const userPassword = document.getElementById("newPassword");
const userVerifyPassword = document.getElementById("verifyPassword");

// Errors
const errorName = document.getElementById("error-fullName");
const errorEmail = document.getElementById("error-email");
const errorAge = document.getElementById("error-age");
const errorPassword = document.getElementById("error-newPassword");
const errorVerifyPassword = document.getElementById("error-verifyPassword");
const errorPasswordInfo = document.getElementById("errorPasswordInfo");

// Form
const signupForm = document.getElementById("signupForm");

// Regex
const regexFullName =
    /^[A-Za-z]+ [A-Za-z]+$|^[A-Za-z]+ [A-Za-z]+ [A-Za-z]+$/;

const regexEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const regexAge =
    /^(?:1[89]|[2-9]\d|100)$/;

const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*()_/])[A-Za-z\d!@#$%&*()_/]{6,16}$/;

// Display Error
function displayMessage(element, message) {
    element.textContent = message;
}

// Form Validation
signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let valid = true;

    // Clear all previous messages
    displayMessage(errorName, "");
    displayMessage(errorEmail, "");
    displayMessage(errorAge, "");
    displayMessage(errorPassword, "");
    displayMessage(errorVerifyPassword, "");
    displayMessage(errorPasswordInfo, "");

    // Name
    if (userName.value.trim() === "") {
        displayMessage(errorName, "Full name is required.");
        valid = false;
    } else if (!regexFullName.test(userName.value.trim())) {
        displayMessage(errorName, "Please enter a valid full name.");
        valid = false;
    }

    // Email
    if (userEmail.value.trim() === "") {
        displayMessage(errorEmail, "Email is required.");
        valid = false;
    } else if (!regexEmail.test(userEmail.value.trim())) {
        displayMessage(errorEmail, "Please enter a valid email.");
        valid = false;
    }

    // Age
    if (userAge.value.trim() === "") {
        displayMessage(errorAge, "Age is required.");
        valid = false;
    } else if (!regexAge.test(userAge.value.trim())) {
        displayMessage(errorAge, "Age must be between 18 and 100.");
        valid = false;
    }

    // Password
    if (userPassword.value.trim() === "") {
        displayMessage(errorPassword, "Password is required.");
        valid = false;
    } else if (!regexPassword.test(userPassword.value)) {
        displayMessage(errorPassword, "Invalid password.");
        displayMessage(
            errorPasswordInfo,
            "Password must be 6-16 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character (! @ # $ % & * ( ) _ /)."
        );
        valid = false;
    }

    // Verify Password
    if (userVerifyPassword.value.trim() === "") {
        displayMessage(errorVerifyPassword, "Please confirm your password.");
        valid = false;
    } else if (userPassword.value !== userVerifyPassword.value) {
        displayMessage(errorVerifyPassword, "Passwords do not match.");
        valid = false;
    }

    // Success
    if (valid) {
        alert("Signup Successful!");

        // Uncomment when submitting to the server
        // signupForm.submit();
    }

});