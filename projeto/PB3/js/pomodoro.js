let pomodoro = document.getElementById('pomodoro')
let shortBreak = document.getElementById('shortBreak')
let sessionNumber = document.getElementById('sessionNumber')
let seconds

var bell = new Audio('./assets/sounds/bell.mp3')
var click = new Audio('./assets/sounds/click.mp3')

// var pause = document.getElementById('pause')
var play = document.getElementById('play')

function iniciar() {
   click.play()
	if (pomodoro.value == 0) {
		document.getElementById('erro_pomodoro').innerHTML = 'Adicione os minutos'
		pomodoro.focus()
	} else if (shortBreak.value == 0) {
		document.getElementById('erro_shortBreak').innerHTML = 'Adicione a pausa'
		shortBreak.focus()
	} else if (sessionNumber.value == 0) {
		document.getElementById('erro_sessionNumber').innerHTML =
			'Adicione as sessões'
		sessionNumber.focus()
	} else {
		// pause.style.setProperty('display', 'block', 'important')

		localStorage.setItem('pomodoro', String(pomodoro.value))
		localStorage.setItem('shortBreak', String(shortBreak.value))
		localStorage.setItem('sessionNumber', String(sessionNumber.value))

		document
			.getElementById('config')
			.style.setProperty('display', 'none', 'important')

		document
			.getElementById('timer')
			.style.setProperty('display', 'block', 'important')

		momentoAcao()
	}
}

function momentoAcao() {
	let sessionNumber_value = localStorage.getItem('sessionNumber')

	if (sessionNumber_value > 1) {
		document.getElementById('title_session').innerHTML =
			sessionNumber_value + ' sessões restantes'
	} else if (sessionNumber_value == 1) {
		document.getElementById('title_session').innerHTML =
			sessionNumber_value + ' sessão restante'
	}

	let title = document.getElementById('title')
	title.innerHTML = 'Pomodoro'

	min = Number(localStorage.getItem('pomodoro'))

	min = min - 1
	seconds = 59
	// seconds = 10

	document.getElementById('minutes').innerHTML = min
	document.getElementById('points').innerHTML = ':'
	document.getElementById('seconds').innerHTML = seconds

	var min_interval = setInterval(minTimer, 60000)
	var seg_interval = setInterval(segTimer, 1000)

	function minTimer() {
		min = min - 1
		document.getElementById('minutes').innerHTML = min
	}

	function segTimer() {
		seconds = seconds - 1
		document.getElementById('seconds').innerHTML = seconds

		if (seconds <= 0) {
			if (min <= 0) {
				clearInterval(min_interval)
				clearInterval(seg_interval)

				bell.play()

				breakMoment()
			}

			seconds = 60
			// seconds = 10
		}
	}
}

function breakMoment() {
	let title = document.getElementById('title')
	title.innerHTML = 'Pausa'

	min_shortBreak = Number(localStorage.getItem('shortBreak'))

	min_shortBreak = min_shortBreak - 1
	seconds = 59
	// seconds = 10

	document.getElementById('minutes').innerHTML = min_shortBreak
	document.getElementById('seconds').innerHTML = seconds

	var min_interval = setInterval(minTimer, 60000)
	var seg_interval = setInterval(segTimer, 1000)

	function minTimer() {
		min_shortBreak = min_shortBreak - 1
		document.getElementById('minutes').innerHTML = min_shortBreak
	}

	function segTimer() {
		seconds = seconds - 1
		document.getElementById('seconds').innerHTML = seconds

		if (seconds <= 0) {
			if (min_shortBreak <= 0) {
				ses = Number(localStorage.getItem('sessionNumber'))
				if (ses != 0) {
					ses = ses - 1
				} else {
					ses = 0
				}

				localStorage.setItem('sessionNumber', String(ses))
				clearInterval(min_interval)
				clearInterval(seg_interval)

				if (ses <= 0 || ses == 0) {
					localStorage.clear()

					document
						.getElementById('title_session')
						.style.setProperty('display', 'none', 'important')
					document
						.getElementById('clock')
						.style.setProperty('display', 'none', 'important')
					document
						.getElementById('title')
						.style.setProperty('display', 'none', 'important')
					document
						.getElementById('play')
						.style.setProperty('display', 'none', 'important')
					document
						.getElementById('config')
						.style.setProperty('display', 'none', 'important')
				} else {
					momentoAcao()
				}
			}
			seconds = 60
			// seconds = 10
		}
	}
}
