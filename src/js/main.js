import Slides from "./modules/slides.js"

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
