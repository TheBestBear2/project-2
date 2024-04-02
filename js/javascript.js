let apiKey = "T7170iEKl4A6f6gwIPrkYEavEc7qkv5X";

let submitBtn = document.getElementById("submit-btn");
let generateGif = () => {
    let loader = document.querySelector(".loader");
    loader.style.display = "block";
    document.querySelector(".wrapper").style.display = "none";
}
submitBtn.addEventListener("click", generateGif);
window.addEventListener("load", generateGif);