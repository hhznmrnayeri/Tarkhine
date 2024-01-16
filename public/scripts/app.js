const mobileMenu=document.querySelector('.mobile__menu')
const closeMenuBtn=document.querySelector('#close__menu--btn')
const mobileMenuBtn=document.querySelector('.mobile__menu--btn')
const overlay=document.querySelector('.overlay')
const searchBtn=document.querySelector('.search__btn')
const closeSearchBtn=document.querySelector('.close__search--btn')
const searchModal=document.querySelector('.search__modal')
function closeMenu(){
    overlay.classList.remove('overlay__active')
    mobileMenu.classList.remove('mobile__menu--open')
}
function closeSearchModal(){
    overlay.classList.remove('overlay__active')
    searchModal.classList.remove('search__modal--active')
}
function openMenu(){
    overlay.classList.add('overlay__active')
    mobileMenu.classList.add('mobile__menu--open')
}
function openSearchModal(){
    overlay.classList.add('overlay__active')
    searchModal.classList.add('search__modal--active')
}
mobileMenuBtn.addEventListener('click',()=>{
    openMenu()
})
searchBtn.addEventListener('click',()=>{
    openSearchModal()
})
closeMenuBtn.addEventListener('click',()=>{
    closeMenu()
})
closeSearchBtn.addEventListener('click',()=>{
    closeSearchModal()
})
overlay.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.parentElement.tagName=='BODY'){
        closeMenu()
        closeSearchModal()
    }
})