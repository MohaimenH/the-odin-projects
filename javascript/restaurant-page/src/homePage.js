const homePage = (root) => {
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('outerDiv');
    const introText = document.createElement('p');
    introText.textContent = "Home Page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis turpis turpis. Maecenas ac condimentum ipsum. Curabitur egestas, ex et dignissim mollis, libero metus interdum risus, quis consequat nunc sapien sodales sem.";

    outerDiv.appendChild(introText);
    root.appendChild(outerDiv);
}

export default homePage;