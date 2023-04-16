import React from 'react'
import {MdOutlineDarkMode,MdDarkMode} from 'react-icons/md'


function Header() {
  return (
    <div className=' flex justify-between py-8'>
        <h1>Where in the world?</h1>
        <div className=' flex gap-2 items-center'>
            <MdOutlineDarkMode/>
            <span>Dark Mode</span>
        </div>
    </div>
  )
}

export default Header