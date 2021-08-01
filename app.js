let sections = document.querySelectorAll('section')
let navli = document.querySelectorAll('.container li')
let buttom = document.querySelector('section button')
let text_title = document.querySelector('.text_title')

window.addEventListener('scroll',()=>{
    let current =''

    if (pageYOffset > 100){
        buttom.classList.add('active')
        text_title.classList.remove('active')
    }else{
        buttom.classList.remove('active')
        text_title.classList.add('active')
    }

    sections.forEach(section=>{
        let sectionTop = section.offsetTop
        let sectionHeight = section.offsetHeight
        let sectionTitle = section.querySelector('h1')
        if (window.pageYOffset >= sectionTop - sectionHeight/2){
            current = section.getAttribute('id')
        }
    })
    navli.forEach(li=>{
        li.classList.remove('active')
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
})