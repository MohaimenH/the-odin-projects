const API_KEY = "fKurH5W7bC9CJGOsbscyp4isRLB9aE1q";
const img = document.querySelector(".image-holder");

const searchGIF = async (search) => {
    const fetchPromise = await fetch(
        `http://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${search}`,
        { mode: "cors" }
    );

    const data = await fetchPromise.json();
    img.src = data.data.images.original.url;

    // fetchPromise.json().then((data) => {
    //     img.src = data.data.images.original.url;
    // });
};

searchGIF("cats");
