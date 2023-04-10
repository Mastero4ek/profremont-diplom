export const scroll = () => {
    const scrollBtn = document.querySelector('.smooth-scroll')

    scrollBtn.style.cursor = 'pointer'
    scrollBtn.style.display = 'none'

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop
        scrollY >= 700 ? scrollBtn.style.display = 'block' : scrollBtn.style.display = 'none'
    })

    const scrollFrom = (elem) => {
        const href = elem.getAttribute("href"),
            block = document.querySelector(href);

        block.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();

        scrollFrom(scrollBtn);
    });
}