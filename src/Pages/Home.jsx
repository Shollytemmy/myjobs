import React from 'react'
import PageTemplate from '../Components/Templates/PageTemplate'
import '../Components/Atoms/Buttons/Button.css'

import { Hero } from '../Components/Organisms/Hero'
import { CardSection } from '../Components/Organisms/CardSection'

//import css
import './home.css'


 const Home = () => {

    const handleClick = (mgs) =>{
        
    alert(mgs)
  }


  
 
  return (
    <PageTemplate>
       <section className='container mx-auto my-auto '>
        <Hero handleClick ={handleClick} />
         </section>
          <CardSection  handleClick = {handleClick} />
          

    </PageTemplate>
  )
}

export default Home
