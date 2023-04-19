let containerEl = document.getElementById("container");
let slideElement = document.getElementById("slider");
let slideElements = document.getElementsByClassName("slide");
const btnext = document.getElementById("buttonext");
const btnback = document.getElementById("buttoback");

let currentslide = 1;


const picalbum = ['./img/01.webp','./img/02.webp','./img/03.webp','./img/04.webp','./img/05.webp']

let Generalpic;

for (let c=0; c < picalbum.length; c++) {

    const pics = picalbum[c]
    Generalpic = document.createElement("img")
    Generalpic.src = pics;
    Generalpic.className = "slide","hidden";
    slideElement.append(Generalpic);
}

picalbum[0].classList.remove("hidden")

btnext.addEventListener("click", function () {

    if (currentslide < 3);

    for (let c = 0; c < slideEls.length; c++) {

        const slide = slideEls[c];

        if (c == currentslide) {
            slide.className = "hidden";
        }
        else {
            slide.classlist.add("hidden");
        }
    }
    currentslide++;
})


btnback.addEventListener("click", function () {
    for (let c = 0; c < slideEls.length; c++) {
        const slide = slideEls[c];
        if (c == currentslide - 1) {
            slide.classlist.remove("hidden")
        }
        else {
            slide.classlist.add("hidden")
        }
    }
    currentslide--;
})