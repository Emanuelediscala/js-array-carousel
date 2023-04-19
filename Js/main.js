let containerEl = document.getElementById("container");
let slideElement = document.getElementById("slider");
let slideElements = document.getElementsByClassName("slide");
const btnext = document.getElementById("buttonext");
const btnback = document.getElementById("buttoback");
let currentslide = 1;


let picalbum = []

picalbum.push('./img/01.webp')
picalbum.push('./img/02.webp')
picalbum.push('./img/03.webp')
picalbum.push('./img/04.webp')
picalbum.push('./img/05.webp')


for (let c=0; c < picalbum.length; c++)

    picalbum = document.createElement("img");
    Firstpic = picalbum [0]


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