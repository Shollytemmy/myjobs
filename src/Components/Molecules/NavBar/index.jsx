import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../Atoms/Buttons'
import { navItems } from '../../../data/navItems'
import '../../Atoms/Buttons/Button.css'

import './navBar.scss'


const NavMolecules = ({btnName, navStyleLink}) => {
  return (
  
        
        

        <div className="navBar">
            {/* nav */} 
           <nav className='nav__items'>
            {navItems.map((navItem) =>{
             return <NavLink key={navItem.id} to={navItem.path} style={navStyleLink}>{navItem.name}</NavLink>
            })}
            </nav>

            <Button
             btnName={btnName}
              color='teal'
               customClasses="nav_btn"
                onClick={() => alert("Login Clicked")} />
           

        </div>
        

     
  
  )
}

export default NavMolecules