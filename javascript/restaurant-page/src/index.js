import './style.css'
import {constantDisplay} from './pageLoad';
import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';

const root = document.querySelector(".content");

constantDisplay(root);
homePage(root);

const eventListeners = (() => {
    const navList = document.querySelector(".nav-list");

    navList.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() === 'li') {
            switchDisplay(e.target.textContent.toLowerCase());
        }
    });
})();

const switchDisplay = (target) => {

    root.removeChild(root.lastChild);

    if (target === 'home') {
        homePage(root);
    }

    else if (target === 'menu') {
        menuPage(root);
    }

    else if (target === 'contact') {
        contactPage(root);
    }

    else {
        console.log("Error: Wrong item selected?");
    }
};