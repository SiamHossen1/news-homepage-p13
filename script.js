const menuBtn = document.querySelector('.menu-btn'),
closeBtn = document.querySelector('.close-btn'),
mobailNavContainer = document.querySelector('.mobail-nav-container'),
body = document.querySelector('body')

menuBtn.addEventListener('click',()=>{
    mobailNavContainer.classList.toggle('active')
    body.classList.toggle('active')
})
closeBtn.addEventListener('click',()=>{
    mobailNavContainer.classList.remove('active')
    body.classList.remove('active')
})