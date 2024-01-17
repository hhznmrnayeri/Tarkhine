const headerBtn=document.querySelector('.header__btn')
const chooseBranchModal=document.querySelector('.choose__branchModal')
const closeChooseBranchBtn=document.querySelector('.close__chooseBranch--btn')
const topicBtnArray=document.querySelectorAll('.topic__btn')
function closeChooseBranchModal(){
    overlay.classList.remove('overlay__active')
    chooseBranchModal.classList.remove('choose__branchModal--active')
}
function openChooseBranchModal(){
    overlay.classList.add('overlay__active')
    chooseBranchModal.classList.add('choose__branchModal--active')
}
headerBtn.addEventListener('click',()=>{
    openChooseBranchModal()
})
closeChooseBranchBtn.addEventListener('click',()=>{
    closeChooseBranchModal()
})
topicBtnArray.forEach(item=>{
    item.addEventListener('click',()=>{
        openChooseBranchModal()
    })
})
overlay.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.parentElement.tagName=='BODY'){
        closeChooseBranchModal()
    }
})