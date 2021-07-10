const menuPage = (root) => {
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('outerDiv');
    const introText = document.createElement('p');
    introText.textContent = "Menu Page.";

    outerDiv.appendChild(introText);
    root.appendChild(outerDiv);
}

export default menuPage;