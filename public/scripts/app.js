const mobileMenu=document.querySelector('.mobile__menu')
const closeMenuBtn=document.querySelector('#close__menu--btn')
const mobileMenuBtn=document.querySelector('.mobile__menu--btn')
const overlay=document.querySelector('.overlay')
function closeMenu(){
    overlay.classList.remove('overlay__active')
    mobileMenu.classList.remove('mobile__menu--open')
}
function openMenu(){
    overlay.classList.add('overlay__active')
    mobileMenu.classList.add('mobile__menu--open')
}
mobileMenuBtn.addEventListener('click',()=>{
    openMenu()
})
closeMenuBtn.addEventListener('click',()=>{
    closeMenu()
})
overlay.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.parentElement.tagName=='BODY'){
        closeMenu()
    }
})