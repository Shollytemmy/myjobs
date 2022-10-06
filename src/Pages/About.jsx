import React from 'react'
import { AboutInfo } from '../Components/Molecules/About/AboutInfo'
import { LatestNewsItems } from '../Components/Molecules/News/LatestNewsItems'
import PageLayout from '../Components/Templates/PageTemplate'
import { aboutData } from '../data/data'

    const news = `The most elegant expression of Apple
Watch returns with two iconic materials
— titanium and ceramic. The most elegant 
expression of Apple Watch returns with two
 iconic materials
— titanium and ceramic.`

const About = () => {
  return (
   <PageLayout> 
    <LatestNewsItems news={news} text="/images/about.png" />
    <div className='mx-[127px] border mb-[65px]'>
      {aboutData.map((data) => <AboutInfo key={data.id} {...data} />)}

    </div>
    

    </PageLayout>
  )
}

export default About