import React from 'react'
import NavMolecules from '../../Molecules/NavBar'
import logo from '../../../Components/Atoms/Images/logo.png'

import {Image} from '../../Atoms/ImageComponent/Image'
import './navLogics.scss'

export const NavLogics = ({}) => {
   
    const navStyleLink =({isActive}) =>{
      return{
        color: isActive ? 'hsla(186, 100%, 25%, 1)' : '#000'
      }

    }
  return (
    <header className="head">
      <Image text={logo}/>
      <NavMolecules navStyleLink={navStyleLink} btnName='Login'/>
     
    </header>

    
        
         

    
  )
}
