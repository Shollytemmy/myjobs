import React from 'react'
import { Div } from '../../Atoms/Div'
import Footer from '../../Organisms/Footer/Footer'
import { Image } from '../../Atoms/ImageComponent/Image'

const FooterGrouped = ({text,children}) => {
  console.log(children)

  
  return (
    <Footer>
      <Image text={text} />
      <Div>{children}</Div>

    </Footer>
  )
}

export default FooterGrouped