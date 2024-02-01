const profileStateArray=document.querySelectorAll('.profile__state')
const profileSectionArray=document.querySelectorAll('.profile__section')
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