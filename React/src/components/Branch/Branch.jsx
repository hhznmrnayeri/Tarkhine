import React from 'react'
import Nav from '../share/Nav'
import Footer from '../share/Footer'
import Header from '../share/Header'
import SearchBox from '../share/SearchBox'
import Special from './Special'
export default function Branch() {
  return (
    <div>
      <Nav title='branch'/>
      <Header title='طعم بی‌نظیر طبیعت!'/>
      <SearchBox/>
      <Special/>
      <Footer/>
    </div>
  )
}