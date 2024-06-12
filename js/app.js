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
let daysTeg = document.querySelector('.dates__list')
let prevNextBtn = document.querySelectorAll('.month__button')

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
	let lastDayofMOnth = new Date(currYear, currMonth + 1, 0).getDate()
	let liTag = ''

	for (let i = 0; i <= lastDayofMOnth; i++) {
		liTag += `<li class='dates__item' >${i}</li>`
	}
	currentDate.innerText = `${months[currMonth]}`
	daysTeg.innerHTML = liTag
}

renderCalendar()

prevNextBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		currMonth = btn.id === 'prev' ? currMonth - 1 : currMonth + 1
		if (currMonth < 0 || currMonth > 11) {
			// if current month is less than 0 or greater than 11
			// creating a new date of current year & month and pass it as date value
			date = new Date(currYear, currMonth, new Date().getDate())
			currMonth = date.getMonth() // updating current month with new date month
		} else {
			date = new Date() // pass the current date as date value
		}
		renderCalendar() // calling renderCalendar function
	})
})