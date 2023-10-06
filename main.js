const images = document.querySelectorAll(".img_container");
let slide_count = 0;

const next = document.querySelector(".btn_next");
const preve = document.querySelector(".btn_pre");





function updateslider() {

    images.forEach(image => { image.classList.remove('active') })
    images[slide_count].classList.add('active');
    dot()
}

next.addEventListener("click", function () {
    nextslide()
})
preve.addEventListener("click", function () {
    preslide()
})

function nextslide() {

    if (slide_count == images.length - 1) {
        slide_count = 0;


    }
    else {
        ++slide_count
    }
    updateslider()

}
function preslide() {
    if (slide_count == 0) {
        slide_count = images.length - 1;
    }
    else {
        --slide_count
    }
    updateslider()
}

dots();

function dots() {
    const dots = document.querySelector(".dots");

    images.forEach((img, index) => {
        const dot = document.createElement('div');
        dot.addEventListener("click", () => {
            dotsclick(index)
        })
        dot.classList.add("dot");
        dots.appendChild(dot)
    })
    dot()
        ;
}

function dot() {
    const dot = document.querySelectorAll(".dot");

    dot.forEach((dot) => dot.classList.remove("btn_active"));

    dot[slide_count].classList.add("btn_active");

}
function dotsclick(index) {
    slide_count = index
    updateslider()
}

setInterval(() => {

    if (slide_count == images.length - 1) { slide_count = 0 }
    else {
        slide_count++
    }

    updateslider()
}, 10000);





