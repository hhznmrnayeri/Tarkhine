const profileStateArray=document.querySelectorAll('.profile__state')
const profileSectionArray=document.querySelectorAll('.profile__section')
const profileBox=document.querySelector('.profile__box')
const editBox=document.querySelector('.edit__box')
const editProfile=document.querySelector('.edit__profile')
const cancelBtn=document.querySelector('.cancel__btn')
const submitBtn=document.querySelector('.submit__btn')
profileStateArray.forEach(state=>{
    state.addEventListener('click',()=>{
        profileStateArray.forEach(item=>{
            item.classList.remove('profile__state--active')
        })
        profileSectionArray.forEach(item=>{
            item.classList.remove('profile__section--active')
        })
    state.classList.add('profile__state--active')
    document.getElementById(state.dataset.id).classList.add('profile__section--active')
    })
})
editProfile.addEventListener('click',()=>{
    profileBox.classList.remove('profile__box--active')
    editBox.classList.add('edit__box--active')
})
submitBtn.addEventListener('click',(e)=>{
e.preventDefault()
    profileBox.classList.add('profile__box--active')
    editBox.classList.remove('edit__box--active')
})
cancelBtn.addEventListener('click',(e)=>{
e.preventDefault()
    profileBox.classList.add('profile__box--active')
    editBox.classList.remove('edit__box--active')
})