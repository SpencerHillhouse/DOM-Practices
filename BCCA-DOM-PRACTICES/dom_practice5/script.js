document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button-color');
    const emphasizedWord = document.querySelector('.emphasized-word');

    function changeColor(event) {
        const color = event.target.textContent.toLowerCase();
        emphasizedWord.style.color = color;
    };

    buttons.forEach(button => {
        button.addEventListener('click', changeColor)
    })
})