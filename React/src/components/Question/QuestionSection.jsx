import React from 'react'
import Header from '../share/Header'
import { NavLink } from 'react-router-dom'
import Accordion from './Accordion'
export default function QuestionSection() {
return (
<>
<Header title='سوالات متداول از ترخینه' background='bg-header-question'/>
<div className="bg-gray-300">
    <div className="container">
        <div className="py-1.5 md:pt-4 flex items-center gap-4 md:gap-8 text-gray-700 text-xs md:text-xl">
            <NavLink to='/question' className="state__question--active">سوالات متداول</NavLink>
            <NavLink to='/question/rules'>قوانین ترخینه</NavLink>
            <NavLink to='/question/privacy'>حریم خصوصی</NavLink>
        </div>
    </div>
</div>
<div className="container mb-6 md:mb-12">
    <div className='transition-all duration-300 mt-3 md:mt-6 visible opacity-100 h-auto border border-gray-400 rounded overflow-hidden'>
        <Accordion id='1' question='ترخینه چه امکانات متفاوتی داره؟' answer='وبسایت سفارش غذای رستوران‌های زنجیره‌ای ترخینه با اتصال مستقیم به نرم افزار اتوماسیون شعبات رستوران، امکان اشتباهات هنگام ثبت سفارش آنلاین غذا و همچنین زمان مورد نیاز برای آماده سازی و تحویل آن را به حداقل ممکن می رسونه.'/>
        <Accordion id='2' question='چطور می تونم در ترخینه حساب کاربری ایجاد کنم؟' answer='خیلی ساده، پس از انتخاب غذای مورد علاقه تان از منوی رستوران، هنگام ثبت سفارش با وارد کردن شماره تلفن همراه یک پیامک حاوی کد تایید برای شما ارسال و با وارد کردن کد تایید، ثبت نام شما تکمیل می شه. یا می تونید در صفحه اصلی سایت روی گزینه ورود کلیک کنید.'/>
        <Accordion id='3' question='سابقه و لیست خریدهای قبلی ام رو کجا ببینم؟' answer='با ورود به حساب کاربری و کلیک روی گزینه سفارشات قبلی سابقه تمام خریدهای شما نمایش داده می شه.'/>
        <Accordion id='4' question='چه راه هایی برای پرداخت دارم؟' answer='هنگام ثبت سفارش غذا می تونید روش پرداخت دلخواه خودتون رو انتخاب کنید. آنلاین و یا نقدی در هنگام تحویل سفارش بصورت حضوری.'/>
        <Accordion id='5' question='آیا قیمت در منوی وبسایت ترخینه با قیمت منوی شعبات رستوران یکسان است؟' answer='بله. قیمت منوی وبسایت ترخینه دقیقا مطابق با قیمت منوی شعب رستوران  است و در صورت تغییر قیمت از طرف رستوران این تغییر در وبسایت ترخینه بلافاصله قابل مشاهده است.'/>
        <Accordion id='6' question='چطور می تونم از اعتبار هدیه و تخفیف استفاده کنم؟' answer='برای استفاده از کد تخفیف میتونید به سادگی کد رو در سبد خرید، در قسمت مشخص شده وارد کنید. اعتبار هدیه هنگام انتخاب روش پرداخت برای شما نمایش داده میشه و در صورت تمایل میتونید ازش استفاده کنید.'/>
    </div>
</div>
</>
)
}