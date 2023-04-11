import Swiper from 'swiper/bundle'

export const slider = (block, speed, next, prev, view, space) => {
    const swiper = new Swiper(block, {
        speed: speed,
        loop: true,
        navigation: {
            nextEl: next,
            prevEl: prev,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            576: {
                slidesPerView: view,
                spaceBetween: space,
            },
        }
    });
}