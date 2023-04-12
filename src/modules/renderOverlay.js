import { renderCertificateSlider } from "./renderCertificateSlider"

export const renderOverlay = () => {
    const body = document.querySelector('body'),
        overlay = document.createElement('div');

    overlay.classList.add('overlay--show')
    overlay.setAttribute('id', 'overlay')

    body.append(overlay)
    overlay.insertAdjacentHTML('beforeend',
        `<button class="overlay-close">
            <img src="images/close-btn.svg" alt="">
        </button>
        
        <div class="sertificate swiper">
            <div class="sertificate__wrapper swiper-wrapper"></div>
        </div>

        <div class="sertificate-arrows">
            <div class="sertificate__arrow sertificate__arrow--left">
                <img src="images/benefits/left-arrow.svg" alt="">
            </div>
            <div class="sertificate__arrow sertificate__arrow--right">
                <img src="images/benefits/right-arrow.svg" alt="">
            </div>
        </div>`
    )

    renderCertificateSlider()
}