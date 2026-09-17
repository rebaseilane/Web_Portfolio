// script.js
const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;

const sections = [
  "home",
  "about",
  "education",
  "experience",
  "skills",
  "contact",
];

async function loadSections() {
  const main = document.getElementById("main-content");
  for (const section of sections) {
    const response = await fetch(`sections/${section}.html`);

    if (!response.ok) {
      console.error(`Failed to load section: ${section}`);
      continue;
    }
    const html = await response.text();
    main.insertAdjacentHTML("beforeend", html);
  }
}
loadSections();

function updateDarkModeButton() {
  if (body.classList.contains("dark-mode")) {
    // Dark mode is active → show sun
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    toggleButton.setAttribute("aria-label", "Switch to light mode");
    toggleButton.setAttribute("title", "Switch to light mode");
  } else {
    // Light mode is active → show moon
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    toggleButton.setAttribute("aria-label", "Switch to dark mode");
    toggleButton.setAttribute("title", "Switch to dark mode");
  }
}

// Load saved preference
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
}

updateDarkModeButton();

// Toggle dark mode
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }

  updateDarkModeButton();
});
