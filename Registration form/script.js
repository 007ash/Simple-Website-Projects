document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Simple Email Regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset errors
    document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');

    if (username.value.length < 3) {
        showError(username);
        isValid = false;
    }

    if (!emailPattern.test(email.value)) {
        showError(email);
        isValid = false;
    }

    if (password.value.length < 8) {
        showError(password);
        isValid = false;
    }

    if (isValid) {
        alert('Registration Successful! 🚀');
        // You would typically send data to a server here
    }
});

function showError(inputElement) {
    const group = inputElement.parentElement;
    group.querySelector('.error-msg').style.display = 'block';
    inputElement.style.borderColor = '#ef4444';
}