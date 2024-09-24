document.addEventListener('DOMContentLoaded', () => {
    const backgroundColorPicker = document.getElementById('backgroundColorPicker');
    const bubblesColorPicker = document.getElementById('bubblesColorPicker');
    const bubbles = document.querySelectorAll('.bubbles');
    // const context = document.querySelector('.context');
    const area = document.querySelector('.area');

    function updateBackgroundColor() {
        // context.style.backgroundColor = backgroundColorPicker.value;
        area.style.backgroundColor = backgroundColorPicker.value;
    };

    function updateBubblesColor() {
        bubbles.forEach(bubble => {
            bubble.style.backgroundColor = bubblesColorPicker.value;
        });
    };

    backgroundColorPicker.addEventListener('input', updateBackgroundColor);
    bubblesColorPicker.addEventListener('input', updateBubblesColor);

    updateBackgroundColor();
    updateBubblesColor();
});