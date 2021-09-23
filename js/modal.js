(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('.modal-window__close-btn'),
      modal: document.querySelector('[data-modal]'),
    };
   
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();

  const closeBtn = document.querySelector('.contacts-menu__close-btn');
  const openBurgerBtn = document.querySelector('.header__burger-menu-btn');
  const menu = document.querySelector('.menu-overlay');
  
  openBurgerBtn.addEventListener('click', () => {
  menu.classList.add('invisible');
  })

  closeBtn.addEventListener('click', () => {
   menu.classList.remove('invisible');
  })
 