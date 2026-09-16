// Theme Toggle Logic with Memory Storage
const themeBtn = document.getElementById("themeToggleBtn");
const currentTheme = localStorage.getItem("theme") || "dark";

if (currentTheme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  if (themeBtn) themeBtn.innerText = "☀️ Light";
} else {
  document.documentElement.setAttribute("data-theme", "dark");
  if (themeBtn) themeBtn.innerText = "🌙 Dark";
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    let mode = document.documentElement.getAttribute("data-theme");
    if (mode === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeBtn.innerText = "🌙 Dark";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      themeBtn.innerText = "☀️ Light";
    }
  });
}

// Interactive Animated Background Canvas
const canvas = document.getElementById("bg-canvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let particles = [];
  const particleCount = 45;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.size = Math.random() * 2 + 1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
      const isLight =
        document.documentElement.getAttribute("data-theme") === "light";
      ctx.fillStyle = isLight
        ? "rgba(0, 102, 255, 0.4)"
        : "rgba(0, 242, 254, 0.4)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isLight =
      document.documentElement.getAttribute("data-theme") === "light";
    const lineColor = isLight
      ? "rgba(127, 0, 255, 0.08)"
      : "rgba(0, 242, 254, 0.08)";

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}
