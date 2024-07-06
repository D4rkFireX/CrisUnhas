let currentIndex = 0;
  const intervalTime = 3000; // Tempo entre mudanças de slide em milissegundos

  function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;

    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector(
      ".carousel-inner"
    ).style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Função para iniciar a mudança automática de slides
  function startAutoSlide() {
    setInterval(nextSlide, intervalTime);
  }

  document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentIndex);
    startAutoSlide(); // Inicia a mudança automática de slides quando a página carrega
  });