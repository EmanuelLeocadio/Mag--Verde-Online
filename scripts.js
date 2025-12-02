document.addEventListener('DOMContentLoaded', () => {
    
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    // Carousel logic
    if (carouselContainer && prevButton && nextButton && slides.length > 0) {
        let currentSlide = 0;
        const totalSlides = slides.length;

        function moveToSlide(slideIndex) {
            if (slideIndex >= totalSlides) {
                slideIndex = 0;
            } else if (slideIndex < 0) {
                slideIndex = totalSlides - 1;
            }
            const offset = -slideIndex * 100;
            carouselContainer.style.transform = `translateX(${offset}%)`;
            currentSlide = slideIndex;
        }

        nextButton.addEventListener('click', () => {
            moveToSlide(currentSlide + 1);
        });

        prevButton.addEventListener('click', () => {
            moveToSlide(currentSlide - 1);
        });

        moveToSlide(0);
    }

    const loginForm = document.querySelector('.login-area form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const userField = document.getElementById('usuario');
            const passwordField = document.getElementById('senha');

            const username = userField.value;
            const password = passwordField.value;

            
            if (username === 'admin' && password === 'admin') {
               
                window.location.href = 'index.html'; 
            } else {
               
                alert('Usuário ou senha inválidos!');
            }
        });
    }
});
