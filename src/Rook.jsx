import React from 'react'
import white_rook from './white-rook.png'
import black_rook from './white-rook.png'



function Rook({color}) {

  return (
    <img src={(color == "white") ? white_rook : black_rook} className='image' alt="rook" />
  )
}

export default Rook