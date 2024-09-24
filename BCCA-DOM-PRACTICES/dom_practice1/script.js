document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.checkbox_div input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            const parentDiv = event.target.parentElement;
            if (event.target.checked) {
                parentDiv.style.backgroundColor = 'black';
            } else {
                parentDiv.style.backgroundColor = ''
            };
        });
    });
});