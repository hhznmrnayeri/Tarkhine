import React from 'react'
import Nav from '../share/Nav'
import Footer from '../share/Footer'
import Header from '../share/Header'
import Topic from './Topic'
import Type from './Type'
import Search from './Search'
import List from './List'
export default function Menu() {
  return (
    <div>
      <Nav title='menu'/>
      <Header title='لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!'/>
      <Topic/>
      <section className="mt-2 md:mt-4">
            <div className="container">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 justify-between">
                  <Type/>
                  <Search/>
                </div>
            </div>
      </section>
      <List/>
      <Footer/>
    </div>
  )
}