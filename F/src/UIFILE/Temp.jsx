import React from 'react'
import Navbar from './Navbar'
import Bodysection from './Bodysection'
import Middlesection from './Middlesection'
import Tagsection from './Tagsection'
import Footersection from './Footersection'
import Footerbar from './Footerbar'
import '../UIFILE/Navbar.css'

const Temp = () => {
  return (
    <div >
       <div id='temp-navbar'>
        <Navbar/>
        </div>   
        <div id='temp-body'>
        <Bodysection/>
        </div>
      <div id='temp-middle'>
      <Middlesection/>
      </div>
      <div id='temp-tag'>
        <Tagsection/>
        </div>
        <div id='temp-Footer'>
        <Footersection/>
        </div>
        <div id='temp-footbar'>
        <Footerbar/>
        </div>
       
        
    </div>
  )
}

export default Temp
