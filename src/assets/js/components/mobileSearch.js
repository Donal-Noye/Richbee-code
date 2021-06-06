const mobileSearch = () => {
   const btn = document.querySelector('.header__input-btn'),
      input = document.querySelector('.header__input');

   btn.addEventListener('click', () => {
      if (document.documentElement.clientWidth <= 768) {
         showInput();
      }
   });

   function showInput() {
      input.classList.add('show');
      document.querySelector('.header__search').style.marginRight = '0';
      document.querySelector('.header__user').style.display = 'none';
   }
}

export default mobileSearch;