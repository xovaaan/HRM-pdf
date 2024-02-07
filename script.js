document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const lightModeIcon = document.getElementById('lightModeIcon');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const booksFeatureButton = document.getElementById('booksFeatureButton');
    const notesFeatureButton = document.getElementById('notesFeatureButton');
    const semesterCardsSection = document.getElementById('semesterCardsSection');
    const coursesSection = document.getElementById('coursesSection');
    const backButton = document.getElementById('backButton');


    // By default, show the dark mode icon in light mode
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    lightModeIcon.classList.toggle('hidden', isDarkMode);
    darkModeIcon.classList.toggle('hidden', !isDarkMode);

    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDarkMode = document.body.classList.contains('dark');
        lightModeIcon.classList.toggle('hidden', !isDarkMode);
        darkModeIcon.classList.toggle('hidden', isDarkMode);
    });
    

    // Function to show the Courses for a specific semester
    window.showCoursesForSemester = (semesterNumber) => {
        semesterCardsSection.classList.add('hidden');
        backButton.classList.remove('hidden');
        coursesSection.innerHTML = ''; // Clear previous content

        // Mock data for courses (replace this with your actual data)
        const coursesData = {
            1: [
                { name: 'Course 1A', link: 'https://drive.google.com/file/d/1KvfPGIshsy_iR7d9dMFUqsQAdeD5nooT/view?usp=sharing', author: 'Author 1', edition: '1st Edition', image: 'entrpreneur.png' },
                { name: 'Course 1A', link: 'https://drive.google.com/file/d/1KvfPGIshsy_iR7d9dMFUqsQAdeD5nooT/view?usp=sharing', author: 'Author 1', edition: '1st Edition', image: 'entrpreneur.png' },
                { name: 'Course 1A', link: 'https://drive.google.com/file/d/1KvfPGIshsy_iR7d9dMFUqsQAdeD5nooT/view?usp=sharing', author: 'Author 1', edition: '1st Edition', image: 'entrpreneur.png' },
                // Add more courses as needed
            ],

            2: [
                { name: 'Course 2A', link: 'https://example.com/course2A.pdf', author: 'Author 2', edition: '2nd Edition', image: 'entrpreneur.png' },
                { name: 'Course 2A', link: 'https://example.com/course2A.pdf', author: 'Author 2', edition: '2nd Edition', image: 'entrpreneur.png' },
                { name: 'Course 2A', link: 'https://example.com/course2A.pdf', author: 'Author 2', edition: '2nd Edition', image: 'entrpreneur.png' },
                // Add more courses as needed
            ],

            // ... (add data for other semesters as needed)
            3: [
                { name: 'Course 3A', link: 'https://example.com/course4A.pdf', author: 'Author 4', edition: '4th Edition', image: 'entrpreneur.png' },
                { name: 'Course 3A', link: 'https://example.com/course4A.pdf', author: 'Author 4', edition: '4th Edition', image: 'entrpreneur.png' },
                // Add more courses as needed
            ],

            4: [
                { name: 'Course 4A', link: 'https://example.com/course4A.pdf', author: 'Author 4', edition: '4th Edition', image: 'entrpreneur.png' },
                { name: 'Course 4A', link: 'https://example.com/course4A.pdf', author: 'Author 4', edition: '4th Edition', image: 'entrpreneur.png' },
                // Add more courses as needed
            ],

            5: [
                { name: 'Course 5A', link: 'https://example.com/course4A.pdf', author: 'Author 4', edition: '4th Edition', image: 'entrpreneur.png' },
                { name: 'Course 5A', link: 'https://example.com/course4A.pdf', author: 'Author 4', edition: '4th Edition', image: 'entrpreneur.png' },
                // Add more courses as needed
            ],

            6: [
                { name: 'Course 6A', link: 'https://example.com/course4A.pdf', author: 'Author 4', edition: '4th Edition', image: 'entrpreneur.png' },
                { name: 'Course 6A', link: 'https://example.com/course4A.pdf', author: 'Author 4', edition: '4th Edition' , image: 'entrpreneur.png' },
                // Add more courses as needed
            ],

            7: [
                { name: 'Course 7A', link: 'https://example.com/course4A.pdf', author: 'Author 4', edition: '4th Edition', image: 'entrpreneur.png' },
                { name: 'Course 7A', link: 'https://example.com/course4A.pdf', author: 'Author 4', edition: '4th Edition' , image: 'entrpreneur.png' },
                // Add more courses as needed
            ],

            8: [
                { name: 'Course 8A', link: 'https://example.com/course4A.pdf', author: 'Author 4', edition: '4th Edition', image: 'entrpreneur.png' },
                { name: 'Course 8A', link: 'https://example.com/course4A.pdf', author: 'Author 4', edition: '4th Edition', image: 'entrpreneur.png' },
                // Add more courses as needed
            ]
        };

        const courses = coursesData[semesterNumber];
        courses.forEach(course => {
            const card = document.createElement('div');
            card.classList.add('bg-white','cursor-pointer', 'dark:bg-gray-700', 'rounded-lg', 'overflow-hidden', 'shadow-lg', 'course-card');
            card.innerHTML = `
                <div class="p-4 flex flex-col justify-center items-center">
                    <img src="${course.image}" alt="Course Image" class="mb-2 w-full h-40 object-cover rounded">
                    <h2 class="text-lg font-semibold open-sans-one text-gray-900 mb-2 dark:text-black">${course.name}</h2>
                    <p class="text-md open-sans text-gray-700 mb-2 dark:text-gray-300">Author: ${course.author}</p>
                    <p class="text-md open-sans text-gray-700 mb-2 dark:text-gray-300">Edition: ${course.edition}</p>
                    <button class="bg-green-500 open-sans text-black py-2 px-4 rounded-full download-btn"
                        onclick="showDownloadLink('${course.link}')">Download</button>
                </div>
            `;
            coursesSection.appendChild(card);
        });
        coursesSection.classList.remove('hidden');
    };

    // Function to go back from Courses to Semester Cards
    window.goBack = () => {
        semesterCardsSection.classList.remove('hidden');
        backButton.classList.add('hidden');
        coursesSection.classList.add('hidden');
    };

    // Function to show the download link for a course
    window.showDownloadLink = (link) => {
        window.location.href = link;
    };

    // Books and Notes Feature Toggle
    // Books and Notes Feature Toggle
booksFeatureButton.addEventListener('click', () => {
    resetFeatures();
    booksFeatureButton.classList.add('active');
    semesterCardsSection.classList.remove('hidden');
    pdfSection.classList.add('hidden');
});

notesFeatureButton.addEventListener('click', () => {
    resetFeatures();
    notesFeatureButton.classList.add('active');
    semesterCardsSection.classList.remove('hidden');
    pdfSection.classList.add('hidden');
});

// Reset features to default state
function resetFeatures() {
    booksFeatureButton.classList.remove('active');
    notesFeatureButton.classList.remove('active');
    coursesSection.innerHTML = '';
    semesterCardsSection.classList.add('hidden');
    coursesSection.classList.add('hidden');
    backButton.classList.add('hidden');
}

// Initial setup to show PDF section when the page loads and start gradient animation
resetFeatures();


});

