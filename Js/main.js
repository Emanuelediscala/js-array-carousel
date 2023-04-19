// DICHIARAZIONE VARIABILI

let containerEl = document.getElementById("container");
let slideElement = document.getElementById("slider");
let slideElements = document.getElementsByClassName("slide");
let btnext = document.getElementById("buttonext");
let currentslide = 1;
let btnback = document.getElementById("buttoback");
let Pics = []
// PicOne

let PicOne = document.createElement("img");
PicOne.src ="./img/01.webp";
PicOne.className="slide";
slideElement.append(PicOne);








// btnext.addEventListener("click",function(){

//     if (currentslide < 3);

//     for (let c = 0; c < slideEls.length; c++) {
        
//         const slide = slideEls[c];
        
//         if (c == currentslide) {
//             slide.className="hidden";    
//         }
//         else {
//             slide.classlist.add("hidden");
//         }
//     }
//     currentslide++;
// })


// btnback.addEventListener("click",function(){
//     for (let c = 0; c < slideEls.length; c++) {
    
//         const slide = slideEls[c];
        
//         if (c == currentslide -1) {
//             slide.classlist.remove("hidden")    
//         }
//         else {
//             slide.classlist.add("hidden")
//         }
//     }
//     currentslide--;
// })