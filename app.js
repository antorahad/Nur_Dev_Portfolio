const toggleButton = document.getElementById('toggleButton');
const toggleMenu = document.getElementById('toggleMenu');

const toggle = () => {
    toggleMenu.classList.toggle('hidden');

    if (toggleButton.innerHTML === '<i class="fa-solid fa-bars"></i>') {
        toggleButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        toggleButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
};

const body = document.getElementById('body');
const themeButton = document.getElementById('themeButton');

const themeToggle = () => {
    body.classList.toggle('bg-slate-900');
    body.classList.toggle('text-[#f6f6f6]');

    if (themeButton.innerHTML === '<i class="fa-regular fa-moon"></i>') {
        themeButton.innerHTML = '<i class="fa-regular fa-sun"></i>'
    } else {
        themeButton.innerHTML = '<i class="fa-regular fa-moon"></i>'
    }
}