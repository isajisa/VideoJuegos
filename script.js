// POPOVER
document.addEventListener('DOMContentLoaded', function () {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(el => new bootstrap.Popover(el));
});

// TOOLTIP
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// VIDEO MODAL
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("exampleModal");
    const video = document.getElementById("tutorialVideo");

    modal.addEventListener("hidden.bs.modal", () => {
        video.pause();
        video.currentTime = 0;
    });
});

// FLECHA QUE HACE SCROLL
const flecha = document.getElementById("flecha-top");

// Mostrar u ocultar flecha según scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) { // cuando bajas más de 200px
        flecha.classList.add("mostrar");
    } else {
        flecha.classList.remove("mostrar");
    }
});

// Scroll suave hacia arriba al hacer clic
flecha.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Corazon que se colorea
document.addEventListener('DOMContentLoaded', () => {
    const hearts = document.querySelectorAll('.likeHeart');  // TODOS los corazones

    hearts.forEach(heartSvg => {
        const heartPath = heartSvg.querySelector('path');
        let isLiked = false;

        heartSvg.addEventListener('click', () => {
            isLiked = !isLiked;
            if (isLiked) {
                heartPath.setAttribute('fill', 'red');
                heartPath.setAttribute('stroke', 'red');
            } else {
                heartPath.setAttribute('fill', 'none');
                heartPath.setAttribute('stroke', '#ccc');
            }
        });
    });
});

//CANVAS DE LINEA EN MOVIMIENTO
const canvas = document.querySelector('.platform-wave');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resize();
window.addEventListener('resize', resize);

let t = 0;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.strokeStyle = '#00ffff';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#00ffff';
  ctx.shadowBlur = 10;

  const y = canvas.height / 2;

  ctx.moveTo(0, y);
  for (let x = 0; x <= canvas.width; x += 2) {
    ctx.lineTo(x, y + Math.sin(x * 0.04 + t) * 4);
  }

  ctx.stroke();
  t += 0.08;
  requestAnimationFrame(animate);
}

animate();
