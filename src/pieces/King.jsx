import React from 'react'
import white_king from '../images/white-king.png'
import black_king from '../images/black-king.png'



function King({color}) {

  return (
    <img src={(color == "white") ? white_king : black_king} className='image' alt="king" />
  )
}

export default King