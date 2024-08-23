const reviewSlider = document.querySelector('.review-slider');
const changeReviewButton = document.getElementById('changeReviewButton');
const reviews = document.querySelectorAll('.review');
let currentSlide = 0;

// Function to change the slide
function changeSlide() {
    // Update the transform property to slide between reviews
    currentSlide = (currentSlide + 1) % reviews.length;
    reviewSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Automatically change the slide on mobile devices
// let intervalId;
// if (window.matchMedia("(max-width: 768px)").matches) {
//     intervalId = setInterval(changeSlide, 5000); // Change slide every 5 seconds
// }

// Stop the slideshow when the user interacts with the button
document.addEventListener('click', () => {
    clearInterval(intervalId);
});

// Change the review when the button is clicked
changeReviewButton.addEventListener('click', changeSlide);
