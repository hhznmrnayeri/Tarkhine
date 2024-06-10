import React from 'react'
import Nav from '../share/Nav'
import Footer from '../share/Footer'
import { Outlet } from 'react-router-dom'
// import { useRoutes } from 'react-router-dom'
// import routes from '../../routes'
export default function Question() {
  // const router=useRoutes(routes)
  return (
    <div>
      <Nav title='about'/>
      {/* {router} */}
      <Outlet/>
      <Footer/>
    </div>
  )
}