const galleryBranch=document.querySelector('.gallery__branch')
const closeGallery=document.querySelector('.close__gallery')
const galleryIconArray=document.querySelectorAll('.gallery__icon')
const branchBtnArray=document.querySelectorAll('.branch__btn')
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
branchBtnArray.forEach(item=>{
    item.addEventListener('click',()=>{
        window.location.href='branch.html'
    })
})
overlay.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.parentElement.tagName=='BODY'){
        closeGalleryBranch()
    }
})