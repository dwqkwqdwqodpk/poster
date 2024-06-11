const mobileBtn = document.querySelector('.mobile__button')
const mobileClose = document.querySelector('.mobile__button-close')
const mobileOpen = document.querySelector('.mobile__wrapper')
const body = document.querySelector('body')

mobileBtn.onclick = function () {
	mobileOpen.classList.toggle('none')
	body.classList.toggle('no-scroll')
}

mobileClose.onclick = function () {
	mobileOpen.classList.toggle('none')
	body.classList.toggle('no-scroll')
}
