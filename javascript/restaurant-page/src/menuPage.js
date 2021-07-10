const burgers = [{name: 'The Classic', description: 'Classic Chicken, Special Mayo', price: 130}, {name: 'BBQ Big', description: 'Loaded Chicken, BBQ & Special Sauce', price: 155}, {name: 'Beef Burger', description: 'Beef Patty, Cheese, Special Sauce', price: 130}, {name: 'Rooster Burger', description: 'Loaded Chicken, Cheese, Special Sauce', price: 155}];

const generateCards = () => {
    const holderDiv = document.createElement('div');
    holderDiv.classList.add('holder-div-menu');

    for (let burger of burgers) {
        let itemCard = document.createElement('div');
        itemCard.classList.add('menu-item-card');
        let name = document.createElement('div');
        let desc = document.createElement('div');
        let price = document.createElement('div');

        name.textContent = burger.name;
        desc.textContent = burger.description;
        price.textContent = `${burger.price}TK`;

        itemCard.appendChild(name);
        itemCard.appendChild(desc);
        itemCard.appendChild(price);

        holderDiv.appendChild(itemCard);
    }

    return holderDiv;
};

const menuPage = (root) => {
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('outerDiv', 'menu-page-div');
    
    const burgerSection = document.createElement('section');

    const burgersHeader = document.createElement('h2');
    burgersHeader.textContent = "Burgers";
    burgersHeader.classList.add('menu-type-heading');

    outerDiv.appendChild(burgersHeader);
    outerDiv.appendChild(generateCards());

    root.appendChild(outerDiv);
}

export default menuPage;