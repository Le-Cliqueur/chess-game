import React, { useState } from 'react'
import './chess-board.css'
import Square from './Square'

import Pawn from './pieces/Pawn'
import Knight from './pieces/Knight'
import Rook from './pieces/Rook'
import Bishop from './pieces/Bishop'
import Queen from './pieces/Queen'
import King from './pieces/King'




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
    const [pieceArr, setPieceArr] = useState(pieces)
    const [whiteToMove, setWhiteToMove] = useState(true)

    let color = ''
    let isWhite = true
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j >= 6) {
                color = 'white'
                isWhite = true
            } else {
                color = 'black'
                isWhite = false
            }
            if (j == 1 || j == 6) {
                pieces[i][j] = <Pawn color={color} isWhite={isWhite}></Pawn>
            } else if ((j == 0 || j == 7) && (i == 1 || i == 6)) {
                pieces[i][j] = <Knight color={color} isWhite={isWhite}></Knight>
            } else if ((j == 0 || j == 7) && (i == 0 || i == 7)) {
                pieces[i][j] = <Rook color={color} isWhite={isWhite}></Rook>
            } else if ((j == 0 || j == 7) && (i == 2 || i == 5)) {
                pieces[i][j] = <Bishop color={color} isWhite={isWhite}></Bishop> // Bishop
            } else if ((j == 0 || j == 7) && (i == 4)) {
                pieces[i][j] = <King color={color} isWhite={isWhite}></King> // KING
            } else if ((j == 0 || j == 7) && (i == 3)) {
                pieces[i][j] = <Queen color={color} isWhite={isWhite}></Queen> // QUEEN
            } 
            else {
                pieces[i][j] = null
            }


            if ((i % 2 == 1 && j % 2 == 0) || (i % 2 == 0 && j % 2 == 1)) {
                squares[i][j] = <Square whiteToMove={whiteToMove} setWhiteToMove={setWhiteToMove} pieceArr={pieceArr} setPieceArr={setPieceArr} piece={pieces[i][j]} myTuple={myTuple} setMyTuple={setMyTuple} key={j} color={'dark'} line={j} column={i}></Square>
            } else {
                squares[i][j] = <Square whiteToMove={whiteToMove} setWhiteToMove={setWhiteToMove} pieceArr={pieceArr} setPieceArr={setPieceArr} piece={pieces[i][j]} myTuple={myTuple} setMyTuple={setMyTuple} key={j} color={'light'} line={j} column={i}></Square>
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