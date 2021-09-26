const modalBox = document.querySelector('.modal-overlay')
const Modal = {
	open() {
		modalBox.classList.add('active')
	},
	close() {
		modalBox.classList.remove('active')
	}
}
