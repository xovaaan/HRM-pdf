document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const booksButton = document.getElementById('booksFeatureButton');
    const cardsSection = document.getElementById('cardsSection');

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        updateDarkModeIcon();
        updateBodyStyles();
        updateBooksFeatureStyle();
    });

    booksButton.addEventListener('click', () => {
        booksButton.classList.toggle('active');
        cardsSection.classList.toggle('hidden');
        updateBooksFeatureStyle();
    });

    // Function to update the dark mode icon
    function updateDarkModeIcon() {
        const darkModeIcon = document.getElementById('darkModeIcon');
        const lightModeIcon = document.getElementById('lightModeIcon');

        if (body.classList.contains('dark')) {
            // Dark mode is active
            darkModeIcon.style.display = 'none';
            lightModeIcon.style.display = 'inline';
        } else {
            // Light mode is active
            darkModeIcon.style.display = 'inline';
            lightModeIcon.style.display = 'none';
        }
    }

    // Function to update the body styles based on dark mode
    function updateBodyStyles() {
        if (body.classList.contains('dark')) {
            // Dark mode is active
            body.style.backgroundColor = '#191919';
        } else {
            // Light mode is active
            body.style.backgroundColor = ''; // Reset to default
            body.style.color = ''; // Reset to default
        }
    }

    // Function to update the style of the Books button based on dark mode and click state
    function updateBooksFeatureStyle() {
        if (body.classList.contains('dark')) {
            // Dark mode is active
            booksButton.style.color = 'white';
            booksButton.style.backgroundColor = cardsSection.classList.contains('hidden') ? 'black' : 'green';
        } else {
            // Light mode is active
            booksButton.style.color = ''; // Reset to default
            booksButton.style.backgroundColor = cardsSection.classList.contains('hidden') ? 'black' : 'green';
        }
    }

    // Initial setup
    updateDarkModeIcon();
    updateBodyStyles();
    updateBooksFeatureStyle();

    // Download PDF functionality
    const downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pdfLink = button.dataset.pdfLink;
            const link = document.createElement('a');
            link.href = pdfLink;
            link.download = 'document.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});
