


const hearts = document.querySelectorAll('.heart-icon');
const counters = document.querySelectorAll('.counter');
let counts = Array.from({ length: hearts.length }, () => 0);

function toggleHeartColor(index) {
    hearts[index].classList.toggle('active');
    if (hearts[index].classList.contains('active')) {
        counts[index]++;
        updateCounter(index);
    }
}

function updateCounter(index) {
    counters[index].textContent = counts[index];


    counters[index].classList.add('jump');
    setTimeout(() => {
        counters[index].classList.remove('jump');
    }, 300);
}

hearts.forEach((heart, index) => {
    heart.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleHeartColor(index);
    });
});
