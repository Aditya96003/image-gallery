document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.buttonF');
    const images = document.querySelectorAll('.images');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('filter');

            images.forEach(image => {
                if (filter === 'all' || image.getAttribute('category') === filter) {
                    image.classList.remove('hide');
                } else {
                    image.classList.add('hide');
                }
            });
        });
    });
});
