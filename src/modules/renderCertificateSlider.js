export const renderCertificateSlider = () => {
    const allDocuments = document.querySelectorAll('.sertificate-document'),
        sertificateWrapper = document.querySelector('.sertificate__wrapper');

    allDocuments.forEach(doc => {
        sertificateWrapper.insertAdjacentHTML('beforeend',
            `<div class="sertificate__img swiper-slide">
                <img src="${doc}" alt="">
            </div>`
        )
    })
}