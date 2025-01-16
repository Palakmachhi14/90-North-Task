document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-button");
    const leftMenu = document.querySelector(".left-menu");

    toggleButton.addEventListener("click", () => {
        leftMenu.classList.toggle("collapsed");

        toggleButton.textContent = leftMenu.classList.contains("collapsed") ? ">" : "=";
    });
});


window.addEventListener("resize" , () => {
    const width = window.innerWidth;
    const body = document.body;

    if (width >= 992 && width <= 1600) {
        body.style.transform = "scale(0.9)";
    } else if (width >= 700 && width <= 767) {
        body.style.transform = "scale(0.8)";
    } else if (width >= 600 && width < 700) {
        body.style.transform = "scale(0.75)";
    } else if (width <= 600) {
        body.style.transform = "scale(0.5)";
    } else {
        body.style.transform = "scale(1)";
    }
});