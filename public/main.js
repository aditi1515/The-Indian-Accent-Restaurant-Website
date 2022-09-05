function displayOptions(element) {
  let q = document.querySelector(".optionsbar");
  if (element.name == "close-outline") {
    q.classList.add("translate-y-[-10rem]");
    element.name = "reorder-four-outline";
  } else {
    element.name = "close-outline";
    q.classList.remove("translate-y-[-10rem]");
  }
}

let imagesContainer = document.getElementById('imagesContainer');
let gallerySlider = document.getElementById('gallerySlider');
let imagesArray = document.querySelectorAll('#gallerySlider img');
console.log(imagesArray)
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 1;
let size = gallerySlider.clientWidth;

imagesContainer.style.transform = 'translateX(' + (-size*counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    if(counter >= imagesArray.length-1) return;
    imagesContainer.style.transition = "transform 0.4s ease-in-out";
    counter++;
    imagesContainer.style.transform = 'translateX(' + (-size*counter) + 'px)';
})

prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    imagesContainer.style.transition = "transform 0.4s ease-in-out";
    counter--;
    imagesContainer.style.transform = 'translateX(' + (-size*counter) + 'px)';
})

imagesContainer.addEventListener('transitionend',()=>{
    if(imagesArray[counter].id == 'lastclone'){
        console.log('last');
        imagesContainer.style.transition = 'none'
        counter = imagesArray.length - 2;
        imagesContainer.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }

    if(imagesArray[counter].id == 'firstclone'){
        console.log('last');
        imagesContainer.style.transition = 'none'
        counter = imagesArray.length-counter;
        imagesContainer.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }

})

window.addEventListener('resize',()=>{
    location.reload();
})