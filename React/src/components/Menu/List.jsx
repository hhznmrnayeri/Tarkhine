import React from 'react'
import ListSection from './ListSection'
import FoodItem from './FoodItem'
export default function List() {
return (
<div className='mb-6 md:mb-12'>
    <ListSection title='غذاهای ایرانی' btn={true}>
        <FoodItem img={['src/assets/images/menu/food32.webp',]} title='کوفته برنجی' resepi='برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز' offerWrapper='flex' offerPrice='۱۸۰٬۰۰۰' offerCount='۳۵' priceValue='۱۴۵٬۰۰۰' comment='12' star='4'/>
        <FoodItem img={['src/assets/images/menu/food.webp',]} title='کشک بادمجان' resepi='بادمجان، کشک، نعناع خشک، مغز گردو، سیر، پیاز' offerWrapper='hidden' offerPrice='' offerCount='' priceValue='۹۵٬۰۰۰' comment='5' star='5'/>
        <FoodItem img={['src/assets/images/menu/food1.webp',]} title='میرزا قاسمی' resepi='بادمجان، گوجه فرنگی، تخم مرغ، سیر، رب گوجه فرنگی' offerWrapper='flex' offerPrice='۱۶۵٬۰۰۰' offerCount='۱۰' priceValue='۱۴۲٬۵۰۰' comment='75' star='5'/>
        <FoodItem img={['src/assets/images/menu/food2.webp',]} title='باقلاقاتوق' resepi='پاچ باقلا، شوید خشک، کره، سیر، تخم مرغ' offerWrapper='flex' offerPrice='۲۰۵٬۰۰۰' offerCount='۳۰' priceValue='۱۸۰٬۰۰۰' comment='86' star='4'/>
        <FoodItem img={['src/assets/images/menu/food3.webp',]} title='فلافل' resepi='نخود، پیاز، تخم گشنیز، سیر، جعفری، سیب زمینی' offerWrapper='hidden' offerPrice='' offerCount='' priceValue='۸۰٬۰۰۰' comment='24' star='3'/>
        <FoodItem img={['src/assets/images/menu/food4.webp',]} title='کله جوش' resepi='کشک، گردو، پیاز، نعناع خشک' offerWrapper='flex' offerPrice='۲۱۰٬۰۰۰' offerCount='۵' priceValue='۲۰۳٬۰۰۰' comment='36' star='4'/>
        <FoodItem img={['src/assets/images/menu/food5.webp',]} title='بورانی بادمجان' resepi='بادمجان قلمی، ماست چکیده، سیر، روغن زیتون، مغز گردو' offerWrapper='flex' offerPrice='۱۷۰٬۰۰۰' offerCount='۲۲' priceValue='۱۴۸٬۰۰۰' comment='9' star='5'/>
        <FoodItem img={['src/assets/images/menu/food6.webp',]} title='بادمجان شکم‌پر' resepi='بادمجان، پیاز، گوجه فرنگی	، سبزی خشک' offerWrapper='flex' offerPrice='۱۵۰٬۰۰۰' offerCount='۱۸' priceValue='۱۳۶٬۰۰۰' comment='41' star='4'/>
        <FoodItem img={['src/assets/images/menu/food7.webp',]} title='دلمه برگ کلم' resepi='کلم برگ، برنج، لپه پخته، پیاز، سبزی معطر رب' offerWrapper='flex' offerPrice='۲۲۰٬۰۰۰' offerCount='۸' priceValue='۲۰۹٬۰۰۰' comment='54' star='5'/>
        <FoodItem img={['src/assets/images/menu/food8.webp',]} title='دلمه برگ مو' resepi='پیاز، برنج، لپه، سبزی دلمه، سرکه' offerWrapper='hidden' offerPrice='' offerCount='' priceValue='۱۹۵٬۰۰۰' comment='20' star='2'/>
        <FoodItem img={['src/assets/images/menu/food9.webp',]} title='کوکو سبزی' resepi='تخم مرغ، گردو، سیر، آرد، روغن مایع سبزی کوکویی' offerWrapper='flex' offerPrice='۳۰۰٬۰۰۰' offerCount='۱۰' priceValue='۲۷۰٬۰۰۰' comment='71' star='5'/>
        <FoodItem img={['src/assets/images/menu/food10.webp',]} title='کوکو سیب‌زمینی و عدس' resepi='عدس، سیب زمینی، پیاز متوسط، تخم مرغ، پودر سیر، آرد سوخاری' offerWrapper='flex' offerPrice='۱۳۵٬۰۰۰' offerCount='۲۰' priceValue='۱۰۵٬۰۰۰' comment='68' star='1'/>
    </ListSection>
    <ListSection title='غذاهای غیر ایرانی' btn={false}>
        <FoodItem img={['src/assets/images/menu/food11.webp',]} title='پاستا سبزیجات' resepi='پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده' offerWrapper='flex' offerPrice='۱۷۵٬۰۰۰' offerCount='۲۰' priceValue='۱۴۰٬۰۰۰' comment='81' star='5'/>
        <FoodItem img={['src/assets/images/menu/food12.webp',]} title='پاستا بلونز' resepi='اسپاگتی، گوشت چرخ کرده، هویج، ساقه کرفس، گوجه فرنگی، سیر، پیاز، پنیر پارمزان، روغن زیتون' offerWrapper='flex' offerPrice='۱۷۰٬۰۰۰' offerCount='۱۲' priceValue='۱۶۰٬۰۰۰' comment='43' star='4'/>
        <FoodItem img={['src/assets/images/menu/food13.webp',]} title='راتاتویی' resepi='بادمجان، گوجه فرنگی، کدو سبز، پیاز، رب گوجه فرنگی، روغن زیتون، پنیر پارمزان' offerWrapper='flex' offerPrice='۱۸۰٬۰۰۰' offerCount='۴۵' priceValue='۹۵٬۰۰۰' comment='56' star='4'/>
        <FoodItem img={['src/assets/images/menu/food14.webp',]} title='لازانیا' resepi='لازانیا، قارچ، ریحان تازه، جعفری تازه، گوجه فرنگی، پنیر پیتزا، بادمجان' offerWrapper='hidden' offerPrice='' offerCount='' priceValue='۱۵۰٬۰۰۰' comment='50' star='5'/>
        <FoodItem img={['src/assets/images/menu/food15.webp',]} title='سوشی' resepi='جلبک دریایی/ نوری، برنج کته، سرکه سفید (یا سرکه برنج)، شکر، نمک دریا' offerWrapper='flex' offerPrice='۱۰۰٬۰۰۰' offerCount='۱۵' priceValue='۸۵٬۰۰۰' comment='98' star='4'/>
        <FoodItem img={['src/assets/images/menu/food16.webp',]} title='پاکورا سبزیجات' resepi='گرام ماسالا، پودر کاری، سیر له شده، ،گشنیز خرد شده' offerWrapper='flex' offerPrice='۱۲۵٬۰۰۰' offerCount='۸' priceValue='۱۱۰٬۰۰۰' comment='75' star='4'/>
        <FoodItem img={['src/assets/images/menu/food17.webp',]} title='کالزونه اسفناج' resepi='اسفناج، قارچ، پنیر موزارلا یا پنیر پیتزا، پنیر ریکوتا یا پنیر خامه ای، پیاز، سیر، روغن زیتون' offerWrapper='flex' offerPrice='۱۹۰٬۰۰۰' offerCount='۱۷' priceValue='۱۷۷٬۰۰۰' comment='124' star='5'/>
        <FoodItem img={['src/assets/images/menu/food18.webp',]} title='پالاک پنیر' resepi='پنیر، اسفناج، گوجه، پیاز، سیر' offerWrapper='flex' offerPrice='۲۰۰٬۰۰۰' offerCount='۱۵' priceValue='۱۸۰٬۰۰۰' comment='73' star='4'/>
    </ListSection>
    <ListSection title='پیتزاها' btn={false}>
        <FoodItem img={['src/assets/images/menu/food19.webp',]} title='پیتزا روکولا' resepi='اسفناج، سبزی روکولا، آرد، پودر مایه خمیر، روغن زیتون، خردل، سیر، پنیر موزارلا و پارمسان، گوجه گیلاسی ،سس فلفل سبز تند' offerWrapper='flex' offerPrice='۱۹۵٬۰۰۰' offerCount='۱۲' priceValue='۱۸۸٬۰۰۰' comment='59' star='5'/>
        <FoodItem img={['src/assets/images/menu/food20.webp',]} title='پیتزا بادمجان و زیتون' resepi='بادمجان کوچک، روغن زیتون، پنیر موزارلا، پنیر پارمزان، برگ ریحان، گوجه فرنگی، سس گوجه فرنگی' offerWrapper='hidden' offerPrice='' offerCount='' priceValue='۱۵۰٬۰۰۰' comment='31' star='4'/>
        <FoodItem img={['src/assets/images/menu/food21.webp',]} title='پیتزا سبزیجات و خامه' resepi='نخود فرنگی پخته شده، ذرت نیم پز، فلفل دلمه‌ای رنگی، قارچ، سیر یا پیازچه خردشده' offerWrapper='flex' offerPrice='۲۱۰٬۰۰۰' offerCount='۲۱' priceValue='۱۸۵٬۰۰۰' comment='47' star='4'/>
        <FoodItem img={['src/assets/images/menu/food22.webp',]} title='پیتزا قارچ' resepi='قارچ، فلفل دلمه ای، رب گوجه فرنگی، پودر سیر، آویشن، مرزه، پنیر پیتزا گیاهی' offerWrapper='flex' offerPrice='۲۱۵٬۰۰۰' offerCount='۲۵' priceValue='۱۷۵٬۰۰۰' comment='35' star='3'/>
        <FoodItem img={['src/assets/images/menu/food23.webp',]} title='پیتزا پپرونی' resepi='تافو، فلفل قرمز خشک شده، پودر دانه‌های خردل، دانه رازیانه، پاپریکا دودی، پودر سیر، شکر نارگیل، پودر بادیان رومی' offerWrapper='hidden' offerPrice='' offerCount='' priceValue='۱۰۰٬۰۰۰' comment='87' star='4'/>
        <FoodItem img={['src/assets/images/menu/food24.webp',]} title='پیتزا اسفناج' resepi='اسفناج تازه، پیاز، سیر، پنیر پیتزا، قارچ' offerWrapper='flex' offerPrice='۲۸۰٬۰۰۰' offerCount='۱۰' priceValue='۲۵۲٬۰۰۰' comment='35' star='5'/>
        <FoodItem img={['src/assets/images/menu/food25.webp',]} title='پیتزا مارگاریتا' resepi='گوجه فرنگی، ریحان، سیر، پنیر پیتزا' offerWrapper='flex' offerPrice='۱۶۵٬۰۰۰' offerCount='۱۳' priceValue='۱۴۷٬۰۰۰' comment='61' star='2'/>
        <FoodItem img={['src/assets/images/menu/food26.webp',]} title='پیتزا پنیر' resepi='نان پیتزا، پنیر پیتزا، سس باربیکیو، گوجه فرنگی، سس کچاپ، سیر، روغن زیتون' offerWrapper='flex' offerPrice='۱۲۵٬۰۰۰' offerCount='۱۶' priceValue='۱۰۵٬۰۰۰' comment='39' star='3'/>
    </ListSection>
    <ListSection title='ساندویچ‌ها' btn={false}>
        <FoodItem img={['src/assets/images/menu/food27.webp',]} title='ساندویچ کتلت مخصوص' resepi='سیب زمینی، لوبیا قرمز،  بلغور گندم، نعناع خشک، پودر زیره، پودر جوز هندی، گوجه فرنگی، روغن زیتون' offerWrapper='flex' offerPrice='۲۳۰٬۰۰۰' offerCount='۱۸' priceValue='۲۰۵٬۰۰۰' comment='19' star='5'/>
        <FoodItem img={['src/assets/images/menu/food28.webp',]} title='ساندویچ سوسیس کوکتل' resepi='سوسیس گیاهی، پیاز، سیب زمینی،  رب گوجه فرنگی' offerWrapper='flex' offerPrice='۲۰۵٬۰۰۰' offerCount='۳۵' priceValue='۱۶۵٬۰۰۰' comment='34' star='4'/>
        <FoodItem img={['src/assets/images/menu/food29.webp',]} title='ساندویچ کتلت کدو سبز' resepi='کدو سبز، هویج، سیب زمینی، پیاز' offerWrapper='hidden' offerPrice='' offerCount='' priceValue='۱۴۵٬۰۰۰' comment='92' star='5'/>
        <FoodItem img={['src/assets/images/menu/food30.webp',]} title='پنینی اسفناج' resepi=' قارچ، اسفناج، پیاز، پنیر پیتزا، خامه، پودر پاپریکا، گردو، سرکه بالزامیک، سس مایونز' offerWrapper='flex' offerPrice='۲۱۰٬۰۰۰' offerCount='۱۵' priceValue='۱۹۰٬۰۰۰' comment='45' star='3'/>
    </ListSection>
</div>
)
}