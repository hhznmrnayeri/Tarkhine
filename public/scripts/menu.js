const galleryModal=document.querySelector('.gallery__modal')
const closeGallery=document.querySelector('.close__gallery')
function closeGalleryModal(){
    overlay.classList.remove('overlay__active')
    galleryModal.classList.remove('gallery__modal--active')
}
function openGalleryModal(){
    overlay.classList.add('overlay__active')
    galleryModal.classList.add('gallery__modal--active')
}
closeGallery.addEventListener('click',()=>{
    closeGalleryModal()
})
overlay.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.parentElement.tagName=='BODY'){
        closeGalleryModal()
    }
})