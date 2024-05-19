import React, { useState } from 'react'
import './chess-board.css'


function Square({whiteToMove, setWhiteToMove, pieceArr, setPieceArr, myTuple, setMyTuple, color, line, column}) {



  function squareLocation(e) {
    console.log(myTuple)
    // Choose the piece to move
    if (myTuple.x == null && myTuple.y == null && pieceArr[column][line] != null && whiteToMove == pieceArr[column][line].props.isWhite) {
      setMyTuple({x: line, y: column})
      console.log('mooove')
    }
    // Change piece to move (same color)
    if (myTuple.x !== null && myTuple.y !== null && (pieceArr[column][line] == null || whiteToMove == pieceArr[column][line].props.isWhite)) {
      setMyTuple({x: line, y: column})
      console.log('okk')
    }
    // IF it's the second click and the square is empty or the piece is !color of first click
    if (myTuple.x !== null && myTuple.y !== null && myTuple !== null && (pieceArr[column][line] == null || whiteToMove !== pieceArr[column][line].props.isWhite)) {
      // Second click on the same piece
      if (myTuple.x == line && myTuple.y == column) {
        console.log('same piece')
        setMyTuple({x: null, y: null})
      } else {
        // A normal move is played
        const newArr = [...pieceArr]
        newArr[column][line] = pieceArr[myTuple.y][myTuple.x]
        newArr[myTuple.y][myTuple.x] = null
        
        setPieceArr(newArr)

        setMyTuple({x: null, y: null})
        setWhiteToMove(!whiteToMove)
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