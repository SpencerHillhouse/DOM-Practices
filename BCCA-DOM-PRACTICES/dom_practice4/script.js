document.addEventListener('DOMContentLoaded', () => {
    const fontSizeDownButton = document.querySelector('.font-size-down');
    const fontDefaultButton = document.querySelector('.font-default-size');
    const fontSizeUpButton = document.querySelector('.font-size-up');
    const paragraph = document.querySelector('p[name="main-text"]');

    function setFontSizeDown() {
        paragraph.style.fontSize= '2rem';
    };

    function setFontDefaultSize() {
        paragraph.style.fontSize = '4rem';
    };

    function setFontSizeUp() {
        paragraph.style.fontSize = '6rem';
    };

    fontSizeDownButton.addEventListener('click', setFontSizeDown);
    fontDefaultButton.addEventListener('click', setFontDefaultSize);
    fontSizeUpButton.addEventListener('click', setFontSizeUp);
})