import React from 'react'
import Nav from '../share/Nav'
import Footer from '../share/Footer'
import Header from '../share/Header'
import SearchBox from '../share/SearchBox'
import Topic from './Topic'
import Intro from './Intro'
import Branch from './Branch'
export default function Index() {
  return (
    <div>
      <Nav title='home'/>
      <Header title='تجربه غذای سالم گیاهی به سبک ترخینه'/>
      <SearchBox/>
      <Topic/>
      <Intro/>
      <Branch/>
      <Footer/>
    </div>
  )
}