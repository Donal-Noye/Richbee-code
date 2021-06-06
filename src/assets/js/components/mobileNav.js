const mobileNav = (triggerSelector, sidebarSelector) => {
   const triggerElem = document.querySelectorAll(triggerSelector),
      sidebarElem = document.querySelectorAll(sidebarSelector),
      mask = document.querySelector('.page__mask'),
      body = document.body;

   triggerElem.forEach(elem => {
      elem.addEventListener('click', () => {
         if (body.classList.contains('no-scroll')) {
            closeSidebar();
         } else {
            openSidebar()
         }
      });
   });

   function openSidebar() {
      mask.addEventListener('click', () => {
         closeSidebar();
      });   

      body.classList.add('no-scroll');
      mask.classList.add('active');

      sidebarElem.forEach(elem => {
         elem.classList.add('show');
      });
   }

   function closeSidebar() {
      body.classList.remove('no-scroll');
      mask.classList.remove('active');

      sidebarElem.forEach(elem => {
         elem.classList.remove('show');
      });
   }
}

export default mobileNav;