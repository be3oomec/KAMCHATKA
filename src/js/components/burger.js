import { disableScroll } from './disable-scroll';
import { enableScroll } from './enable-scroll';

// --- M O B I L E  B U R G E R
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__list');

if (burger) {
  burger.addEventListener('click', function(e) {
    menu.classList.toggle('header__list--active');
    burger.classList.toggle('burger--active');
    // document.body.classList.toggle('lock');

    if (menu?.classList.contains('header__list--active')) {
      disableScroll();
    } else {
      enableScroll();
    }
  });
}
// --- M O B I L E  B U R G E R
