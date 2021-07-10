const contactPage = (root) => {
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('outerDiv','contact-page-div');
    const introText = document.createElement('p');
    introText.textContent = "We Can't Wait To Meet You.";

    const subText = document.createElement('p');
    subText.textContent = "We are located at 221B Baker Street, London."

    const subText2 = document.createElement('p');
    subText2.textContent = "We would also love to hear from you at (123) 456-7890."

    outerDiv.appendChild(introText);
    outerDiv.appendChild(subText);
    outerDiv.appendChild(subText2);
    root.appendChild(outerDiv);
}
export default contactPage;