import React from 'react'
import {NavLink} from 'react-router-dom'

export const Nav = ({linkName, navStyleLink}) => {

  return (
    <nav>        <NavLink to={`${linkName === 'Home'? `/`: `/${linkName}` }`} style={navStyleLink} >{linkName}</NavLink>
    </nav>
  )
}
