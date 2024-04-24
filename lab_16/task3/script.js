document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggleButton');
    const elements = document.querySelectorAll('#elementsContainer > div');

    button.addEventListener('click', function() {
        elements.forEach(element => {
            if (element.style.display === 'none') {
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        });
    });
});
