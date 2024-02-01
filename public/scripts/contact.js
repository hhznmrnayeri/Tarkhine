const galleryBranch=document.querySelector('.gallery__branch')
const closeGallery=document.querySelector('.close__gallery')
const galleryIconArray=document.querySelectorAll('.gallery__icon')
function closeGalleryBranch(){
    overlay.classList.remove('overlay__active')
    galleryBranch.classList.remove('gallery__branch--active')
}
function openGalleryBranch(){
    overlay.classList.add('overlay__active')
    galleryBranch.classList.add('gallery__branch--active')
}
closeGallery.addEventListener('click',()=>{
    closeGalleryBranch()
})
galleryIconArray.forEach(item=>{
    item.addEventListener('click',()=>{
        openGalleryBranch()
    })
})
overlay.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.parentElement.tagName=='BODY'){
        closeGalleryBranch()
    }
})