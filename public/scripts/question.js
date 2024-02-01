const stateItemArray=document.querySelectorAll('.state__question')
const headerSection=document.querySelector('.header__section')
const headerTitle=document.querySelector('.header__title')
const headerTitleArray=[
    {id:'question',value:'سوالات متداول از ترخینه'},
    {id:'rule',value:'قوانین ترخینه'},
    {id:'privacy',value:'حریم شخصی کاربران'},
]
stateItemArray.forEach(item=>{
    item.addEventListener('click',()=>{
        headerSection.style.backgroundImage= `linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(images/question/${item.dataset.id}.jpg)`
        stateItemArray.forEach(btn=>{
            btn.classList.remove('state__question--active')
        })
    let requestValue=headerTitleArray.find(obj=>{return obj.id==item.dataset.id})
    headerTitle.innerHTML=requestValue.value
        item.classList.add('state__question--active')
    })
})