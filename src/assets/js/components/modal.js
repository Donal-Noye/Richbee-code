const modal = (triggerSelector, modalSelector, closeSelector) => {
   const trigger = document.querySelector(triggerSelector),
         modal = document.querySelector(modalSelector),
         close = document.querySelector(closeSelector),
         body = document.body;

   trigger.addEventListener('click', e => {
      if (e.target) {
         e.preventDefault();
      }
      
      if (body.classList.contains('no-scroll')) {
         closeModal();
      } else {
         openModal();
      }
   });

   close.addEventListener('click', () => {
      closeModal();
   });

   modal.addEventListener('click', e => {
      if (e.target === modal) {
         closeModal();
      }
   });

   function openModal() {
      modal.classList.add('show');
      body.classList.add('no-scroll');
   } 

   function closeModal() {
      modal.classList.remove('show');
      body.classList.remove('no-scroll');
   }
}

export default modal;