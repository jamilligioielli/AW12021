/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
	if (window.scrollY >= 400) {
		backToTopButton.classList.add('show')
	} else {
		backToTopButton.classList.remove('show')
	}
}

/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
	element.addEventListener('click', function () {
		nav.classList.toggle('show')
	})
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
	link.addEventListener('click', function () {
		nav.classList.remove('show')
	})
}
/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {

  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}
/* Skills carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination'
	},
	mousewheel: true,
	keyboard: true
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 600,
  reset: true
})

scrollReveal.reveal(
	`#home .site-subtitle, #home .site-title, #home img, #home i,
  #home .text, #home .download-buttons,
  #about .image, #about .text,
  #skills .site-subtitle, #skills i,
  #projects header, #projects .slider,
  #contact .site-subtitle, #contact .text, #contact .form,
  footer .brand, footer .icons
  `,
	{ interval: 50 }
)



// Menu ativo conforme a seção visivel na página //
const sections = document.querySelectorAll('section[id]')
function activateMenuAtCurrentSection(){

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight
    
    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    } else {
      document
				.querySelector('nav ul li a[href*=' + sectionId + ']')
				.classList.remove('active')
      
    }

  }


}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
	backToTop()
	activateMenuAtCurrentSection()
})