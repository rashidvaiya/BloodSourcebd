document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('register-btn');
    const homeBtn = document.getElementById('home-btn');
    const signupBtn = document.getElementById('signup-btn');
    const div1 = document.getElementById('div1-content');

    const originalDiv1Content = `
                <div class="column-container">
                    <div class="column-a">Column A</div>
                    <div class="column-b">Column B</div>
                </div>
            `;
    const originalDiv1Padding = '20px'; // Assuming original padding was 20px

    if (registerBtn && div1) {
        registerBtn.addEventListener('click', () => {
            div1.innerHTML = originalDiv1Content;
            div1.style.padding = '0'; // Remove padding to make sub-columns fill the space
        });
    }

    if (homeBtn && div1) {
        homeBtn.addEventListener('click', () => {
            div1.innerHTML = `<div class="column-container"><div class="column-a">Welcome Home!</div><div class="column-b"></div></div>`;
            div1.style.padding = originalDiv1Padding;
        });
    }

    if (signupBtn && div1) {
        signupBtn.addEventListener('click', () => {
            div1.innerHTML = `<div class="column-container"><div class="column-a">Sign Up Here!</div><div class="column-b"></div></div>`;
            div1.style.padding = originalDiv1Padding;
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