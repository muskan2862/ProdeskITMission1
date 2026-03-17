// ── DARK MODE TOGGLE ──
const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  darkBtn.textContent = isDark ? "☀️" : "🌙";
});

