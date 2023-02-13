const menuButton = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const videoControlButtons = document.querySelectorAll('.about .video-container .controls .control-btn');
const video = document.querySelector('.about .video-container .video');

menuButton.onclick = () => {
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

videoControlButtons.forEach(button => {
    button.onclick = () => {
        let src = button.getAttribute('data-src');
        video.setAttribute('src', src);
    }
})