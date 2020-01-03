const buttonList = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const listLanguage = document.querySelectorAll('.dropdown__item');

buttonList.onclick = function () {
    dropdownList.classList.add('dropdown__list_active');
};

listLanguage.forEach(language => language.addEventListener('click', function () {
    buttonList.textContent = this.textContent;
    dropdownList.classList.remove('dropdown__list_active');
    event.preventDefault();
}));

