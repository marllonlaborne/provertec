export default class MenuMobile {
  constructor(mobileButton, headerMenu, headerNav) {
    this.mobileButton = document.querySelector(mobileButton)
    this.headerMenu = document.querySelector(headerMenu)
    this.headerNav = document.querySelector(headerNav)
    this.activeClass = 'active'

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.headerMenu.classList.toggle(this.activeClass)
    this.headerNav.classList.toggle(this.activeClass)
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
