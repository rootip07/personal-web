// Typing effect and navbar toggle
document.addEventListener('DOMContentLoaded', function () {
    // Typing effect
    const typingText = document.querySelector('.typing-text span');
    const textArray = ["Developer", "Designer", "Freelancer", "Photographer"];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let typingSpeed = 150;
    let deletingSpeed = 100;
    let pauseTime = 2000;

    function type() {
        if (textIndex >= textArray.length) {
            textIndex = 0;
        }
        currentText = textArray[textIndex];

        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                textIndex++;
                setTimeout(type, 500);
            } else {
                setTimeout(type, deletingSpeed);
            }
        } else {
            typingText.textContent = currentText.substring(0, charIndex++);
            if (charIndex > currentText.length) {
                isDeleting = true;
                setTimeout(type, pauseTime);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }
    if (typingText) type();

    // Navbar toggle
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', function () {
            const isActive = menu.classList.toggle('active');
            toggle.classList.toggle('active');
            toggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });
    }
});