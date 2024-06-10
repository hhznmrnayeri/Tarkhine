import React from 'react'
import Nav from '../share/Nav'
import Header from '../share/Header'
import Footer from '../share/Footer'
export default function About() {
  return (
    <div>
      <Nav title='about'/>
      <Header title='درباره ترخینه بیشتر بدانید!' background='bg-header-about'/>
      <Footer/>
    </div>
  )
}