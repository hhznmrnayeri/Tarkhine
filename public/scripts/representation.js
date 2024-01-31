const shireWrapper=document.querySelector('.shire__wrapper')
const shireBox=document.querySelector('.shire__box')
shireWrapper.addEventListener('click',()=>{
    shireBox.classList.add('shire__box--active')
    overlay.classList.add('overlay__subMenu--active')
})
overlay.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.parentElement.tagName=='BODY'){
        overlay.classList.remove('overlay__subMenu--active')
        shireBox.classList.remove('shire__box--active')
    }
})