import Slides from "./modules/slides.js"

const slides = new Slides('#servicos .carousel-item', '#servicos [data-js=prev-button]', '#servicos [data-js=next-button]')
slides.init()
