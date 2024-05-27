// slide show
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var img = document.getElementById("img");

var images = [
    "/web_project/images/bruce-mars.jpeg",
    "/web_project/images/couple-training.jpg",
    "/web_project/images/dylan-gillis.jpeg",
    "/web_project/images/fitnish-media.jpg",
    "/web_project/images/pexels-leon.jpg"
]

var currentIndex = 0

function updateSlider(){
    img.src= images[currentIndex];
}


nextBtn.addEventListener("click" , ()=>{
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider()
})

prevBtn.addEventListener("click" , ()=>{
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider()
})

updateSlider();