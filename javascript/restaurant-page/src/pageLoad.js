const constantDisplay = (root) => {
    const header = document.createElement('header');
    header.classList.add("title-header");
    header.textContent = "Fire Fries";
    root.appendChild(header);

    const navBar = document.createElement('nav');
    navBar.classList.add('nav-bar');

    const navList = document.createElement('ul');
    navList.classList.add('nav-list');

    const menuItems= ['Home', 'Menu', 'Contact'];
    
    for (let item of menuItems) {
        let child = document.createElement('li');
        child.textContent = item;
        navList.appendChild(child);
    }

    navBar.appendChild(navList);
    root.appendChild(navBar);

    const updateDisplay = (type) => {
        
    }
    
    return {updateDisplay};

};

export {constantDisplay};