const burgerIcon = document.querySelector('.burger-icon'),
      burgerMenu = document.querySelector('.menu');

burgerIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
})
