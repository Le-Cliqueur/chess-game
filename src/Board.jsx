import React from 'react'
import './chess-board.css'
import Square from './Square'


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

  return (
    <div className='chess-board'>
        {squares.map((item, index) => {
            return (
                <div key={index}>
                    {item.map((subItem, subIndex) => {
                        if ((index % 2 == 1 && subIndex % 2 == 0) || (index % 2 == 0 && subIndex % 2 == 1)) {
                            return <Square key={subIndex} color={'dark'} line={8 - (subIndex)} column={index+1}></Square>
                        } else {
                            return <Square key={subIndex} color={'light'} line={8 - (subIndex)} column={index+1}></Square>
                        }
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default Board