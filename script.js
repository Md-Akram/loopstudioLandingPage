const ham = document.querySelector('#hamburger')
const close = document.querySelector('#close')
const mobileNab = document.querySelector('.mobile-nav')

ham.addEventListener('click', () => {
  mobileNab.style.display = 'block'
})

close.addEventListener('click', () => {
  mobileNab.style.display = 'none'
})
