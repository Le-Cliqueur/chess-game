import React from 'react'
import white_pawn from './white-pawn.png'
import black_pawn from './white-pawn.png'



function Pawn({color}) {

  return (
    <img src={(color == "white") ? white_pawn : black_pawn} className='image' alt="pawn" />
  )
}

export default Pawn