import React from 'react'
import white_queen from '../images/white-queen.png'
import black_queen from '../images/black-queen.png'



function Queen({color}) {

  return (
    <img src={(color == "white") ? white_queen : black_queen} className='image' alt="queen" />
  )
}

export default Queen