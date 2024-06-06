export default class MenuMobile {
  constructor(mobileButton, navMenu) {
    this.mobileButton = document.querySelector(mobileButton)
    this.navMenu = document.querySelector(navMenu)
    this.activeClass = 'active'

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.navMenu.classList.toggle(this.activeClass)
  }

  addMenuMobileEvent() {
    this.mobileButton.addEventListener('click', this.toggleMenu)
  }

  init() {
    if (this.mobileButton) {
      this.addMenuMobileEvent()
    }

    return this
  }
}
