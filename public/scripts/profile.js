const profileStateArray=document.querySelectorAll('.profile__state')
profileStateArray.forEach(state=>{
    state.addEventListener('click',()=>{
        profileStateArray.forEach(item=>{
            item.classList.remove('profile__state--active')
        })
    state.classList.add('profile__state--active')
    console.log(state.dataset.id)
    })
})