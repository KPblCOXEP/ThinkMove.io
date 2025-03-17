document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.box-4-slide');
    const nextButton = document.querySelector('.nextButton');
    const prevButton = document.querySelector('.prevButton');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    nextButton.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    prevButton.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide); 
});