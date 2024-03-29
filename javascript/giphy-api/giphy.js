const API_KEY = GIPHY_API_KEY;
const img = document.querySelector(".image-holder");

let currentGIF = "cats";

const searchGIF = async (search) => {
    const fetchPromise = await fetch(
        `http://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${search}`,
        { mode: "cors" }
    );

    const data = await fetchPromise.json();
    img.src = data.data.images.original.url;

    // fetchPromise.json().then((data) => {
    //     img.src = data.data.images.original.url;
    // }); // using `then`
};

searchGIF(currentGIF);

document.querySelector(".refresh-btn").addEventListener("click", (e) => {
    e.preventDefault();
    searchGIF(currentGIF);
});

document.querySelector(".search-btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentGIF = document.querySelector(".search-input").value;
    searchGIF(currentGIF);
});
