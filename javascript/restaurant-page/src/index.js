import './style.css'
import {constantDisplay} from './pageLoad';
import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';

const root = document.querySelector(".content");

constantDisplay(root);

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
        root.appendChild();
    }

    else if (target === 'menu') {
        root.appendChild();
    }

    else if (target === 'contact') {
        root.appendChild();
    }

    else {
        console.log("Error: Wrong item selected?");
    }
};