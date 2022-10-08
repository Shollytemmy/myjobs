import React from 'react'


export const Image = ({text}) => {
  return (
    <img src={text} alt={text} srcSet="" className="object-cover" />
  )
}

/**
 * `./Images/${}.png`
 */
