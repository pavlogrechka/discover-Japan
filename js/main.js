(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header--active')
    }
    else {
      header.classList.remove('header--active')
    }
  }
}())

  (function () {
    const burgerItem = document.querySelector('.burger');
    const headerNav = document.querySelector('.header__nav');
    const closeBtn = document.querySelector('.nav__close');
    burgerItem.addEventListener('click', (e) => {
      headerNav.classList.add('header__nav--active');
    })
    closeBtn.addEventListener('click', () => {
      headerNav.classList.remove('header__nav--active');
    })
  }())
