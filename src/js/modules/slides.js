export default class Slides {
  constructor(slides, prevButton, nextButton, projectPreview = null, projectInfo = null) {
    this.slides = document.querySelectorAll(slides)
    this.prevButton = document.querySelector(prevButton)
    this.nextButton = document.querySelector(nextButton)
    this.currentSlideIndex = 0
    this.lastSlideIndex = this.slides.length - 1

    this.projectPreviews = projectPreview ? document.querySelectorAll(projectPreview) : null
    this.projectInfos = projectInfo ? document.querySelectorAll(projectInfo) : null
    this.autoSlideInterval = null

    this.hiddenItem = 'carousel-item-hidden'
    this.visibleItem = 'carousel-item-visible'
  }

  updateSlideClasses() {
    this.slides.forEach((slide, index) => {
      if (index === this.currentSlideIndex) {
        slide.classList.remove(this.hiddenItem)
      } else {
        slide.classList.add(this.hiddenItem)
      }
    })

    if (this.projectPreviews) {
      this.projectPreviews.forEach((preview, index) => {
        if (index === this.currentSlideIndex) {
          preview.classList.remove(this.hiddenItem)
        } else {
          preview.classList.add(this.hiddenItem)
        }
      })
    }

    if (this.projectInfos) {
      this.projectInfos.forEach((info, index) => {
        if (index === this.currentSlideIndex) {
          info.classList.remove(this.hiddenItem)
        } else {
          info.classList.add(this.hiddenItem)
        }
      })
    }
    
    this.slides[this.currentSlideIndex].classList.add(this.visibleItem)
  }

  handlePrevButtonClick() {
    this.prevButton.addEventListener('click', () => {
      const correctSlideIndex = this.currentSlideIndex === 0 
        ? (this.currentSlideIndex = this.lastSlideIndex) 
        : -- this.currentSlideIndex

      this.updateSlideClasses(correctSlideIndex)
    })
  }

  handleNextButtonClick() {
    this.nextButton.addEventListener('click', () => {
      const correctSlideIndex = this.currentSlideIndex === this.lastSlideIndex 
        ? (this.currentSlideIndex = 0)
        : ++this.currentSlideIndex

      this.updateSlideClasses(correctSlideIndex)
    })
  }

  init() {
    if (this.slides.length && this.prevButton && this.nextButton) {
      this.updateSlideClasses()
      this.handlePrevButtonClick()
      this.handleNextButtonClick()
    }

    return this
  }
}
