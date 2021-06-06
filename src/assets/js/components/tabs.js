const tabs = (tabsSelector, tabsItemsSelector, tabBtn) => {
   const tabsBtn = document.querySelectorAll(tabsSelector),
         tabsItems = document.querySelectorAll(tabsItemsSelector);

   tabsBtn.forEach(onTabClick);

   function onTabClick(item) {
      item.addEventListener('click', () => {
         let currentBtn = item;
         let tabId = currentBtn.getAttribute('data-tab');
         let currentTab = document.querySelector(tabId);

         if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(item => {
               item.classList.remove('active');
            });
            
            tabsItems.forEach(item => {
               item.classList.remove('active');
               item.style.display = 'none';
            });
   
            currentBtn.classList.add('active');
            currentTab.style.display = 'block';
            setTimeout(() => {
               currentTab.classList.add('active');
            }, 100);
         }
      });
   }
   
   document.querySelector(tabBtn).click();
}

export default tabs;