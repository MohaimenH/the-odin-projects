const contactPage = (root) => {
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('outerDiv');
    const introText = document.createElement('p');
    introText.textContent = "Contact Page.";

    outerDiv.appendChild(introText);
    root.appendChild(outerDiv);
}
export default contactPage;