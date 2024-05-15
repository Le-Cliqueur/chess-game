import React, { useState } from 'react'
import './chess-board.css'


function Square({pieceArr, setPieceArr, myTuple, setMyTuple, color, line, column}) {

  

    function squareLocation(e) {
        console.log(String.fromCharCode(column + 64) + '' + line)
        // Need to pass pieces ans a setter for the pieces tab from Board to Square

        if (myTuple.x !== null && myTuple.y !== null) {

          const newArr = [...pieceArr]
          newArr[column][line] = pieceArr[myTuple.y][myTuple.x]
          newArr[myTuple.y][myTuple.x] = null
          
          setPieceArr(newArr)

          setMyTuple({x: null, y: null})
        } else {
          setMyTuple({x: line, y: column})
        }
    }


  return (
    <div onClick={(e) => squareLocation(e)} className={`${color}-square`}>
      <img className='image' src={pieceArr[column][line]} alt="chess-piece" />
    </div>
  )
}

export default Square