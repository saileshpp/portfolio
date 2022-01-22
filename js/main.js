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

})