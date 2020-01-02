const testLink = document.querySelectorAll('.menu__link');

for (let i = 0; i < testLink.length; i++) {
    testLink[i].onclick = function () {
        if (this.closest('.menu__item').querySelector('.menu_sub')) {
            this.closest('.menu__item').querySelector('.menu_sub').classList.add('menu_active');
            return false;
        }
    };
}