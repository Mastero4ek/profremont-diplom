import { animate } from './helpers'

export const certificates = () => {
    const certificates = document.querySelectorAll('.sertificate-document'),
        overlay = document.getElementById('overlay'),
        certificatesWrapper = document.querySelector('.text-center'),
        documents = certificatesWrapper.querySelectorAll('.document-overlay'),
        img = document.createElement('img');

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

    const showCertificate = (e) => {
        let parent = e.target.parentElement,
            href = parent.getAttribute('href')

        overlay.style.display = 'flex'

        img.setAttribute('src', href)
        img.classList.add('sertificate--show')

        overlay.append(img)

        animate({
            duration: 400,
            timing(timeFraction) {
                return timeFraction
            },
            draw(progress) {
                img.style.transform = `scale(${progress})`
            }
        });
    }

    certificates.forEach((doc) => {
        doc.addEventListener('click', (e) => {
            e.preventDefault()

            showCertificate(e)
        })
    })

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            img.remove()
            overlay.style.display = 'none'
        }
    })
}