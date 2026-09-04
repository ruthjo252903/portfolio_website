const yearElements = document.querySelectorAll("#year");

yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
});

const themeButtons = document.querySelectorAll("#themeToggle");

function updateThemeButton() {
    const isDark = document.body.classList.contains("dark-mode");

    themeButtons.forEach((button) => {
        button.textContent = isDark
            ? "☀️ Light Mode"
            : "🌙 Dark Mode";
    });
}

themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        localStorage.setItem("theme", isDark ? "dark" : "light");

        updateThemeButton();
    });
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

updateThemeButton();