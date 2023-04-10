import { showModal } from "./helpers"

export const modal = () => {
	const openModalBtn = document.querySelector('.button > .fancyboxModal'),
		modal = document.querySelector('.header-modal'),
		overlay = document.querySelector('.overlay'),
		closeModalBtn = document.querySelector('.header-modal__close')

	modal.style.top = '-100%'

	openModalBtn.addEventListener('click', (e) => {
		e.preventDefault()
		showModal(modal, overlay)
	})

	closeModalBtn.addEventListener('click', (e) => {
		modal.style.display = 'none'
		overlay.style.display = 'none'
	})
}