import React, { useState } from 'react'
import './chess-board.css'


function Square({pieceArr, setPieceArr, myTuple, setMyTuple, color, line, column}) {

  function canMove(pawn) {
    if (myTuple.y !== null && myTuple.x !== null) {
      return true
    } else {
      return false
    }
  }

  function squareLocation(e) {
    console.log(myTuple)
    if (myTuple.x == null && myTuple.y == null && pieceArr[column][line] != null) {
      setMyTuple({x: line, y: column})
      console.log('mooove')
    }
    if (myTuple.x !== null && myTuple.y !== null && myTuple !== null /*&& canMove(pieceArr[column][line])*/) {
      if (myTuple.x == line && myTuple.y == column) {
        console.log('same piece')
        setMyTuple({x: null, y: null})
      } else{
        const newArr = [...pieceArr]
        newArr[column][line] = pieceArr[myTuple.y][myTuple.x]
        newArr[myTuple.y][myTuple.x] = null
        
        setPieceArr(newArr)

        setMyTuple({x: null, y: null})
      }
    }
  }


  return (
    <div onClick={(e) => squareLocation(e)} className={`${color}-square`}>
      <div>{pieceArr[column][line]}</div>
    </div>
  )
}

export default Square