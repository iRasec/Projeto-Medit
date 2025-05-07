/*function slide1(){
    document.getElementById('id').src="../assets/medite10.jpeg";
    setTimeout(slide2, 2000);
}

function slide2(){
    document.getElementById('id').src="../assets/espacomedit.jpeg";
    setTimeout(slide3, 2000);
}

function slide3(){
    document.getElementById('id').src="../assets/medite2.jpeg";
    setTimeout(slide1, 2000);
}

window.onload = slide1;*/

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'previous', 'next');
        if (i === index) {
            slide.classList.add('active');
        } else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add('previous');
        } else if (i === (index + 1) % slides.length) {
            slide.classList.add('next');
        }
    });
}

function goToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function goToPreviousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

const nextButton = document.querySelector('.nav.next');
const prevButton = document.querySelector('.nav.prev');

nextButton.addEventListener('click', goToNextSlide);
prevButton.addEventListener('click', goToPreviousSlide);

window.onload = () => showSlide(currentIndex);