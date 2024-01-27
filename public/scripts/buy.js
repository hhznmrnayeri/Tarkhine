const stateItemArray=document.querySelectorAll('.state__item')
const sectionItemArray=document.querySelectorAll('.section__item')
const stateDeliveryArray=document.querySelectorAll('.state__delivery')
const sectionDeliveryArray=document.querySelectorAll('.section__delivery')
const statePayArray=document.querySelectorAll('.state__pay')
const sectionPayArray=document.querySelectorAll('.section__pay')
const addressItemArray=document.querySelectorAll('.address__item')
const bankItemArray=document.querySelectorAll('.bank__item')
const addAddressBtn=document.querySelector('.add__address--btn')
const deleteAllBasketBtn=document.querySelector('.deleteAll__basket')
const locationModal=document.querySelector('.location__modal')
const addressModal=document.querySelector('.address__modal')
const closeAddressModalBtn=document.querySelector('.close__address--modal')
const closeAddress=document.querySelector('.close__address')
const submitAddress=document.querySelector('.submit__address')
const closeLocationModalBtn=document.querySelector('.close__location--modal')
const submitLocation=document.querySelector('.submit__location')
const basketWrapper=document.querySelector('.basket__wrapper')
const emptyBasket=document.querySelector('.empty__basket')
const deleteAllModal=document.querySelector('.deleteAll__modal')
const closeDeleteAllModalBtn=document.querySelector('.close__deleteAll--modal')
const backBtn=document.querySelector('.back__btn')
const deleteBtn=document.querySelector('.delete__btn')
const deleteAllBasketMobile=document.querySelector('.deleteAll__basket--mobile')
bankItemArray.forEach(item=>{
    item.addEventListener('click',()=>{
        bankItemArray.forEach(state=>{
            state.classList.remove('bank__item--active')
        })
        item.classList.add('bank__item--active')
    })
})
addressItemArray.forEach(item=>{
    item.addEventListener('click',()=>{
        addressItemArray.forEach(state=>{
            state.classList.remove('address__item--active')
        })
        item.classList.add('address__item--active')
    })
})
statePayArray.forEach(item=>{
    item.addEventListener('click',()=>{
        statePayArray.forEach(state=>{
            state.classList.remove('state__pay--active')
        })
        sectionPayArray.forEach(section=>{
            section.classList.remove('section__pay--active')
        })
        item.classList.add('state__pay--active')
        document.getElementById(item.dataset.id).classList.add('section__pay--active')
    })
})
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
function closeAddressModal(){
    overlay.classList.remove('overlay__active')
    addressModal.classList.remove('address__modal--active')
}
function openAddressModal(){
    overlay.classList.add('overlay__active')
    addressModal.classList.add('address__modal--active')
}
function closeLocationModal(){
    overlay.classList.remove('overlay__active')
    locationModal.classList.remove('location__modal--active')
}
function openLocationModal(){
    overlay.classList.add('overlay__active')
    locationModal.classList.add('location__modal--active')
}
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
addAddressBtn.addEventListener('click',()=>{
    openLocationModal()
})
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
closeLocationModalBtn.addEventListener('click',()=>{
    closeLocationModal()
})
submitAddress.addEventListener('click',(e)=>{
    e.preventDefault()
    closeAddressModal()
})
submitLocation.addEventListener('click',()=>{
    closeLocationModal()
    openAddressModal()
})
closeAddress.addEventListener('click',(e)=>{
    e.preventDefault()
    closeAddressModal()
})
closeAddressModalBtn.addEventListener('click',()=>{
    closeAddressModal()
})
closeDeleteAllModalBtn.addEventListener('click',()=>{
    closeDeleteAllModal()
})
overlay.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.parentElement.tagName=='BODY'){
        closeDeleteAllModal()
        closeLocationModal()
        closeAddressModal()
    }
})