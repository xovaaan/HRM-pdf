document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const lightModeIcon = document.getElementById('lightModeIcon');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const booksFeatureButton = document.getElementById('booksFeatureButton');
    const notesFeatureButton = document.getElementById('notesFeatureButton');
    const pdfSection = document.getElementById('pdfSection');
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
    window.showCoursesForSemester = (semesterNumber, isBooks) => {
        fadeOut(semesterCardsSection, () => {
            semesterCardsSection.classList.add('hidden');
            backButton.classList.remove('hidden');
            coursesSection.innerHTML = ''; // Clear previous content

            // Mock data for courses (replace this with your actual data)
            const booksData = {
                1: [
                    { name: 'Entrepreneurship', author: 'Bruce R Barringer', edition: '4th Edition', image: './entrpreneur.png', link: 'https://drive.google.com/file/d/1xRwRXf9tGtNuMXdur7JyCC5pPxTcW7fc/view?usp=sharing' },
                    // Add more books as needed
                ],
                2: [
                    { name: 'Book 2A', author: 'Author 2', edition: '2nd Edition', image: 'book2A.jpg', link: 'https://example.com/book2A.pdf' },
                    // Add more books as needed
                ],
                // ... (add data for other semesters as needed)
            };

            const notesData = {
                1: [
                    { name: 'Entrpreneurship', source: 'ChatGPT', topics: 'Chapter 1', image: '/ent.jpg', link: 'https://drive.google.com/file/d/1YP08AjcScLL8Z4Xpmm4BOfi3ssi0dvK0/view?usp=sharing' },
                    // Add more notes as needed
                ],
                2: [
                    { name: 'Notes 2A', source: 'Source 2', topics: 'Topics 2', image: 'notes2A.jpg', link: 'https://example.com/notes2A.pdf' },
                    // Add more notes as needed
                ],
                // ... (add data for other semesters as needed)
            };

            const coursesData = isBooks ? booksData : notesData;
            const courses = coursesData[semesterNumber];
            courses.forEach((course, index) => {
                const card = document.createElement('div');
                card.classList.add('course-card', 'fade-in'); // Add appropriate class for styling
                card.innerHTML = `
                    <div class="backdrop-blur-15 cursor-pointer dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                        <div class="p-4 flex flex-col hover:text-black justify-center items-center">
                            <img src="${course.image}" alt="Course Image" class="mb-2 w-full h-40 object-cover rounded">
                            <h2 class="text-lg font-semibold open-sans-one  mb-2  style="color: ${isDarkMode ? 'white' : 'text-gray-900'}" ">${course.name}</h2>
                            ${isBooks ? 
                                `<p class="text-md open-sans mb-2 style="color: ${isDarkMode ? 'white' : 'text-gray-700'} ">Author: ${course.author}</p>
                                <p class="text-md open-sans mb-2 style="color: ${isDarkMode ? 'white' : 'text-gray-700'}">Edition: ${course.edition}</p>` :
                                `<p class="text-md open-sans mb-2 style="color: ${isDarkMode ? 'white' : 'text-gray-700'}" >Source: ${course.source}</p>
                                <p class="text-md open-sans mb-2 style="color: ${isDarkMode ? 'white' : 'text-gray-700'}" >Topics: ${course.topics}</p>`
                            }
                            <button class="bg-green-500 open-sans text-black py-2 px-4 rounded-full download-btn"
                                onclick="showDownloadLink('${course.link}')">Download</button>
                        </div>
                    </div>
                `;
                coursesSection.appendChild(card);
            });

            fadeIn(coursesSection);
        });
    };

    // Function to go back from Courses to Semester Cards
    window.goBack = () => {
        fadeOut(coursesSection, () => {
            fadeIn(semesterCardsSection);
            semesterCardsSection.classList.remove('hidden');
            backButton.classList.add('hidden');
            coursesSection.classList.add('hidden');
        });
    };

    // Function to show the download link for a course
    window.showDownloadLink = (link) => {
        window.location.href = link;
    };

    // Books and Notes Feature Toggle
    booksFeatureButton.addEventListener('click', () => {
        resetFeatures();
        booksFeatureButton.classList.add('active');
        fadeIn(semesterCardsSection);
        pdfSection.classList.add('hidden');
        window.showCoursesForSemester(1, true); // Default to show books for the 1st semester
    });

    notesFeatureButton.addEventListener('click', () => {
        resetFeatures();
        notesFeatureButton.classList.add('active');
        fadeIn(semesterCardsSection);
        pdfSection.classList.add('hidden');
        window.showCoursesForSemester(1, false); // Default to show notes for the 1st semester
    });

    // Reset features to default state
    function resetFeatures() {
        booksFeatureButton.classList.remove('active');
        notesFeatureButton.classList.remove('active');
        coursesSection.innerHTML = '';
        fadeOut(coursesSection, () => {
            semesterCardsSection.classList.add('hidden');
            coursesSection.classList.add('hidden');
            backButton.classList.add('hidden');
        });
    }

    // Initial setup to show PDF section when the page loads and start gradient animation
    resetFeatures();
});

function fadeOut(element, callback) {
    element.style.opacity = 1;
    (function fade() {
        if ((element.style.opacity -= 0.1) < 0) {
            element.style.display = 'none';
            callback();
        } else {
            requestAnimationFrame(fade);
        }
    })();
}

function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'grid'; // Change display to grid
    (function fade() {
        let val = parseFloat(element.style.opacity);
        if (!((val += 0.1) > 1)) {
            element.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}
