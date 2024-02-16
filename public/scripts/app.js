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
const submitCode=document.querySelector('.submit__code')
const shoppingCartBtn=document.querySelector('.shopping__cart--btn')
const closeModalBtnArray=document.querySelectorAll('.close__modal')
const inputCodeArray=document.querySelectorAll('.input__code')
const pattern = /^09[0|1|2|3][0-9]{8}$/;
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
shoppingCartBtn.addEventListener('click',()=>{
    window.location.href='buy.html'
})
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
        closeSignupModal()
    }
})

function closeSignupModal(){
    overlay.classList.remove('overlay__active')
    signupModal.classList.remove('signup__modal--active')
    inputPhoneNumber.value=''
    inputCodeArray.forEach(item=>{
        item.value=''
    })
    closeMessageBox()
    openSectionSignup(sectionPhoneNumber)
    closeSectionSignup(sectionCode)
}
function openSignupModal(){
    overlay.classList.add('overlay__active')
    signupModal.classList.add('signup__modal--active')
    inputPhoneNumber.focus()
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
function codeValidation(){
    let emptyInput=0
    inputCodeArray.forEach(item=>{
        if(item.value==''||isNaN(Number(item.value))){
            emptyInput++
        }
    })
    if(emptyInput){
        openErrorBox()
    }else{
        closeErrorBox()
    }
}
function startTime(){
    minuteValue.innerHTML=1
    secondValue.innerHTML=59
    checkTime()
}
function stopTime(){
    minuteValue.innerHTML=0
    secondValue.innerHTML=0
}
function checkTime(){
    let checkSecond= setInterval(() => {
        secondValue.innerHTML--
        if(secondValue.innerHTML==0){
            if(minuteValue.innerHTML==0&&secondValue.innerHTML==0){
                showResendCode()
                codeValidation()
                clearInterval(checkSecond)
            }else{
                minuteValue.innerHTML--
                secondValue.innerHTML=59
            }
        }
    }, 1000);
}
function showResendCode(){
    timeWrapper.classList.add('hidden')
    resendBtn.classList.remove('hidden')
}
function HideResendCode(){
    timeWrapper.classList.remove('hidden')
    resendBtn.classList.add('hidden')
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
    inputCode1.addEventListener('keyup',()=>{
        inputCode2.focus()
        inputCode1.classList.remove('input__code--active')
        inputCode2.classList.add('input__code--active')
    })
    inputCode2.addEventListener('keyup',()=>{
        inputCode3.focus()
        inputCode2.classList.remove('input__code--active')
        inputCode3.classList.add('input__code--active')
    })
    inputCode3.addEventListener('keyup',()=>{
        inputCode4.focus()
        inputCode3.classList.remove('input__code--active')
        inputCode4.classList.add('input__code--active')
    })
    inputCode4.addEventListener('keyup',()=>{
        inputCode5.focus()
        inputCode4.classList.remove('input__code--active')
        inputCode5.classList.add('input__code--active')
    })
    inputCode5.addEventListener('keydown',()=>{
        inputCode5.classList.remove('input__code--active')
    })
    startTime()
}
resendBtn.addEventListener('click',()=>{
    startTime()
    HideResendCode()
    closeErrorBox()
})
submitCode.addEventListener('click',()=>{
    codeValidation()
})
formPhoneNumber.addEventListener('submit',(e)=>{
    e.preventDefault()
})
closeModalBtnArray.forEach(item=>{
    item.addEventListener('click',()=>{
        closeSignupModal()
    })
})
signupBtn.addEventListener('click',()=>{
    openSignupModal()
    inputPhoneNumber.focus()
})
closeError.addEventListener('click',()=>{
    closeErrorBox()
})
sendCode.addEventListener('click',()=>{
    sendCodeMethod()
})
inputPhoneNumber.addEventListener('keyup',(e)=>{
    if(e.keyCode==13){
        sendCodeMethod()
    }
})
editPhoneNumber.addEventListener('click',()=>{
    openSectionSignup(sectionPhoneNumber)
    closeSectionSignup(sectionCode)
    inputPhoneNumber.select()
    inputCodeArray.forEach(item=>{
        item.value=''
    })
    HideResendCode()
})
backSection.addEventListener('click',()=>{
    openSectionSignup(sectionPhoneNumber)
    closeSectionSignup(sectionCode)
    inputPhoneNumber.select()
    inputCodeArray.forEach(item=>{
        item.value=''
    })
    HideResendCode()
})