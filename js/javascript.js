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
            let container = document.createElement("div");
            container.classList.add("container");
            let iframe = document.createElement("img");
            console.log(gif);
            iframe.setAttribute("src", gif.images.downsized_medium.url);
            iframe.onload = () => {
                gifCount--;
                if (gifCount === 0) {
                    loader.style.display = "none";
                    document.querySelector(".wrapper").style.display = "grid";
                    
                }
            };
            container.append(iframe);
            let copyBtn = document.createElement("button");
            copyBtn.innerText = "copy link";
            copyBtn.onclick = () => {
                let copyLink = `https://media4.giphy.com/media/${gif.id}/giphy.mp4`;
}
submitBtn.addEventListener("click", generateGif);
window.addEventListener("load", generateGif);