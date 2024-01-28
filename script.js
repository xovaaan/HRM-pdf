document.addEventListener('DOMContentLoaded', () => {
    const booksFeatureButton = document.getElementById('booksFeatureButton');
    const notesFeatureButton = document.getElementById('notesFeatureButton');
    const booksCardsSection = document.getElementById('booksCardsSection');
    const notesCardsSection = document.getElementById('notesCardsSection');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Function to toggle between light and dark mode icons
    const toggleIcons = () => {
        const lightModeIcon = document.getElementById('lightModeIcon');
        const darkModeIcon = document.getElementById('darkModeIcon');
        lightModeIcon.classList.toggle('hidden', !body.classList.contains('dark'));
        darkModeIcon.classList.toggle('hidden', body.classList.contains('dark'));
    };

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        toggleIcons();
    });

    // Initial toggle to set the correct icons based on the initial mode
    toggleIcons();

    booksFeatureButton.addEventListener('click', () => {
        booksFeatureButton.classList.add('active', 'underline');
        notesFeatureButton.classList.remove('active', 'underline');
        booksCardsSection.classList.remove('hidden');
        notesCardsSection.classList.add('hidden');
    });

    notesFeatureButton.addEventListener('click', () => {
        booksFeatureButton.classList.remove('active', 'underline');
        notesFeatureButton.classList.add('active', 'underline');
        booksCardsSection.classList.add('hidden');
        notesCardsSection.classList.remove('hidden');
    });

    // Add the initial active class to the Books button
    booksFeatureButton.classList.add('active');

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