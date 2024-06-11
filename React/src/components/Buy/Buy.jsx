import React from 'react'
import Nav from '../share/Nav'
import Footer from '../share/Footer'
import { Outlet } from 'react-router-dom'
export default function Buy() {
  return (
    <div>
      <Nav title='buy' shadow={true}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}