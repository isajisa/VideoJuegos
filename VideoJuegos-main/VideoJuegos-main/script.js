document.addEventListener('DOMContentLoaded', function () {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(el => new bootstrap.Popover(el));
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("exampleModal");
    const video = document.getElementById("tutorialVideo");

    modal.addEventListener("hidden.bs.modal", () => {
        video.pause();
        video.currentTime = 0;
    });
});

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
