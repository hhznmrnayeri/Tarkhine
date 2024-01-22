const stateItemArray=document.querySelectorAll('.state__item')
const sectionItemArray=document.querySelectorAll('.section__item')
stateItemArray.forEach(item=>{
    item.addEventListener('click',()=>{
        stateItemArray.forEach(state=>{
            state.classList.remove('state__item--active')
        })
        sectionItemArray.forEach(section=>{
            section.classList.remove('section__item--active')
        })
        item.classList.add('state__item--active')
        document.getElementById(item.dataset.id).classList.add('section__item--active')
    })
})