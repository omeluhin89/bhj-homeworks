const clickButtonNext =  document.querySelector('.slider__arrow_next');
const clickButtonPrev = document.querySelector('.slider__arrow_prev');
const imgSlider = document.querySelectorAll('.slider__item');
const arrayImg = Array.from(imgSlider);
let numberImg = 0;

cleanActiveClass = function () {
    for (let i = 0; i < arrayImg.length; i++) {
        if (arrayImg[i].className.includes('slider__item_active')){
            arrayImg[i].classList.remove('slider__item_active')
        }
    }
};

clickButtonNext.onclick = function () {
    cleanActiveClass();
    if (numberImg === 4){
        numberImg = 0;
    } else if (numberImg < arrayImg.length) {
        numberImg++;
    }
    arrayImg[numberImg].classList.add('slider__item_active');
};

clickButtonPrev.onclick = function () {
    cleanActiveClass();
    if (numberImg === 0){
        numberImg = 4;
    } else if (numberImg < arrayImg.length) {
        numberImg--;
    }
    arrayImg[numberImg].classList.add('slider__item_active');
};
