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
const codeSmsElem=document.querySelector('.code__sms')
const shoppingCartBtn=document.querySelector('.shopping__cart--btn')
const closeModalBtnArray=document.querySelectorAll('.close__modal')
const inputCodeArray=document.querySelectorAll('.input__code')
const pattern = /^09[0|1|2|3][0-9]{8}$/;
var codeSms;
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

inputPhoneNumber.addEventListener('keyup',()=>{
    if(inputPhoneNumber.value.length==11){
        sendCode.classList.add('bg-primary')
    }else{
        sendCode.classList.remove('bg-primary')
    }
})
function closeSignupModal(){
    overlay.classList.remove('overlay__active')
    signupModal.classList.remove('signup__modal--active')
    sendCode.classList.remove('bg-primary')
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
    let checkCode=''
    inputCodeArray.forEach(item=>{
        if(item.value==''||isNaN(Number(item.value))){
            emptyInput++
        }else{
            checkCode+=item.value
        }
    })
    if(emptyInput){
        openErrorBox()
    }else{
        if(codeSms==checkCode){
            window.location.href='profile.html'
        }else{
            openErrorBox()
        }
    }
}
function startTime(inputTime){
    if(inputTime==1){
        minuteValue.innerHTML=0
        secondValue.innerHTML=59
        var startTimer= window.setTimeout(() => {
            checkTime()
        });
    }
    if(inputTime==0){
        window.clearTimeout(startTimer)
    }
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
    inputCodeArray[0].focus()
    startTime(1)
    codeSms=Math.floor(Math.random()*100000)
    codeSmsElem.innerHTML=codeSms
    codeSmsElem.classList.remove('-top-10')
    codeSmsElem.classList.add('top-2')
    codeSmsElem.addEventListener('click',(e)=>{
        e.target.classList.remove('top-2')
        e.target.classList.add('-top-10')
        if (navigator && navigator.clipboard && navigator.clipboard.writeText){
            return navigator.clipboard.writeText(e.target.innerHTML)
        }
    })
    inputCodeArray[0].addEventListener('paste',(e)=>{
        let pasteValue=e.clipboardData.getData('text/plain')
        if(pasteValue.length==5){
            let pasteArray=String(pasteValue).split('')
            for(let i=0;i<5;i++){
                inputCodeArray[i].value=pasteArray[i]
            }
            inputCodeArray[4].focus()
            codeValidation()
            submitCode.classList.add('bg-primary')
        }
    })
}
resendBtn.addEventListener('click',()=>{
    startTime(1)
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
    closeErrorBox()
    startTime(0)
})
backSection.addEventListener('click',()=>{
    openSectionSignup(sectionPhoneNumber)
    closeSectionSignup(sectionCode)
    inputPhoneNumber.select()
    inputCodeArray.forEach(item=>{
        item.value=''
    })
    HideResendCode()
    closeErrorBox()
    startTime(0)
})
inputCodeArray.forEach(item=>{
    item.addEventListener('keydown',()=>{
        if(item==inputCodeArray[4]){
            submitCode.classList.add('bg-primary')
        }else{
            item.nextElementSibling.focus()
            item.classList.remove('input__code--active')
            item.nextElementSibling.classList.add('input__code--active')
        }
    })
})