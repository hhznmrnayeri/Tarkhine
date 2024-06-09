import React from 'react'
import Nav from '../share/Nav'
import Footer from '../share/Footer'
import Header from '../share/Header'
import Topic from './Topic'
export default function Menu() {
  return (
    <div>
      <Nav title='menu'/>
      <Header title='لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!'/>
      <Topic/>
      <Footer/>
    </div>
  )
}