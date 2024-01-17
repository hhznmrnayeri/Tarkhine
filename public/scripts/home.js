const headerBtn=document.querySelector('.header__btn')
const topicBtnArray=document.querySelectorAll('.topic__btn')
function openChooseBranchModal(){
    console.log('first')
}
headerBtn.addEventListener('click',()=>{
    openChooseBranchModal()
})
topicBtnArray.forEach(item=>{
    item.addEventListener('click',()=>{
        openChooseBranchModal()
    })
})