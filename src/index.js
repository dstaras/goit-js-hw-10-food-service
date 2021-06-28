import './styles.css';
import menu from './menu.json';
import tmpHandl from './tmp/tamplate.hbs';

const menuList = document.querySelector('.js-menu');
const markup = tmpHandl(menu);
menuList.innerHTML = markup;

// Theme

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeSwitch = document.querySelector('.theme-switch__toggle');

themeSwitch.addEventListener('change', changeTheme);
function changeTheme(event) {
  if (event.target.checked) {
    updateTheme(Theme.LIGHT, Theme.DARK);
  } else {
    updateTheme(Theme.DARK, Theme.LIGHT);
  }
}
function updateTheme(oldTheme, newTheme) {
  document.body.classList.add(newTheme);
  document.body.classList.remove(oldTheme);
  localStorage.setItem('pageTheme', newTheme);
}
const carrentTheme = localStorage.getItem('pageTheme');

if (carrentTheme === Theme.DARK) {
  document.body.classList.add(Theme.DARK);
  themeSwitch.checked = true;
} else {
  document.body.classList.add(Theme.LIGHT);
}
