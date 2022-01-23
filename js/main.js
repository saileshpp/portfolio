
document.addEventListener('DOMContentLoaded', () => {


    const hamburger = document.querySelector(".hamburger")
    const sideNav = document.querySelector('.side_nav')
    const main = document.querySelector('.main')



    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active')
        sideNav.classList.toggle('side_nav_is_active')
        main.classList.toggle('slide_left')
    })


    window.addEventListener('load', () => {
        const preloadWrap = document.querySelector('.preload_wrap')
        preloadWrap.classList.add('preload_finish')
        main.style.opacity = 1;
    })
    const canvas = document.querySelector('.picture_box .img_wrap')
    const myAnimation = new hoverEffect({
        parent: canvas,
        intensity: .5,
        image1: 'img/main_img.jpg',
        image2: 'img/main_img2.jpg',
        displacementImage: 'img/displacement/10.jpg'
    });
})
