import { animate } from './helpers'

export const certificates = () => {
    const certificates = document.querySelectorAll('.sertificate-document'),
        overlay = document.querySelector('.overlay'),
        img = document.createElement('img');

    const certificatesWrapper = document.querySelector('.text-center'),
        documents = certificatesWrapper.querySelectorAll('.document-overlay')

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

    certificatesWrapper.addEventListener('click', (e) => {
        e.preventDefault()

        const document = e.target.closest('.document-overlay')
        if (document) {
            console.log('gf');
        }
    })

    // certificates.forEach((doc, index) => {
    //     doc.addEventListener('click', (e) => {
    //         e.preventDefault()

    //         overlay.style.display = 'flex'

    //         img.setAttribute('src', 'images/documents/original/document4.jpg')
    //         img.style.margin = '0 auto'
    //         overlay.append(img)
    //     })
    // })

    // overlay.addEventListener('click', () => {
    //     img.remove()
    //     overlay.style.display = 'none'
    // })
}