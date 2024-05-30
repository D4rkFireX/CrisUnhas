.indicators {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
        }
        .indicators button {
            background-color: rgba(0, 0, 0, 0.5);
            border: none;
            margin: 2px;
            padding: 5px;
            cursor: pointer;
            border-radius: 50%;
        }
        .active {
            background-color: white;
        }

        script

        <script>
        const carouselImages = document.querySelector('.carousel-images');
        const images = document.querySelectorAll('.carousel-images img');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        const indicators = document.querySelectorAll('.indicators button');

        let currentIndex = 0;

        function updateCarousel() {
            const width = carouselImages.clientWidth;
            carouselImages.style.transform = `translateX(${-currentIndex * width}px)`;
            indicators.forEach(indicator => indicator.classList.remove('active'));
            indicators[currentIndex].classList.add('active');
        }

        function showNextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        }

        function showPrevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        }

        nextButton.addEventListener('click', showNextImage);
        prevButton.addEventListener('click', showPrevImage);

        indicators.forEach(indicator => {
            indicator.addEventListener('click', (event) => {
                currentIndex = parseInt(event.target.getAttribute('data-slide'));
                updateCarousel();
            });
        });

        // Optional: auto slide
        setInterval(showNextImage, 5000); // Change image every 5 seconds
    </script>