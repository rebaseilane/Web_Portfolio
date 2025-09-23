// script.js
const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;

// Load preference from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "☀️";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️"; // Switch to light mode icon
    localStorage.setItem("darkMode", "enabled");
  } else {
    toggleButton.textContent = "🌙"; // Switch to dark mode icon
    localStorage.setItem("darkMode", "disabled");
  }
});