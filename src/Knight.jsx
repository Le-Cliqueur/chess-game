import React from 'react'
import white_knight from './white-knight.png'
import black_knight from './white-knight.png'



function Knight({color}) {

  return (
    <img src={(color == "white") ? white_knight : black_knight} className='image' alt="knight" />
  )
}

export default Knight