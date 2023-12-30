// Add the following functions

function togglePassword() {
    var passwordInput = document.getElementById('password');
    var passwordToggle = document.querySelector('.password-toggle');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        passwordToggle.textContent = 'Show';
    }
}

function forgotPassword() {
    // Implement the logic for the "Forgot Password" functionality
    alert('Forgot Password functionality - Implement your logic here');
}

// ... (keep the rest of the existing code)
