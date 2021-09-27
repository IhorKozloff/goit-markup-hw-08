const closeBtn = document.querySelector('.contacts-menu__close-btn');
const openBurgerBtn = document.querySelector('.header__burger-menu-btn');
const menu = document.querySelector('.contacts-menu');

openBurgerBtn.addEventListener('click', () => {
menu.classList.add('active');
})

closeBtn.addEventListener('click', () => {
 menu.classList.remove('active');
})