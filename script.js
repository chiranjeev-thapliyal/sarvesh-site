var modalBox = document.querySelector('.modal__Box');
var closeBtn = document.querySelector('.close-modal');
var modalBoxContent = document.querySelector('.modal__Box--content');
var modalBoxContentIMG = document.querySelector('.modal__Box--content-active-img');

var images = document.querySelectorAll('.image-slider');
var videos = document.querySelectorAll('.video-slider');

closeBtn.addEventListener("click", () => {
    modalBox.style.display = "none";
})  

function nextImg(){
    var modalActiveImg = document.querySelector(".modal-active-image");
    var id = modalActiveImg.getAttribute('id');
    console.log(id.substr(-1));
    let currSlide = Number(id.substr(-1));
    if(currSlide < images.length-1){
        modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="pic-${currSlide+1}" src="${images[currSlide+1].src}">`;
    }else{
        modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="pic-${0}" src="${images[0].src}">`;
    }
}

function nextVid(){
    var modalActiveImg = document.querySelector(".modal-active-image");
    var id = modalActiveImg.getAttribute('id');
    console.log(id.substr(-1));
    let currSlide = Number(id.substr(-1));
    if(currSlide < images.length-1){
        modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="video-${currSlide+1}" src="${images[currSlide+1].src}">`;
    }else{
        modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="video-${0}" src="${images[0].src}">`;
    }
}

function prevImg(){
    var modalActiveImg = document.querySelector(".modal-active-image");
    var id = modalActiveImg.getAttribute('id');
    console.log(id.substr(-1));
    let currSlide = Number(id.substr(-1));
    if(currSlide > 0){
        modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="pic-${currSlide-1}" src="${images[currSlide-1].src}">`;
    }else{
        modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="pic-${images.length-1}" src="${images[0].src}">`;
    }
}

function prevVid(){
    var modalActiveImg = document.querySelector(".modal-active-image");
    var id = modalActiveImg.getAttribute('id');
    console.log(id.substr(-1));
    let currSlide = Number(id.substr(-1));
    if(currSlide > 0){
        modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="video-${currSlide-1}" src="${images[currSlide-1].src}">`;
    }else{
        modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="video-${videos.length-1}" src="${images[0].src}">`;
    }
}

function openModal(name){
    modalBox.style.display = "flex";
    modalBoxContentIMG.innerHTML = `<img class="modal-active-image" id="${name.id}" src="${name.src}">`;
}

function changeModal(img){
    // var name = img.src;
    openModal(img);
}