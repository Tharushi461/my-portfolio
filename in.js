// JavaScript code to handle theme toggling
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

const themeButton = document.getElementById("theme-button");
if (themeButton) {
    themeButton.addEventListener("click", toggleTheme); // Set up the click event
}

// Ensure toggleTheme function is defined elsewhere in your code
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
