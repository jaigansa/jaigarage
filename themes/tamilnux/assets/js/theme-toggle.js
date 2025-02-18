console.log('This is toggle theme js');

function toggleTheme() {
  let currentTheme = document.documentElement.classList.contains("dark-theme") ? "light" : "dark";
  setTheme(currentTheme);
}

function setTheme(theme) {
  document.documentElement.classList.toggle("dark-theme", theme === "dark");
  document.documentElement.classList.toggle("light-theme", theme === "light");

  localStorage.setItem("theme", theme);

  // Update toggle switch state
  const toggleSwitch = document.getElementById("theme-toggle");
  if (toggleSwitch) {
    toggleSwitch.checked = theme === "dark";
  }
}

function getPreferredTheme() {
  return localStorage.getItem("theme") || 
         (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", () => {
  setTheme(getPreferredTheme());
});


