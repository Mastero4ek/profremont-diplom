export function animate({ timing, draw, duration }) {
    let start = performance.now()

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration
        if (timeFraction > 1) timeFraction = 1

        let progress = timing(timeFraction)

        draw(progress)

        if (timeFraction < 1) {
            requestAnimationFrame(animate)
        }

    })
}

export const showModal = (modal, overlay) => {
    modal.style.display = 'flex'
    overlay.style.display = 'flex'

    animate({
        duration: 250,
        timing(timeFraction) {
            return timeFraction
        },
        draw(progress) {
            modal.style.top = progress * 50 + '%'
        }
    })
}