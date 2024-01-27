const carouselContainer = document.getElementById('carouselContainer');
        const carouselContent = document.getElementById('carouselContent');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const itemWidth = document.querySelector('.carousel-item').clientWidth;
        let position = 0;

        prevBtn.addEventListener('click', () => {
            position += itemWidth;
            if (position > 0) position = -((carouselContent.children.length - 1) * itemWidth);
            updateCarousel();
        });

        nextBtn.addEventListener('click', () => {
            position -= itemWidth;
            if (position < -((carouselContent.children.length - 1) * itemWidth)) position = 0;
            updateCarousel();
        });

        function updateCarousel() {
            carouselContent.style.transform = `translateX(${position}px)`;
        }

        
        setInterval(() => {
            position -= itemWidth;
            if (position < -((carouselContent.children.length - 1) * itemWidth)) position = 0;
            updateCarousel();
        }, 5000); 
        const categoriesBtn = document.getElementById('categoriesBtn');
const dropdownContent = document.querySelector('.dropdown-content');

categoriesBtn.addEventListener('click', () => {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
    if (!event.target.matches('#categoriesBtn')) {
        dropdownContent.style.display = 'none';
    }
});
