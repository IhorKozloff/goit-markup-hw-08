const closeBtn = document.querySelector('.contacts-menu__close-btn');
const openBurgerBtn = document.querySelector('.header__burger-menu-btn');
const menu = document.querySelector('.menu-overlay');

openBurgerBtn.addEventListener('click', () => {
menu.classList.add('invisible');
})

closeBtn.addEventListener('click', () => {
 menu.classList.remove('invisible');
})
