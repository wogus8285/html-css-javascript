const header = document.querySelector('.header')

window.addEventListener('scroll', function(){
    header.classList.toggle('active', window.scrollY > 20)

})