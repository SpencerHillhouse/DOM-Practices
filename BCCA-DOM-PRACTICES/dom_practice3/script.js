document.addEventListener('DOMContentLoaded', () => {
    const showWindowButtonEl = document.getElementById('show-window');
    const hideWindowButtonEl = document.getElementById('close-window');
    const windowElement = document.querySelector('.window');
    const overlayElement = document.querySelector('.overlay');

    function showWindow() {
        windowElement.classList.remove('hidden');
        overlayElement.classList.remove('hidden');
    }

    function hideWindow() {
        windowElement.classList.add('hidden');
        overlayElement.classList.add('hidden');
    }

    showWindowButtonEl.addEventListener('click', showWindow);
    hideWindowButtonEl.addEventListener('click', hideWindow);
    })