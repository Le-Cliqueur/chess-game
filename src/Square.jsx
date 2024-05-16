import React, { useState } from 'react'
import './chess-board.css'


function Square({pieceArr, setPieceArr, myTuple, setMyTuple, color, line, column}) {

  function canMove(pawn) {
    if (myTuple.y == column && line == (myTuple.x)+1) {
      return true
    } else {
      return false
    }
  }

    function squareLocation(e) {
      console.log(e.target)
      
      if (myTuple.x !== null && myTuple.y !== null /*&& canMove(pieceArr[column][line])*/) {

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
      <div>{pieceArr[column][line]}</div>
    </div>
  )
}

export default Square