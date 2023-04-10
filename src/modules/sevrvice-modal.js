export const serviceModal = () => {
    const serviceBtn = document.querySelectorAll('.service-button > .fancyboxModal'),
        modal = document.querySelector('.services-modal'),
        overlay = document.querySelector('.overlay'),
        closeBtn = document.querySelector('.services-modal__close');

    serviceBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()

            modal.style.display = 'flex'
            overlay.style.display = 'flex'
        })
    })

    closeBtn.addEventListener('click', (e) => {
        modal.style.display = 'none'
        overlay.style.display = 'none'
    })
}