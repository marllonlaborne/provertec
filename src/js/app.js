const slides = document.querySelectorAll('[data-js=carousel-item]')
const prevButton = document.querySelector('[data-js=prev-button]')
const nextButton = document.querySelector('[data-js=next-button]')

let currentSlideIndex = 0
const lastSlideIndex = slides.length - 1

const changeSlidesClasses = (currentSlideIndex) => {
  slides.forEach((slide, index) => {
    if (index === currentSlideIndex) 
      slide.classList.remove('carousel-item-hidden')
    else 
      slide.classList.add('carousel-item-hidden')
  })

  slides[currentSlideIndex].classList.add('carousel-item-visible')
}

prevButton.addEventListener("click", () => {
  const correctSlideIndex = currentSlideIndex === 0 ? (currentSlideIndex = lastSlideIndex) : --currentSlideIndex

  changeSlidesClasses(correctSlideIndex)
})

nextButton.addEventListener("click", () => {
  const correctSlideIndex = currentSlideIndex === lastSlideIndex ? (currentSlideIndex = 0) : ++currentSlideIndex

  changeSlidesClasses(correctSlideIndex)
})
