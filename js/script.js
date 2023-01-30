const menuButton = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

menuButton.onclick = () => {
    navbar.classList.toggle('active')
}