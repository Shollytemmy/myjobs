import React from 'react'


export const Image = ({text}) => {
  return (
    <img src={text} alt={text} srcSet="" className="ml-6 object-cover" />
  )
}

/**
 * `./Images/${}.png`
 */
