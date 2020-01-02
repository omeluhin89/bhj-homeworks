const popup = document.querySelector('#modal_main');
const closePopup = document.querySelector('#modal_main .modal__close');
const successPopup = document.querySelector('#modal_success');
const button = document.querySelector('.show-success');
const closeSuccessPopup = document.querySelector('#modal_success .modal__close');

popup.classList.add('modal_active');
closePopup.onclick = function () {
    popup.classList.remove('modal_active');
};
closeSuccessPopup.onclick = function () {
    successPopup.classList.remove('modal_active')
};
button.onclick = function () {
    popup.classList.remove('modal_active');
    successPopup.classList.add('modal_active');
};