import mobileNav from './components/mobileNav';
import mobileSearch from './components/mobileSearch';
import modal from './components/modal'
import tabs from './components/tabs';

window.addEventListener("DOMContentLoaded", () => {
   modal('.header__card--user', '.modal', '.modal__close');
   tabs('.about__tab-btn', '.about__item', '.about__tab-btn');
   mobileNav('.header__nav-mobile', '.header__nav', 'page__mask');
   mobileNav('.header__top-mobile', '.header__top');
   mobileSearch();
});