const contactPage = (root) => {
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('outerDiv');
    const introText = document.createElement('p');
    introText.textContent = "Home Page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis turpis turpis. Maecenas ac condimentum ipsum. Curabitur egestas, ex et dignissim mollis, libero metus interdum risus, quis consequat nunc sapien sodales sem. Praesent maximus, lorem ut ultrices euismod, lorem nisi gravida orci, aliquet posuere justo tellus vel dui. Nulla sodales, lacus quis porta maximus, odio diam sodales odio, id auctor lacus odio at dolor. Donec nec pretium libero. Etiam molestie tempor turpis nec laoreet. Fusce viverra commodo tortor eu ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur at condimentum urna. Nulla efficitur ligula sed quam vehicula, sed vulputate nisl viverra. Aenean in mauris et massa elementum pulvinar quis et nisl. Praesent maximus a elit at cursus. Vivamus nec convallis dolor, id tincidunt massa. Quisque commodo sapien purus, ac accumsan enim viverra sed. Duis imperdiet lectus in augue eleifend pulvinar. In quis rutrum ex. Etiam faucibus finibus urna, sit amet hendrerit ipsum sodales at. In non arcu id arcu blandit semper. In euismod ac nisi quis commodo. Nam lobortis arcu eget egestas consectetur. Donec placerat nisi sapien, non scelerisque risus consectetur sit amet. Sed posuere mi quis ante ornare tincidunt. Nunc interdum tellus eget odio tincidunt molestie. Aliquam vel leo aliquet, dignissim est at, tincidunt enim. Quisque porta nisi diam, a rhoncus nisl commodo sit amet. Curabitur efficitur leo a dictum vestibulum. Ut sollicitudin leo in varius sollicitudin. Vivamus volutpat nulla eu nisi accumsan pharetra. Phasellus et tempor tellus. Donec dictum ornare ligula, non vehicula urna convallis vitae. Mauris tristique sed nulla eget aliquam. Aenean hendrerit, nulla sit amet tempus semper, tortor velit mollis leo, at vestibulum quam est quis velit. Aenean ac tincidunt nisi. In vehicula, est sit amet gravida tempor, nibh eros semper nisi, id interdum nisl metus ut urna. Fusce in.";

    outerDiv.appendChild(introText);
    root.appendChild(outerDiv);
}
export default contactPage;