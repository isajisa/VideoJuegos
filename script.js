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