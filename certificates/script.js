const courseWrapper = document.querySelector('.course-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const courses = document.querySelectorAll('.course');

let currentIndex = 0;
const totalCourses = courses.length;

function updateSlider() {
    courseWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalCourses;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalCourses) % totalCourses;
    updateSlider();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Existing social panel JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});