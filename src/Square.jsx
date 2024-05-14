import React, { useState } from 'react'
import './chess-board.css'
import knight from './white-knight.png'
import pawn from './white-pawn.png'


function Square({pieces, piece, myTuple, setMyTuple, color, line, column}) {

  const [imgPiece, setImgPiece] = useState(pieces[column][line])
  const [imgPieces, setImgPieces] = useState(pieces)
  

    function squareLocation(e) {
        console.log(String.fromCharCode(column + 64) + '' + line)
        // Need to pass pieces ans a setter for the pieces tab from Board to Square

        if (myTuple.x !== null && myTuple.y !== null) {
          console.log('first')
          setImgPiece(pieces[myTuple.y][myTuple.x])
          const newArr = [...imgPieces]
          newArr[0][0] = imgPieces[myTuple.y][myTuple.x]
          console.log(newArr)
          setImgPieces(newArr)
          console.log(pieces)

          setMyTuple({x: null, y: null})
        } else {
          setMyTuple({x: line, y: column})
          console.log(pieces[column][line])

        }
        console.log(myTuple)
    }


  return (
    <div onClick={(e) => squareLocation(e)} className={`${color}-square`}>
      <img className='image' src={imgPiece} alt="chess-piece" />
    </div>
  )
}

export default Square