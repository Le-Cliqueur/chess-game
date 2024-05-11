import React from 'react'

function Square({color, line, column}) {

    function squareLocation() {
        console.log(String.fromCharCode(column + 64) + '' + line)
    }

  return (

    <div onClick={() => squareLocation()} className={`${color}-square`}>

    </div>
  )
}

export default Square