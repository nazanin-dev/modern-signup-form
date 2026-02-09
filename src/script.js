const passwordInput = document.getElementById("password");
const togglePasswordBtn = document.getElementById("togglePassword");
const eyeOpen = document.getElementById("eyeOpen");
const eyeClosed = document.getElementById("eyeClosed");
const termsCheckbox = document.getElementById("form-check");
// Confirm password elements
const confirmPasswordInput = document.getElementById("confirmPassword");
const toggleConfirmPasswordBtn = document.getElementById(
  "toggleConfirmPassword"
);
const eyeOpenConfirm = document.getElementById("eyeOpenConfirm");
const eyeClosedConfirm = document.getElementById("eyeClosedConfirm");

function togglePasswordVisibility(input, openIcon, closeIcon) {
  if (input.type === "password") {
    input.type = "text";
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  } else {
    input.type = "password";
    openIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  }
}

togglePasswordBtn.addEventListener("click", function () {
  togglePasswordVisibility(passwordInput, eyeOpen, eyeClosed);
});

toggleConfirmPasswordBtn.addEventListener("click", function () {
  togglePasswordVisibility(
    confirmPasswordInput,
    eyeOpenConfirm,
    eyeClosedConfirm
  );
});
//
const registrationForm = document.querySelector("form");

//
const form = document.getElementById("form");
const messageContainer = document.getElementById("message-container");
const messageSpan = document.getElementById("message");

let isValid = false;
let passwordMatch = false;

// functions
function validateForm() {
  // Using HTML5 constraint validation API
  isValid = form.checkValidity();
  // console.log(isValid);

  //message for err
  if (!isValid) {
    messageSpan.textContent = "please fill out all required fields correctly.";
    messageSpan.style.color = "red";
    messageContainer.classList.remove("hidden");
    messageContainer.style.borderColor = "red";
    return;
  }
  // check if passwords match
  if (passwordInput.value === confirmPasswordInput.value) {
    passwordMatch = true;
    passwordInput.style.borderColor = "green";
    confirmPasswordInput.style.borderColor = "green";
  } else {
    passwordMatch = false;
    messageSpan.textContent = "Make sure passwords match.";
    messageSpan.style.color = "red";
    messageContainer.classList.remove("hidden");
    messageContainer.style.borderColor = "red";
    passwordInput.style.borderColor = "red";
    confirmPasswordInput.style.borderColor = "red";
    return;
  }
  //if valid and passwords match
  if (isValid && passwordMatch) {
    messageSpan.textContent = "Successfully Registered!";
    messageSpan.style.color = "green";
    messageContainer.classList.remove("hidden");
    messageContainer.style.borderColor = "green";
  }
  if (!termsCheckbox.checked) {
    messageSpan.textContent = "You must accept the terms and conditions.";
    messageSpan.style.color = "red";
    messageContainer.classList.remove("hidden");
    return;
  }
}
function processFunction(event) {
  event.preventDefault();
  //validate form
  validateForm();
}

// event listener
form.addEventListener("submit", processFunction);
