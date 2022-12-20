document.addEventListener('DOMContentLoaded', function(){
  const btnsOpenModal = document.querySelectorAll('.gallery__swiper-slide');
  const modalOverlay = document.querySelector('.modal__overlay');
  const modalsWindow = document.querySelectorAll('.modal__window');
  let body = document.querySelector('body');

  // кнопка открытия модального окна
  btnsOpenModal.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      let path = e.currentTarget.getAttribute('data-path');

      modalsWindow.forEach((el) =>{
        el.classList.remove('modal__window--visible');
      });

      body.classList.add('overflow--lock');
    });
  });
})
