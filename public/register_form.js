document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm_password').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Here you would typically send the data to a server
            console.log('Registration Data:', { username, email, password });
            alert('Registration successful! (Data logged to console)');

            // Optionally, clear the form
            registrationForm.reset();
        });
    }
});