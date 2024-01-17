const mobileMenu=document.querySelector('.mobile__menu')
const closeMenuBtn=document.querySelector('#close__menu--btn')
const mobileMenuBtn=document.querySelector('.mobile__menu--btn')
const overlay=document.querySelector('.overlay')
const searchBtn=document.querySelector('.search__btn')
const closeSearchBtn=document.querySelector('.close__search--btn')
const searchModal=document.querySelector('.search__modal')
const signupBtn=document.querySelector('.signup__btn')
const signupModal=document.querySelector('.signup__modal')
const sectionPhoneNumber=document.querySelector('.section__phoneNumber')
const formPhoneNumber=document.querySelector('.form__phoneNumber')
const inputPhoneNumber=document.querySelector('.input__phoneNumber')
const messageBox=document.querySelector('.message__box')
const sendCode=document.querySelector('.send__code')
const sectionCode=document.querySelector('.section__code')
const backSection=document.querySelector('.back__section')
const phoneNumber=document.querySelector('.phoneNumber')
const inputCode1=document.querySelector('#input__code1')
const inputCode2=document.querySelector('#input__code2')
const inputCode3=document.querySelector('#input__code3')
const inputCode4=document.querySelector('#input__code4')
const inputCode5=document.querySelector('#input__code5')
const timeWrapper=document.querySelector('.time__wrapper')
const minuteValue=document.querySelector('.minute__value')
const secondValue=document.querySelector('.second__value')
const resendBtn=document.querySelector('.resend__btn')
const editPhoneNumber=document.querySelector('.edit__phoneNumber')
const errorBox=document.querySelector('.error__box')
const closeError=document.querySelector('.close__error')
const closeModalBtnArray=document.querySelectorAll('.close__modal')
const inputCodeArray=document.querySelectorAll('.input__code')
function closeMenu(){
    overlay.classList.remove('overlay__active')
    mobileMenu.classList.remove('mobile__menu--open')
}
function closeSearchModal(){
    overlay.classList.remove('overlay__active')
    searchModal.classList.remove('search__modal--active')
}
function closeSignupModal(){
    overlay.classList.remove('overlay__active')
    signupModal.classList.remove('signup__modal--active')
    inputPhoneNumber.value=''
    closeMessageBox()
}
function openMenu(){
    overlay.classList.add('overlay__active')
    mobileMenu.classList.add('mobile__menu--open')
}
function openSearchModal(){
    overlay.classList.add('overlay__active')
    searchModal.classList.add('search__modal--active')
}
function openSignupModal(){
    overlay.classList.add('overlay__active')
    signupModal.classList.add('signup__modal--active')
}
function openSectionSignup(section){
    section.classList.add('flex')
    section.classList.remove('hidden')
    closeMessageBox()
}
function closeSectionSignup(section){
    section.classList.remove('flex')
    section.classList.add('hidden')
}
function openErrorBox(){
    errorBox.classList.remove('hidden')
    errorBox.classList.add('flex-center')
}
function closeErrorBox(){
    errorBox.classList.add('hidden')
    errorBox.classList.remove('flex-center')
}
function openMessageBox(){
    formPhoneNumber.classList.add('form__phoneNumber--error')
    messageBox.classList.add('flex')
    messageBox.classList.remove('hidden')
}
function closeMessageBox(){
    formPhoneNumber.classList.remove('form__phoneNumber--error')
    messageBox.classList.remove('flex')
    messageBox.classList.add('hidden')
}
function activeInput(inputOne,inputTwo){
    // inputOne.addEventListener('keydown',()=>{
    //     inputOne.classList.remove('input__code--active')
    //     inputTwo.classList.add('input__code--active')
    //     inputTwo.focus()
    // })
}
function sendCodeMethod(){
    let phoneNumberValue=inputPhoneNumber.value
    if(phoneNumberValue.length==11&&!isNaN(phoneNumberValue)&&pattern.test(phoneNumberValue)){
        phoneNumber.innerHTML=phoneNumberValue
        closeSectionSignup(sectionPhoneNumber)
        openSectionSignup(sectionCode)
    }else{
        openMessageBox()
    }
    inputCode1.focus()
}
formPhoneNumber.addEventListener('submit',(e)=>{
    e.preventDefault()
})
const pattern = /^09[0|1|2|3][0-9]{8}$/;
closeError.addEventListener('click',()=>{
    closeErrorBox()
})
sendCode.addEventListener('click',()=>{
    sendCodeMethod()
})
inputPhoneNumber.addEventListener('keydown',(e)=>{
    if(e.keyCode==13){
        sendCodeMethod()
    }
})
editPhoneNumber.addEventListener('click',()=>{
    openSectionSignup(sectionPhoneNumber)
    closeSectionSignup(sectionCode)
})
backSection.addEventListener('click',()=>{
    openSectionSignup(sectionPhoneNumber)
    closeSectionSignup(sectionCode)
    inputPhoneNumber.select()
})
closeModalBtnArray.forEach(item=>{
    item.addEventListener('click',()=>{
        closeSignupModal()
    })
})
mobileMenuBtn.addEventListener('click',()=>{
    openMenu()
})
searchBtn.addEventListener('click',()=>{
    openSearchModal()
})
signupBtn.addEventListener('click',()=>{
    openSignupModal()
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
        closeSignupModal()
    }
})
