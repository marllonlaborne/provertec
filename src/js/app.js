import Slides from "./modules/slides.js"

const slides = new Slides('[data-js=carousel-item]', '[data-js=prev-button]', '[data-js=next-button]')
slides.init()
