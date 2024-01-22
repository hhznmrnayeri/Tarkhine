const galleryModal=document.querySelector('.gallery__modal')
const closeGallery=document.querySelector('.close__gallery')
const menuWrapperIrani=document.querySelector('.menu__wrapper--irani')
const menuWrapperForeign=document.querySelector('.menu__wrapper--foreign')
const menuWrapperPizza=document.querySelector('.menu__wrapper--pizza')
const menuWrapperSandwich=document.querySelector('.menu__wrapper--sandwich')
const topicItemArray=document.querySelectorAll('.topic__item')
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
topicItemArray.forEach(item=>{
    item.addEventListener('click',(e)=>{
        topicItemArray.forEach(item=>{
            item.classList.remove('topic__item--active')
        })
        e.target.classList.add('topic__item--active')
    })
})
menuArrayIrani=[
    {id:1,img:'images/menu/food32.png',title:'کوفته برنجی',resepi:'برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز',offerWrapper:'flex',offerPrice:'۱۸۰٬۰۰۰',offerCount:'۳۵',priceValue:'۱۴۵٬۰۰۰',star:5},
    {id:2,img:'images/menu/food.png',title:'کشک بادمجان',resepi:'بادمجان، کشک، نعناع خشک، مغز گردو، سیر، پیاز',offerWrapper:'hidden',offerPrice:'',offerCount:'',priceValue:'۹۵٬۰۰۰',star:5},
    {id:3,img:'images/menu/food1.png',title:'میرزا قاسمی',resepi:'بادمجان، گوجه فرنگی، تخم مرغ، سیر، رب گوجه فرنگی',offerWrapper:'flex',offerPrice:'۱۶۵٬۰۰۰',offerCount:'۱۰',priceValue:'۱۴۲٬۵۰۰',star:5},
    {id:4,img:'images/menu/food2.png',title:'باقلاقاتوق',resepi:'پاچ باقلا، شوید خشک، کره، سیر، تخم مرغ',offerWrapper:'flex',offerPrice:'۲۰۵٬۰۰۰',offerCount:'۳۰',priceValue:'۱۸۰٬۰۰۰',star:4},
    {id:5,img:'images/menu/food3.png',title:'فلافل',resepi:'نخود، پیاز، تخم گشنیز، سیر، جعفری، سیب زمینی',offerWrapper:'hidden',offerPrice:'',offerCount:'',priceValue:'۸۰٬۰۰۰',star:3},
    {id:6,img:'images/menu/food4.png',title:'کله جوش',resepi:'کشک، گردو، پیاز، نعناع خشک',offerWrapper:'flex',offerPrice:'۲۱۰٬۰۰۰',offerCount:'۵',priceValue:'۲۰۳٬۰۰۰',star:4},
    {id:7,img:'images/menu/food5.png',title:'بورانی بادمجان',resepi:'بادمجان قلمی، ماست چکیده، سیر، روغن زیتون، مغز گردو',offerWrapper:'flex',offerPrice:'۱۷۰٬۰۰۰',offerCount:'۲۲',priceValue:'۱۴۸٬۰۰۰',star:5},
    {id:8,img:'images/menu/food6.png',title:'بادمجان شکم‌پر',resepi:'بادمجان، پیاز، گوجه فرنگی	، سبزی خشک',offerWrapper:'flex',offerPrice:'۱۵۰٬۰۰۰',offerCount:'۱۸',priceValue:'۱۳۶٬۰۰۰',star:4},
    {id:9,img:'images/menu/food7.png',title:'دلمه برگ کلم',resepi:'کلم برگ، برنج، لپه پخته، پیاز، سبزی معطر رب',offerWrapper:'flex',offerPrice:'۲۲۰٬۰۰۰',offerCount:'۸',priceValue:'۲۰۹٬۰۰۰',star:5},
    {id:10,img:'images/menu/food8.png',title:'دلمه برگ مو',resepi:'پیاز، برنج، لپه، سبزی دلمه، سرکه',offerWrapper:'hidden',offerPrice:'',offerCount:'',priceValue:'۱۹۵٬۰۰۰',star:2},
    {id:11,img:'images/menu/food9.png',title:'کوکو سبزی',resepi:'تخم مرغ، گردو، سیر، آرد، روغن مایع سبزی کوکویی',offerWrapper:'flex',offerPrice:'۳۰۰٬۰۰۰',offerCount:'۱۰',priceValue:'۲۷۰٬۰۰۰',star:5},
    {id:12,img:'images/menu/food10.png',title:'کوکو سیب‌زمینی و عدس',resepi:'عدس، سیب زمینی، پیاز متوسط، تخم مرغ، پودر سیر، آرد سوخاری',offerWrapper:'flex',offerPrice:'۱۳۵٬۰۰۰',offerCount:'۲۰',priceValue:'۱۰۵٬۰۰۰',star:1}
]
menuArrayForeign=[
    {id:13,img:'images/menu/food11.png',title:'پاستا سبزیجات',resepi:'پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده',offerWrapper:'flex',offerPrice:'۱۷۵٬۰۰۰',offerCount:'۲۰',priceValue:'۱۴۰٬۰۰۰',star:5},
{id:14,img:'images/menu/food12.png',title:'پاستا بلونز',resepi:'اسپاگتی، گوشت چرخ کرده، هویج، ساقه کرفس، گوجه فرنگی، سیر، پیاز، پنیر پارمزان، روغن زیتون',offerWrapper:'flex',offerPrice:'۱۷۰٬۰۰۰',offerCount:'۱۲',priceValue:'۱۶۰٬۰۰۰',star:4},
{id:15,img:'images/menu/food13.png',title:'راتاتویی',resepi:'بادمجان، گوجه فرنگی، کدو سبز، پیاز، رب گوجه فرنگی، روغن زیتون، پنیر پارمزان',offerWrapper:'flex',offerPrice:'۱۸۰٬۰۰۰',offerCount:'۴۵',priceValue:'۹۵٬۰۰۰',star:4},
{id:16,img:'images/menu/food14.png',title:'لازانیا',resepi:'لازانیا، قارچ، ریحان تازه، جعفری تازه، گوجه فرنگی، پنیر پیتزا، بادمجان',offerWrapper:'hidden',offerPrice:'',offerCount:'',priceValue:'۱۵۰٬۰۰۰',star:5},
{id:17,img:'images/menu/food15.png',title:'سوشی',resepi:'جلبک دریایی/ نوری، برنج کته، سرکه سفید (یا سرکه برنج)، شکر، نمک دریا',offerWrapper:'flex',offerPrice:'۱۰۰٬۰۰۰',offerCount:'۱۵',priceValue:'۸۵٬۰۰۰',star:4},
{id:18,img:'images/menu/food16.png',title:'پاکورا سبزیجات',resepi:'گرام ماسالا، پودر کاری، سیر له شده، ،گشنیز خرد شده',offerWrapper:'flex',offerPrice:'۱۲۵٬۰۰۰',offerCount:'۸',priceValue:'۱۱۰٬۰۰۰',star:4},
{id:19,img:'images/menu/food17.png',title:'کالزونه اسفناج',resepi:'اسفناج، قارچ، پنیر موزارلا یا پنیر پیتزا، پنیر ریکوتا یا پنیر خامه ای، پیاز، سیر، روغن زیتون',offerWrapper:'flex',offerPrice:'۱۹۰٬۰۰۰',offerCount:'۱۷',priceValue:'۱۷۷٬۰۰۰',star:5},
{id:20,img:'images/menu/food18.png',title:'پالاک پنیر',resepi:'پنیر، اسفناج، گوجه، پیاز، سیر',offerWrapper:'flex',offerPrice:'۲۰۰٬۰۰۰',offerCount:'۱۵',priceValue:'۱۸۰٬۰۰۰',star:4}
]
menuArrayPizza=[
    {id:21,img:'images/menu/food19.png',title:'پیتزا روکولا',resepi:'اسفناج، سبزی روکولا، آرد، پودر مایه خمیر، روغن زیتون، خردل، سیر، پنیر موزارلا و پارمسان، گوجه گیلاسی ،سس فلفل سبز تند',offerWrapper:'flex',offerPrice:'۱۹۵٬۰۰۰',offerCount:'۱۲',priceValue:'۱۸۸٬۰۰۰',star:5},
{id:22,img:'images/menu/food20.png',title:'پیتزا بادمجان و زیتون',resepi:'بادمجان کوچک، روغن زیتون، پنیر موزارلا، پنیر پارمزان، برگ ریحان، گوجه فرنگی، سس گوجه فرنگی',offerWrapper:'hidden',offerPrice:'',offerCount:'',priceValue:'۱۵۰٬۰۰۰',star:4},
{id:23,img:'images/menu/food21.png',title:'پیتزا سبزیجات و خامه',resepi:'نخود فرنگی پخته شده، ذرت نیم پز، فلفل دلمه‌ای رنگی، قارچ، سیر یا پیازچه خردشده',offerWrapper:'flex',offerPrice:'۲۱۰٬۰۰۰',offerCount:'۲۱',priceValue:'۱۸۵٬۰۰۰',star:4},
{id:24,img:'images/menu/food22.png',title:'پیتزا قارچ',resepi:'قارچ، فلفل دلمه ای، رب گوجه فرنگی، پودر سیر، آویشن، مرزه، پنیر پیتزا گیاهی',offerWrapper:'flex',offerPrice:'۲۱۵٬۰۰۰',offerCount:'۲۵',priceValue:'۱۷۵٬۰۰۰',star:3},
{id:25,img:'images/menu/food23.png',title:'پیتزا پپرونی',resepi:'تافو، فلفل قرمز خشک شده، پودر دانه‌های خردل، دانه رازیانه، پاپریکا دودی، پودر سیر، شکر نارگیل، پودر بادیان رومی',offerWrapper:'hidden',offerPrice:'',offerCount:'',priceValue:'۱۰۰٬۰۰۰',star:4},
{id:26,img:'images/menu/food24.png',title:'پیتزا اسفناج',resepi:'اسفناج تازه، پیاز، سیر، پنیر پیتزا، قارچ',offerWrapper:'flex',offerPrice:'۲۸۰٬۰۰۰',offerCount:'۱۰',priceValue:'۲۵۲٬۰۰۰',star:5},
{id:27,img:'images/menu/food25.png',title:'پیتزا مارگاریتا',resepi:'گوجه فرنگی، ریحان، سیر، پنیر پیتزا',offerWrapper:'flex',offerPrice:'۱۶۵٬۰۰۰',offerCount:'۱۳',priceValue:'۱۴۷٬۰۰۰',star:2},
{id:28,img:'images/menu/food26.png',title:'پیتزا پنیر',resepi:'نان پیتزا، پنیر پیتزا، سس باربیکیو، گوجه فرنگی، سس کچاپ، سیر، روغن زیتون',offerWrapper:'flex',offerPrice:'۱۲۵٬۰۰۰',offerCount:'۱۶',priceValue:'۱۰۵٬۰۰۰',star:3}
]
menuArraySandwich=[
    {id:29,img:'images/menu/food27.png',title:'ساندویچ کتلت مخصوص',resepi:'سیب زمینی، لوبیا قرمز،  بلغور گندم، نعناع خشک، پودر زیره، پودر جوز هندی، گوجه فرنگی، روغن زیتون',offerWrapper:'flex',offerPrice:'۲۳۰٬۰۰۰',offerCount:'۱۸',priceValue:'۲۰۵٬۰۰۰',star:5},
{id:30,img:'images/menu/food28.png',title:'ساندویچ سوسیس کوکتل',resepi:'سوسیس گیاهی، پیاز، سیب زمینی،  رب گوجه فرنگی',offerWrapper:'flex',offerPrice:'۲۰۵٬۰۰۰',offerCount:'۳۵',priceValue:'۱۶۵٬۰۰۰',star:4},
{id:31,img:'images/menu/food29.png',title:'ساندویچ کتلت کدو سبز',resepi:'کدو سبز، هویج، سیب زمینی، پیاز',offerWrapper:'hidden',offerPrice:'',offerCount:'',priceValue:'۱۴۵٬۰۰۰',star:5},
{id:32,img:'images/menu/food30.png',title:'پنینی اسفناج',resepi:' قارچ، اسفناج، پیاز، پنیر پیتزا، خامه، پودر پاپریکا، گردو، سرکه بالزامیک، سس مایونز',offerWrapper:'flex',offerPrice:'۲۱۰٬۰۰۰',offerCount:'۱۵',priceValue:'۱۹۰٬۰۰۰',star:3},
]
function generateStarElem(count){
    let fillStar=count
    let emptyStar=5-count
    let starArray=[]
    for(let i=0;i<emptyStar;i++){
        starArray.push('star-empty')
    }
    for(let i=0;i<fillStar;i++){
        starArray.push('star')
    }
    let parentElem=`<div class="flex items-center">
    <svg class="w-4 h-4 md:w-6 md:h-6">
        <use href="#${starArray[0]}"></use>
    </svg>
    <svg class="w-4 h-4 md:w-6 md:h-6">
        <use href="#${starArray[1]}"></use>
    </svg>
    <svg class="w-4 h-4 md:w-6 md:h-6">
        <use href="#${starArray[2]}"></use>
    </svg>
    <svg class="w-4 h-4 md:w-6 md:h-6">
        <use href="#${starArray[3]}"></use>
    </svg>
    <svg class="w-4 h-4 md:w-6 md:h-6">
        <use href="#${starArray[4]}"></use>
    </svg>
</div>`
    return parentElem
}
function insertMenu(array,wrapper){
    array.forEach(item=>{
    let starWrapper=generateStarElem(item.star)
        wrapper.insertAdjacentHTML('beforeend',`<!-- menu item -->
<div class="menu__item col-span-1 xl:col-span-6 flex gap-2 md:gap-8 rounded md:rounded-lg border border-gray-400 md:shadow-card">
    <!-- item img -->
    <img src="${item.img}" alt="food" class="item__img w-24 md:w-40 cursor-pointer">
    <!-- item content -->
    <div class=" pl-2 md:pl-4 flex flex-col items-end gap-1 justify-center xl:justify-evenly w-full relative">
        <!-- top box -->
        <div class="flex items-end gap-2 justify-between w-full  md:gap-4">
            <!-- right box -->
            <div class="flex flex-col items-start gap-2">
                <!-- item title -->
                <h4 class="text-xs md:font-estedadSemiBold md:text-xl">${item.title}</h4>
                <!-- item resepi -->
                <p class="text-2xs md:text-sm">${item.resepi}</p>
            </div>
            <!-- left box -->
            <div class="flex flex-col items-end gap-2 md:gap-0">
                <!-- offer wrapper -->
                <div class="offer__wrapper ${item.offerWrapper} items-center gap-2">
                    <!-- offer price -->
                    <h6 class="text-2xs md:text-base text-gray-500 line-through">${item.offerPrice}</h6>
                    <!-- offer count -->
                    <span class="text-error text-2xs md:text-xs rounded-lg bg-error-200 px-1"><span class="offer__count">${item.offerCount}</span>%</span>
                </div>
                <!-- price item -->
                <span class="text-2xs md:text-lg flex"><span>${item.priceValue}</span> تومان</span>
            </div>
        </div>
        <!-- bottom box -->
        <div class="flex items-center gap-2 xl:gap-6 mr-4">
            <!-- star wrapper -->
            ${starWrapper}
            <!-- item btn -->
            <button class="item__btn flex-center p-2 md:w-60 text-white bg-primary rounded text-2xs md:text-base md:font-estedadMedium md:px-4">افزودن به سبد خرید</button>
        </div>
        <!-- favorite btn -->
        <button class="favorite__btn ">
            <svg class="w-4 h-4 md:w-6 md:h-6">
                <use href="#heart"></use>
            </svg>
        </button>
    </div>
</div>`)
})
}
insertMenu(menuArrayIrani,menuWrapperIrani)
insertMenu(menuArrayForeign,menuWrapperForeign)
insertMenu(menuArrayPizza,menuWrapperPizza)
insertMenu(menuArraySandwich,menuWrapperSandwich)
const itemBtnArray=document.querySelectorAll('.item__btn')
const itemImgArray=document.querySelectorAll('.item__img')
itemBtnArray.forEach(item=>{
    item.addEventListener('click',()=>{
        console.log('first')
    })
})
itemImgArray.forEach(item=>{
    item.addEventListener('click',()=>{
        openGalleryModal()
    })
})