import React, { useState } from 'react'
import './chess-board.css'
import knight from './white-knight.png'
import pawn from './white-pawn.png'


function Square({piece, squares, color, line, column}) {

  const [imgPiece, setImgPiece] = useState(piece)

    function squareLocation(e) {
        console.log(String.fromCharCode(column + 64) + '' + line)
        console.log(squares)
        setImgPiece(pawn)
    }


  return (
    <div onClick={(e) => squareLocation(e)} className={`${color}-square`}>
      <img className='image' src={imgPiece} alt="chess-piece" />
    </div>
  )
}

export default Square