import React from 'react'
import Nav from '../share/Nav'
import Footer from '../share/Footer'
import Header from '../share/Header'
import SearchBox from '../share/SearchBox'
import Special from './Special'
import Popular from './Popular'
import Foreign from './Foreign'
import { LiaClipboardListSolid } from "react-icons/lia";
import Gallery from './Gallery'
import About from './About'
import Comment from './Comment'
import { NavLink } from 'react-router-dom'
export default function Branch() {
  return (
    <div>
      <Nav title='branch'/>
      <Header title='طعم بی‌نظیر طبیعت!'/>
      <SearchBox/>
      <Special/>
      <Popular/>
      <Foreign/>
      <NavLink to='/menu' className="flex-center mx-auto border mt-3 md:mt-7 border-primary text-primary gap-2 p-2 rounded md:px-4 md:font-estedadMedium text-xs md:text-base w-52">
            <LiaClipboardListSolid className="w-4 h-4 md:w-6 md:h-6"/>
            مشاهده منوی کامل
      </NavLink>
      <Gallery/>
      <About/>
      <Comment/>
      <Footer/>
    </div>
  )
}