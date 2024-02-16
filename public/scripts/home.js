const headerBtn=document.querySelector('.header__btn')
const galleryBranch=document.querySelector('.gallery__branch')
const closeGallery=document.querySelector('.close__gallery')
const chooseBranchModal=document.querySelector('.choose__branchModal')
const headerTitle=document.querySelector('.header__title')
const moreAboutBtn=document.querySelector('.more__about--btn')
const closeChooseBranchBtn=document.querySelector('.close__chooseBranch--btn')
const topicBtnArray=document.querySelectorAll('.topic__btn')
const galleryIconArray=document.querySelectorAll('.gallery__icon')
function closeChooseBranchModal(){
    overlay.classList.remove('overlay__active')
    chooseBranchModal.classList.remove('choose__branchModal--active')
}
function openChooseBranchModal(){
    overlay.classList.add('overlay__active')
    chooseBranchModal.classList.add('choose__branchModal--active')
}
function closeGalleryBranch(){
    overlay.classList.remove('overlay__active')
    galleryBranch.classList.remove('gallery__branch--active')
}
function openGalleryBranch(){
    overlay.classList.add('overlay__active')
    galleryBranch.classList.add('gallery__branch--active')
}
moreAboutBtn.addEventListener('click',()=>{
    window.location.href='about.html'
})
headerBtn.addEventListener('click',()=>{
    openChooseBranchModal()
})
closeChooseBranchBtn.addEventListener('click',()=>{
    closeChooseBranchModal()
})
closeGallery.addEventListener('click',()=>{
    closeGalleryBranch()
})
topicBtnArray.forEach(item=>{
    item.addEventListener('click',()=>{
        openChooseBranchModal()
    })
})
galleryIconArray.forEach(item=>{
    item.addEventListener('click',()=>{
        openGalleryBranch()
    })
})
overlay.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.parentElement.tagName=='BODY'){
        closeChooseBranchModal()
        closeGalleryBranch()
    }
})
let headerValue='تجربه غذای سالم و گیاهی به سبک ترخینه'
let counter=0
window.addEventListener('load',()=>{
    let headerInterval=setInterval(()=>{
        if(counter>35){
            clearInterval(headerInterval)
        }
        headerTitle.innerHTML+=headerValue[counter]
        counter++
    },50)
})