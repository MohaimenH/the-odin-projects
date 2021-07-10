import './style.css'
import {constantDisplay} from './pageLoad';
import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';

const root = document.querySelector(".content");

constantDisplay(root);
homePage(root); // Working on Home
const navList = document.querySelector(".nav-list");

const eventListeners = (() => {
    navList.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() === 'li') {
            switchDisplay(e.target.textContent.toLowerCase());
        }
    });
})();

const toggleUnderline = (toUnderline) => {
    let menuItems = navList.childNodes;
    for (let item of menuItems) {
        item.classList.remove('menu-underline');
    }


    toUnderline.classList.add('menu-underline');
};

const switchDisplay = (target) => {

    root.removeChild(root.lastChild);
    if (target === 'home') {
        homePage(root);
        toggleUnderline(document.querySelector('.menu-home'));
    }

    else if (target === 'menu') {
        menuPage(root);
        toggleUnderline(document.querySelector('.menu-menu'));
    }

    else if (target === 'contact') {
        contactPage(root);
        toggleUnderline(document.querySelector('.menu-contact'));
    }

    else {
        console.log("Error: Wrong item selected?");
    }
};