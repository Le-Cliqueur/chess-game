import React, { useState } from 'react'
import './chess-board.css'
import Square from './Square'
import knight from './white-knight.png'
import pawn from './white-pawn.png'




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

    // Choose the piece type in that loop
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j == 0) {
                squares[i][j] = <Square squares={squares} key={j} color={'dark'} line={8 - (j)} column={i+1}></Square>
            }
            else if ((i % 2 == 1 && j % 2 == 0) || (i % 2 == 0 && j % 2 == 1)) {
                squares[i][j] = <Square piece={knight} squares={squares} key={j} color={'dark'} line={8 - (j)} column={i+1}></Square>
            } else {
                squares[i][j] = <Square piece={pawn} squares={squares} key={j} color={'light'} line={8 - (j)} column={i+1}></Square>
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