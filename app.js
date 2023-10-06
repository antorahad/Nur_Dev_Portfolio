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
