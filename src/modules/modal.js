export const modal = () => {
	const openModalBtn = document.querySelector('.button > .fancyboxModal'),
		modal = document.querySelector('.header-modal'),
		overlay = document.querySelector('.overlay'),
		closeModalBtn = document.querySelector('.header-modal__close')

	openModalBtn.addEventListener('click', (e) => {
		e.preventDefault()

		modal.style.display = 'flex'
		overlay.style.display = 'flex'
	})

	closeModalBtn.addEventListener('click', (e) => {
		modal.style.display = 'none'
		overlay.style.display = 'none'
	})
}