const stateItemArray=document.querySelectorAll('.state__item')
stateItemArray.forEach(item=>{
    item.addEventListener('click',()=>{
        stateItemArray.forEach(state=>{
            state.classList.remove('state__item--active')
        })
        item.classList.add('state__item--active')
        console.log(item.dataset.id)
    })
})