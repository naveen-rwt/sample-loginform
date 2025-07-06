document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const toggle = document.getElementById("togglePassword");
  const themeToggle = document.getElementById("themeToggle");

  // Toggle password visibility
  toggle.addEventListener("click", () => {
    const isVisible = passwordInput.type === "text";
    passwordInput.type = isVisible ? "password" : "text";
    toggle.textContent = isVisible ? "Show" : "Hide";
  });

  // Toggle dark mode
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
