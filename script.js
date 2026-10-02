document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Animación suave del ecualizador.
  const bars = document.querySelectorAll(".equalizer span");
  bars.forEach((bar, index) => {
    bar.style.animation = `equalize ${0.7 + (index % 5) * 0.12}s ease-in-out infinite alternate`;
    bar.style.animationDelay = `${index * 0.05}s`;
  });
});

const style = document.createElement("style");
style.textContent = `
@keyframes equalize {
  from { transform: scaleY(.55); opacity:.65; }
  to   { transform: scaleY(1.15); opacity:1; }
}
`;
document.head.appendChild(style);
