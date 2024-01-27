const stateItemArray=document.querySelectorAll('.state__item')
const sectionItemArray=document.querySelectorAll('.section__item')
const stateDeliveryArray=document.querySelectorAll('.state__delivery')
const sectionDeliveryArray=document.querySelectorAll('.section__delivery')
const deleteAllBasketBtn=document.querySelector('.deleteAll__basket')
const basketWrapper=document.querySelector('.basket__wrapper')
const emptyBasket=document.querySelector('.empty__basket')
const deleteAllModal=document.querySelector('.deleteAll__modal')
const closeDeleteAllModalBtn=document.querySelector('.close__deleteAll--modal')
const backBtn=document.querySelector('.back__btn')
const deleteBtn=document.querySelector('.delete__btn')
const deleteAllBasketMobile=document.querySelector('.deleteAll__basket--mobile')
stateDeliveryArray.forEach(item=>{
    item.addEventListener('click',()=>{
        stateDeliveryArray.forEach(state=>{
            state.classList.remove('state__delivery--active')
        })
        sectionDeliveryArray.forEach(section=>{
            section.classList.remove('section__delivery--active')
        })
        item.classList.add('state__delivery--active')
        document.getElementById(item.dataset.id).classList.add('section__delivery--active')
    })
})
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
function closeDeleteAllModal(){
    overlay.classList.remove('overlay__active')
    deleteAllModal.classList.remove('deleteAll__modal--active')
}
function openDeleteAllModal(){
    overlay.classList.add('overlay__active')
    deleteAllModal.classList.add('deleteAll__modal--active')
}
function deleteAllItemBasket(){
    emptyBasket.classList.remove('hidden')
    emptyBasket.classList.add('flex-center')
    basketWrapper.classList.add('hidden')
    deleteAllBasketMobile.classList.add('text-gray-400')
}
deleteAllBasketBtn.addEventListener('click',()=>{
    openDeleteAllModal()
})
deleteAllBasketMobile.addEventListener('click',()=>{
    openDeleteAllModal()
})
backBtn.addEventListener('click',()=>{
    closeDeleteAllModal()
})
deleteBtn.addEventListener('click',()=>{
    deleteAllItemBasket()
    closeDeleteAllModal()
})
closeDeleteAllModalBtn.addEventListener('click',()=>{
    closeDeleteAllModal()
})
overlay.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.parentElement.tagName=='BODY'){
        closeDeleteAllModal()
    }
})