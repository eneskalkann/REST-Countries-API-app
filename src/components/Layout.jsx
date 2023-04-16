import React from 'react'
import Header from './header'
import App from '../App'
import Filter from './Filter'

function Layout() {
  return (
    <div className='px-20 font-nunito bg-veryLightGray scroll-smooth'>
        <Header />
        <Filter />
        <App />
    </div>
  )
}

export default Layout