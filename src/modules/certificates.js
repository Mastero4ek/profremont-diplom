import { animate } from './helpers'

export const certificates = () => {
    const certificates = document.querySelectorAll('.sertificate-document'),
        overlay = document.getElementById('overlay'),
        certificatesWrapper = document.querySelector('.text-center'),
        documents = certificatesWrapper.querySelectorAll('.document-overlay'),
        closeBtn = overlay.querySelector('.overlay-close > img'),
        sertificateSwiper = document.querySelector('.sertificate');

    documents.forEach((doc) => {
        doc.addEventListener('mouseover', () => {
            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    doc.style.opacity = progress;
                }
            });
        })

        doc.addEventListener('mouseout', () => {
            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    doc.style.opacity = -progress;
                }
            });
        })
    })

    certificates.forEach((doc) => {
        doc.addEventListener('click', (e) => {
            e.preventDefault()
            overlay.style.display = 'flex'

            animate({
                duration: 200,
                timing(timeFraction) {
                    return timeFraction
                },
                draw(progress) {
                    sertificateSwiper.style.transform = `scale(${progress})`
                }
            })
        })
    })

    overlay.addEventListener('click', (e) => {
        if (e.target === closeBtn) overlay.style.display = 'none'
    })
}