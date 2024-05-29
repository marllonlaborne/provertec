export default class SmoothScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.halfWindow = window.innerHeight * 0.6
    this.activeClass = 'active'

    this.checkDistance = this.checkDistance.bind(this)
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop
      return {
        element: section,
        offset: Math.floor(offset - this.halfWindow)
      }
    })
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add(this.activeClass)
      } else if (item.element.classList.contains(this.activeClass)) {
        item.element.classList.remove(this.activeClass)
      }
    })
  }

  init() {
    if (this.sections.length) {
      this.getDistance()
      this.checkDistance()
      window.addEventListener('scroll', this.checkDistance)
    }
    return this
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance)
  }
}