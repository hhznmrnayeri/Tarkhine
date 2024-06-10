import React from 'react'
import Nav from '../share/Nav'
import Footer from '../share/Footer'
import Header from '../share/Header'
import Option from './Option'
import Advantage from './Advantage'
import Advice from './Advice'
export default function Representation() {
  return (
    <div>
      <Nav title='representation'/>
      <Header title='همین الان به خانواده بزرگ ترخینه بپیوندید!' background='bg-header-representation'/>
      <Option/>
      <Advantage/>
      <Advice/>
      <Footer/>
    </div>
  )
}