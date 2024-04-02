let apiKey = "T7170iEKl4A6f6gwIPrkYEavEc7qkv5X";

let submitBtn = document.getElementById("submit-btn");

let generateGif = () => {
    let loader = document.querySelector(".loader");
    loader.style.display = "block";
    document.querySelector(".wrapper").style.display = "none";
    let q = document.getElementById("search-box").value;
    let gifCount = 10;
    let finalURL = `https://api.giphy.com/v1/gifs/search?q=${q}&api_key=${apiKey}&limit=${gifCount}
    &offset=0&rating=g&lang=en&`;
    document.querySelector(".wrapper").innerHTML = "";
    fetch(finalURL)
    .then((resp) => resp.json())
    .then((info) => {
        console.log(info.data)
        let gifsData = info.data;
        gifsData.forEach((gif) => {
}
submitBtn.addEventListener("click", generateGif);
window.addEventListener("load", generateGif);