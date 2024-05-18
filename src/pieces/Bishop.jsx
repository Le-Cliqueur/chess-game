import React from 'react'
import white_bishop from '../images/white-bishop.png'
import black_bishop from '../images/black-bishop.png'



function Bishop({color}) {

  return (
    <img src={(color == "white") ? white_bishop : black_bishop} className='image' alt="bishop" />
  )
}

export default Bishop