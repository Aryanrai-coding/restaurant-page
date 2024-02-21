import { homePageLoad } from './home.js';
import { loadMenupage } from './menu.js';
import { loadAboutPage } from './about.js';

document.addEventListener('DOMContentLoaded', () => {
    homePageLoad();
});

function clearContent() {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
}

function switchToHomeTab() {
    clearContent();
    homePageLoad();
}

function switchToMenuTab() {
    clearContent();
    loadMenupage();
}
function switchToAboutTab() {
    clearContent();
    loadAboutPage();
}

document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.querySelector('#home-btn');
    const menuBtn = document.querySelector('#menu-btn');
    const aboutBtn = document.querySelector('#about-btn');

    homeBtn.addEventListener('click', switchToHomeTab)
    menuBtn.addEventListener('click', switchToMenuTab)
    aboutBtn.addEventListener('click', switchToAboutTab)
});






