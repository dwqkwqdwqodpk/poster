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
// swiper

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	autoplay: {
		enabled: true,
		speed: 3000,
	},
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
})

// calendar
const currentDate = document.querySelector('.excursions__calendar-title')

let date = new Date(),
	currYear = date.getFullYear(),
	currMonth = date.getMonth()

const months = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь',
]

const renderCalendar = () => {
	currentDate.innetText = `${months[currMonth]}`
	let lastDayofMOnth = new Date(currYear, currMonth + 1, 0).getDate()
}

renderCalendar()
