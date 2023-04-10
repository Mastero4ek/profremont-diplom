export const certificates = () => {
    const certificates = document.querySelectorAll('.sertificate-document'),
        overlay = document.querySelector('.overlay');

    certificates.forEach((doc) => {
        doc.addEventListener('click', (e) => {
            e.preventDefault()

            overlay.style.display = 'flex'
        })
    })

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none'
    })
}