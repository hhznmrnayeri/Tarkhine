import React from 'react'
import Nav from '../share/Nav'
import Header from '../share/Header'
import Footer from '../share/Footer'
import Section from './Section'
import Option from './Option'
export default function About() {
  return (
    <div>
      <Nav title='about'/>
      <Header title='درباره ترخینه بیشتر بدانید!' background='bg-header-about'/>
      <Section/>
      <Option/>
      <Footer/>
    </div>
  )
}