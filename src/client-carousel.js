function clientCarousel() {
    const miniButtons = document.querySelectorAll('.mini-button');
    const slider = document.querySelector('#slider');
    let widthSlider = slider.clientWidth;
    let quantItems = document.querySelectorAll('.client-logo').length;
    let quantVisibleItems = getQuantVisibleItems();
    let overflowItem = quantItems - quantVisibleItems;
    let widthOffset = widthSlider / quantVisibleItems;
    let currentOffset = 0; /* where the offset is */
    let interval;
    
    function getQuantVisibleItems() {
        /* update how many items will be visible in carousel */
        let screenWidth = window.document.documentElement.clientWidth;
         /* adjust for more screen sizes */
        if (screenWidth > 767) {
            return 5;
        } else if (screenWidth <= 767 && screenWidth > 575) {
            return 4;
        } else if (screenWidth <= 575 && screenWidth > 479) {
            return 3;
        } else if (screenWidth <= 479){
            return 2
        }
    }
    
    miniButtons.forEach((item, index) => {
        item.addEventListener('click', () => {
            /* Stop carousel auto loop */
            clearInterval(interval);
    
            /* Active the style of the clicked mini-button */
            miniButtons.forEach(item => {
                item.classList.remove('active-mini-button');
            });
            item.classList.add('active-mini-button');
            slider.style.transform = `translateX(${-widthOffset * index}px)`;
            currentOffset = -widthOffset * index;
    
            /* restart auto loop */
            startAutoSlide();
        })
    });
    
    function startAutoSlide() {
        interval = setInterval(() => {
            /* update the logo position */
            currentOffset === -widthOffset * overflowItem ? currentOffset = 0 : currentOffset -= widthOffset;
            slider.style.transform = `translateX(${currentOffset}px)`;
    
            /* Active the style of the clicked mini-button */
            miniButtons.forEach(item => {
                item.classList.remove('active-mini-button');
            });
            miniButtons[currentOffset / -widthOffset].classList.add('active-mini-button');
            
        }, 3000);
    }
    startAutoSlide();
    
    /* === resposive carousel === */
    
    /* Update the sizes when the page width is resized */
    window.addEventListener('resize', updateCarouselResponsivity);
    
    function updateCarouselResponsivity() {
        /* Stop carousel auto loop */
        clearInterval(interval);
    
        /* Update the sizes */
        widthSlider = slider.clientWidth;
        quantVisibleItems = getQuantVisibleItems();
        overflowItem = quantItems - quantVisibleItems;
        widthOffset = widthSlider / quantVisibleItems;
        
        /* restart counter of offset */
        currentOffset = 0;
    
        /* active first mini button */
        miniButtons.forEach(item => {
            item.classList.remove('active-mini-button');
        });
        miniButtons[0].classList.add('active-mini-button');
    
        /* reset position of slider (begin) */
        slider.style.transform = `translateX(${currentOffset}px)`;
    
        /* restart auto loop */
        startAutoSlide();
    }
}

export default clientCarousel;