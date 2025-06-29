document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('register-btn');
    const homeBtn = document.getElementById('home-btn');
    const signupBtn = document.getElementById('signup-btn');
    const div1 = document.getElementById('div1-content');

    const homeContent = document.getElementById('home-content');
    const registerContent = document.getElementById('register-content');
    const signupContent = document.getElementById('signup-content');

    function showContent(contentToShow) {
        homeContent.classList.add('hidden');
        registerContent.classList.add('hidden');
        signupContent.classList.add('hidden');
        contentToShow.classList.remove('hidden');
    }

    // Set default content for div1
    if (homeContent) {
        showContent(homeContent);
    }

    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            showContent(registerContent);
        });
    }

    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            showContent(homeContent);
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            showContent(signupContent);
        });
    }

    // Dark mode toggle
    const darkModeToggle = document.getElementById('input');
    const body = document.body;

    // Load preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', function () {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            // Here you would typically send the data to a server for authentication
            console.log('Login Data:', { username, password });
            alert('Login attempt successful! (Data logged to console)');

            // Optionally, clear the form
            loginForm.reset();
        });
    }
});