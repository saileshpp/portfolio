
document.addEventListener('DOMContentLoaded', () => {
    const canvasWrapper = document.querySelector('.left_content ')
    const main = document.querySelector('.main')

    main.addEventListener('scroll', () => {


        if (main.scrollTop) {
            canvasWrapper.classList.add('mobileScroll')
        }
        else {
            canvasWrapper.classList.remove('mobileScroll')
        }
    })

    const hamburger = document.querySelector(".hamburger")
    const sideNav = document.querySelector('.side_nav')


    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active')
        sideNav.classList.toggle('side_nav_is_active')
        main.classList.toggle('slide_left')
    })


    const canvas = document.querySelector('.picture_box .img_wrap')
    const myAnimation = new hoverEffect({
        parent: canvas,
        intensity: .5,
        image1: 'img/main_img.jpg',
        image2: 'img/main_img2.jpg',
        displacementImage: 'img/displacement/10.jpg',
    });


    AOS.init({
        duration: 1000,
    });

    const accs = document.querySelectorAll(".accordion");

    accs.forEach(
        acc => {
            acc.addEventListener("click", () => {
                const panel = acc.nextElementSibling;
                if (acc.classList.contains('active')) {
                    panel.style.maxHeight = null;
                    acc.classList.toggle("active");
                }
                else {
                    accs.forEach(
                        acc => {
                            const panel = acc.nextElementSibling;
                            acc.classList.remove('active')
                            panel.style.maxHeight = null;
                        })
                    acc.classList.toggle("active");

                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                }
            });
        }
    )

    window.addEventListener('load', () => {
        const preloadWrap = document.querySelector('.preload_wrap')
        preloadWrap.classList.add('preload_finish')
        main.style.opacity = 1;
    })
})
