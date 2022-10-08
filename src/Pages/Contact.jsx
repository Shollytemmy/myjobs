import React from 'react'
import { LatestNewsItems } from '../Components/Molecules/News/LatestNewsItems'
import PageTemplate from '../Components/Templates/PageTemplate'

const Contact = () => {

  const reachUs = `Where you can find us`

   const news = `Lorem Ipsum Lorem Ipsum Lorem
Ipsum Lorem Ipsum
    - Hi. My name is Khoa. I am a  .`
    const top = `Contact us`

    const contact = `We love catching up with our
 supporters and want to make
speaking to us as easy as possible.`
  return (
    <PageTemplate>
      <LatestNewsItems
       update={reachUs} 
       news={news}
        latest={contact}
         top={top}
          custom="text-hPrimary font-normal text-[22px] leading-[36px] whitespace-pre"
          icon=""
           />
    </PageTemplate>
  )
}

export default Contact