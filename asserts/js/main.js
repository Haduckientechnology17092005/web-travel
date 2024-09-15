const slider = document.querySelector('.slider');
const button = document.getElementById('toggle-animation');
let isAnimating = true;

function toggleAnimation() {
    if (isAnimating) {
        slider.style.animationPlayState = 'paused';
        button.classList.add('paused');
    } else {
        slider.style.animationPlayState = 'running';
        button.classList.remove('paused');
    }
    isAnimating = !isAnimating;
}

button.addEventListener('click', toggleAnimation);
