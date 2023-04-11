import { showModal } from "./helpers"

export const serviceModal = () => {
    const serviceBtn = document.querySelectorAll('.service-button > .fancyboxModal'),
        modal = document.querySelector('.services-modal'),
        overlay = document.querySelector('.overlay'),
        closeBtn = document.querySelector('.services-modal__close');

    modal.style.top = '-100%'

    serviceBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            showModal(modal, overlay)
        })
    })

    closeBtn.addEventListener('click', (e) => {
        modal.style.display = 'none'
        overlay.style.display = 'none'
    })

    overlay.addEventListener('click', (e) => {
        modal.style.display = 'none'
        overlay.style.display = 'none'
    })
}