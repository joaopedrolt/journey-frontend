const menuButton = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const test2 = document.querySelectorAll('.about .video-container .controls .control-btn');

menuButton.onclick = () => {
    navbar.classList.toggle('active')
}

test2.forEach( btn => {
    btn.onclick = () => {
        console.log('aa')
    }
})