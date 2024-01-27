//Top-Picks 
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// const imageWrapper = document.querySelector('.image-wrapper')
// const imageItems = document.querySelectorAll('.image-wrapper > *')
// const imageLength = imageItems.length
// const perView = 3
// let totalScroll = 0
// const delay = 2000

// imageWrapper.style.setProperty('--per-view', perView)
// for(let i = 0; i < perView; i++) {
//   imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
// }

// let autoScroll = setInterval(scrolling, delay)

// function scrolling() {
//   totalScroll++
//   if(totalScroll == imageLength + 1) {
//     clearInterval(autoScroll)
//     totalScroll = 1
//     imageWrapper.style.transition = '0s'
//     imageWrapper.style.left = '0'
//     autoScroll = setInterval(scrolling, delay)
//   }
//   const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24
//   imageWrapper.style.left = `-${totalScroll * widthEl}px`
//   imageWrapper.style.transition = '.5s'
// }