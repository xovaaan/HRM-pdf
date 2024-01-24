// script.js

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        updateDarkModeIcon();
        updateBodyStyles();
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
            body.style.backgroundColor = 'black';
            
        } else {
            // Light mode is active
            body.style.backgroundColor = ''; // Reset to default
            body.style.color = ''; // Reset to default
        }
    }

    // Initial setup
    updateDarkModeIcon();
    updateBodyStyles();

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

