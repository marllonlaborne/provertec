import Slides from './modules/slides.js'
import Typewriter from './modules/typewriter.js'
import SmoothScroll from './modules/smoothScroll.js'
import menuMobile from './modules/menuMobile.js'

const slides = new Slides('#servicos .carousel-item', '#servicos [data-js=prev-button]', '#servicos [data-js=next-button]')
slides.init()

const projectsSlides = new Slides(
  '#projetos .projects-info[data-js=carousel-item]', 
  '#projetos [data-js=prev-button]', 
  '#projetos [data-js=next-button]', 
  '#projetos .projects-preview[data-js=carousel-item]', 
  '#projetos .projects-info[data-js=carousel-item]'
)
projectsSlides.init()

const typewriter = new Typewriter('.home h1', '.home p')
typewriter.init()

const sections = new SmoothScroll('.smooth-scroll') 
sections.init()

const menuMob = new menuMobile('.mobile-button', '.header-menu', '.header-nav')
menuMob.init()
