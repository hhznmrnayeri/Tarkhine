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
const stateBtn1=document.querySelector('.state__btn1')
const stateBtn2=document.querySelector('.state__btn2')
const stateBtn3=document.querySelector('.state__btn3')
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
stateBtn1.addEventListener('click',()=>{
            stateItemArray.forEach(state=>{
                state.classList.remove('state__item--active')
            })
            sectionItemArray.forEach(section=>{
                section.classList.remove('section__item--active')
            })
    stateItemArray[1].classList.add('state__item--active')
    sectionItemArray[1].classList.add('section__item--active')
})
stateBtn2.addEventListener('click',()=>{
            stateItemArray.forEach(state=>{
                state.classList.remove('state__item--active')
            })
            sectionItemArray.forEach(section=>{
                section.classList.remove('section__item--active')
            })
    stateItemArray[2].classList.add('state__item--active')
    sectionItemArray[2].classList.add('section__item--active')
})
stateBtn3.addEventListener('click',()=>{
    window.location.href='payment.html'
})
function changeSectionActive(array1,activeClass1,array2,activeClass2){
    array1.forEach(item=>{
        item.addEventListener('click',()=>{
            array1.forEach(state=>{
                state.classList.remove(activeClass1)
            })
            array2.forEach(section=>{
                section.classList.remove(activeClass2)
            })
            item.classList.add(activeClass1)
            document.getElementById(item.dataset.id).classList.add(activeClass2)
        })
    })
}
function changeStateActive(array,activeClass){
    array.forEach(item=>{
        item.addEventListener('click',()=>{
            array.forEach(state=>{
                state.classList.remove(activeClass)
            })
            item.classList.add(activeClass)
        })
    })
}
changeStateActive(bankItemArray,'bank__item--active')
changeStateActive(addressItemArray,'address__item--active')
changeSectionActive(statePayArray,'state__pay--active',sectionPayArray,'section__pay--active')
changeSectionActive(stateDeliveryArray,'state__delivery--active',sectionDeliveryArray,'section__delivery--active')
changeSectionActive(stateItemArray,'state__item--active',sectionItemArray,'section__item--active')
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