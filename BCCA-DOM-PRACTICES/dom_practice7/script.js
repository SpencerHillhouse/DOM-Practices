document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('circleSlider');
    const wave = document.querySelector('.wave');
  
    slider.addEventListener('input', (event) => {
      const size = event.target.value;
      wave.style.width = `${size}vh`;
      wave.style.height = `${size}vh`;
    });
  });
  