import React, { useState } from 'react'
import './chess-board.css'
import Square from './Square'
import knight from './white-knight.png'
import pawn from './white-pawn.png'
import rook from './white-rook.png'




function Board() {

    const squares = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
    ]
    const pieces = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
    ]

    // Choose the piece type in that loop
    const [myTuple, setMyTuple] = useState({x: null, y: null})
    let pieceType = null
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j == 1 || j == 6) {
                pieceType = pawn
            } else if ((j == 0 || j == 7) && (i == 1 || i == 6)) {
                pieceType = knight
            } else if ((j == 0 || j == 7) && (i == 0 || i == 7)) {
                pieceType = rook // Bishop
            } else if ((j == 0 || j == 7) && (i == 2 || i == 5)) {
                pieceType = rook
            } else if ((j == 0 || j == 7) && (i == 4)) {
                pieceType = pawn // KING
            } else if ((j == 0 || j == 7) && (i == 3)) {
                pieceType = knight // QUEEN
            } 
            else {
                pieceType = null
            }

            pieces[i][j] = pieceType

            if ((i % 2 == 1 && j % 2 == 0) || (i % 2 == 0 && j % 2 == 1)) {
                squares[i][j] = <Square pieces={pieces} piece={pieces[i][j]} myTuple={myTuple} setMyTuple={setMyTuple} key={j} color={'dark'} line={j} column={i}></Square>
            } else {
                squares[i][j] = <Square pieces={pieces} piece={pieces[i][j]} myTuple={myTuple} setMyTuple={setMyTuple} key={j} color={'light'} line={j} column={i}></Square>
            }
        }
    }


  return (
    <div className='chess-board'>
        {squares.map((item, index) => {
            return (
                <div key={index}>
                    {item.map((subItem, subIndex) => {
                        return squares[index][subIndex]
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default Board