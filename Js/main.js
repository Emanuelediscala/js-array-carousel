let containerEl = document.getElementById("container");
let slideElement = document.getElementById("slider");
let slideElements = document.getElementsByClassName("slide");
const btnext = document.getElementById("buttonext");
const btnback = document.getElementById("buttoback");

let currentslide = 0;


const picalbum = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp']
let slideArray = []
let Generalpic;

for (let c = 0; c < picalbum.length; c++) {

    const pics = picalbum[c]
    Generalpic = document.createElement("img")
    Generalpic.src = pics;
    Generalpic.classList.add("slide");
    slideElement.append(Generalpic);
    if (c > 0) {
        Generalpic.classList.add("hidden");
    }
}
slideArray = document.querySelectorAll(".slide")
console.log(slideArray)

btnext.addEventListener("click", function() {
    for (let c = 0; c < slideArray.length; c++) {
        const slide = slideArray[c];

        if (c == currentslide+1) {
            slide.classList.remove("hidden");
        }
        else {
            slide.classList.add("hidden");
        }
    }
    currentslide++;

})
btnback.addEventListener("click", function() {

    for (let c = 0; c < slideArray.length; c++) {

        const slide = slideArray[c];

        if (c == currentslide-1) {
            slide.classList.remove("hidden");
        }
        else {
            slide.classList.add("hidden");
        }
    }
    currentslide--;
})