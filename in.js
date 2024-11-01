const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


const themeButton = document.getElementById("theme-button");
if (themeButton) {
    themeButton.addEventListener("click", toggleTheme); // Set up the click event
}