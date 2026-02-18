document.addEventListener('DOMContentLoaded', () => {
    const cardsWrap = document.querySelector('.cards-wrap');
    const prevBtn = document.querySelector('.arrow-prev');
    const nextBtn = document.querySelector('.arrow-next');
    const cards = document.querySelectorAll('.product-card');
    const lines = document.querySelectorAll('.pagination-line'); // Находим полоски
    
    let currentIndex = 0;
    
    function updateSlider() {
        const offset = -currentIndex * 100;
        cardsWrap.style.transform = `translateX(${offset}%)`;
        
        // Переключаем активную полоску
        lines.forEach((line, index) => {
            if (index === currentIndex) {
                line.classList.add('active');
            } else {
                line.classList.remove('active');
            }
        });
    }
    
    // Обработчики кнопок остаются такими же
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
        updateSlider();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });
});