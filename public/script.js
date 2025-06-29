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

    // Dark theme toggle functionality
    const themeToggle = document.getElementById('input');

    // Load saved theme preference
    if (localStorage.getItem('darkTheme') === 'true') {
        themeToggle.checked = true;
        document.body.classList.add('dark-theme');
    } else {
        themeToggle.checked = false;
        document.body.classList.remove('dark-theme');
    }

    // Listen for toggle changes
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('darkTheme', 'true');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('darkTheme', 'false');
        }
    });
});