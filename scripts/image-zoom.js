let imageZoom = document.querySelector('.image-zoom');
let productImages = document.querySelectorAll('.product-image');
let zoomImage = document.querySelector('.zoom-image');
let indexImage = 0;

// add a index to each icon, to help the previous/next buttons to work
let zoomBtn = document.querySelectorAll('.zoom-icon');
zoomBtn.forEach((icon, index) => {
    icon.setAttribute('data-index', index);
})

zoomBtn.forEach((icon) => {
    icon.addEventListener('click', element => {
        let dataIndex = element.target.getAttribute('data-index');
        indexImage = parseInt(dataIndex);
        setSrcZoomImage(indexImage);
        imageZoom.classList.add('active-display');
    });
})

function setSrcZoomImage(indexImage) {
    let imageSrc = productImages[indexImage].getAttribute('src');
    zoomImage.setAttribute('src', imageSrc);
}

let previousImage = document.querySelector('.previous-image');
previousImage.addEventListener('click', () => {
    indexImage === 0 ? indexImage = 8 : indexImage--;
    setSrcZoomImage(indexImage);
})

let nextImage = document.querySelector('.next-image');
nextImage.addEventListener('click', () => {
    indexImage === 8 ? indexImage = 0 : indexImage++;
    setSrcZoomImage(indexImage);
})

let closeZoom = document.querySelector('.close-zoom');
closeZoom.addEventListener('click', () => {
    imageZoom.classList.remove('active-display');
})