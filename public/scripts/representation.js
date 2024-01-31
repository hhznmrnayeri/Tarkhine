const shireWrapper=document.querySelector('.shire__wrapper')
const shireBox=document.querySelector('.shire__box')
const calendarWrapper=document.querySelector('.calendar__wrapper')
const calendarBox=document.querySelector('.calendar__box')
const dayCalendarArray=document.querySelectorAll('.day__calendar')
dayCalendarArray.forEach(item=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault()
        if(item.classList.contains('day__disable')){
            return
        }else{
            dayCalendarArray.forEach(day=>{
                day.classList.remove('day__active')
            })
        }
        item.classList.add('day__active')
    })
})
shireWrapper.addEventListener('click',()=>{
    shireBox.classList.add('shire__box--active')
    overlay.classList.add('overlay__subMenu--active')
})
calendarWrapper.addEventListener('click',()=>{
    calendarBox.classList.add('calendar__box--active')
    overlay.classList.add('overlay__subMenu--active')
})
overlay.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.parentElement.tagName=='BODY'){
        overlay.classList.remove('overlay__subMenu--active')
        shireBox.classList.remove('shire__box--active')
        calendarBox.classList.remove('calendar__box--active')
    }
})