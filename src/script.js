const passwordInput = document.getElementById("password");
const togglePasswordBtn = document.getElementById("togglePassword");
const eyeOpen = document.getElementById("eyeOpen");
const eyeClosed = document.getElementById("eyeClosed");
// Confirm password elements
const confirmPasswordInput = document.getElementById("confirmPassword");
const toggleConfirmPasswordBtn = document.getElementById(
  "toggleConfirmPassword"
);
const eyeOpenConfirm = document.getElementById("eyeOpenConfirm");
const eyeClosedConfirm = document.getElementById("eyeClosedConfirm");

function togglePasswordVisibility(input , openIcon , closeIcon) {
    if(input.type === "password") {
        input.type = 'text';
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }else{
        input.type = 'password';
        openIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    }
}

togglePasswordBtn.addEventListener('click', function() {
    togglePasswordVisibility(passwordInput , eyeOpen , eyeClosed);
});

toggleConfirmPasswordBtn.addEventListener('click', function() {
    togglePasswordVisibility(confirmPasswordInput , eyeOpenConfirm , eyeClosedConfirm);
});