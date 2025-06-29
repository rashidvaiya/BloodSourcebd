document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('register-btn');
    const homeBtn = document.getElementById('home-btn');
    const signupBtn = document.getElementById('signup-btn');
    const div1 = document.getElementById('div1-content');

    const originalDiv1Content = 'Hero Content (2fr)';
    const originalDiv1Padding = '20px'; // Assuming original padding was 20px

    if (registerBtn && div1) {
        registerBtn.addEventListener('click', () => {
            div1.innerHTML = `
                <div class="column-container">
                    <div class="column-a">Column A</div>
                    <div class="column-b">Column B</div>
                </div>
            `;
            div1.style.padding = '0'; // Remove padding to make sub-columns fill the space
        });
    }

    if (homeBtn && div1) {
        homeBtn.addEventListener('click', () => {
            div1.innerHTML = originalDiv1Content;
            div1.style.padding = originalDiv1Padding;
        });
    }

    if (signupBtn && div1) {
        signupBtn.addEventListener('click', () => {
            div1.innerHTML = originalDiv1Content;
            div1.style.padding = originalDiv1Padding;
        });
    }
});