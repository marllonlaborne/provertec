export default class Typewriter {
  constructor(title, paragraph) {
    this.title = document.querySelector(title)
    this.paragraph = document.querySelector(paragraph)
  }

  addTypewriterEffect(element) {
    const arrayText = element.innerText.split('')
    element.innerHTML = ''

    arrayText.forEach((letter, index) => {
      setTimeout(() => element.innerHTML += letter, 75 * index)
    })
  }
  
  init() {
    if (this.title && this.paragraph) {
      this.addTypewriterEffect(this.title)
      this.addTypewriterEffect(this.paragraph)
    }
  }
}
