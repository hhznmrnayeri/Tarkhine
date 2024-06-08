import React from 'react'
import Nav from '../share/Nav'
import Footer from '../share/Footer'
import Header from '../share/Header'
import SearchBox from '../share/SearchBox'
import Special from './Special'
import Popular from './Popular'
import Foreign from './Foreign'
export default function Branch() {
  return (
    <div>
      <Nav title='branch'/>
      <Header title='طعم بی‌نظیر طبیعت!'/>
      <SearchBox/>
      <Special/>
      <Popular/>
      <Foreign/>
      <Footer/>
    </div>
  )
}