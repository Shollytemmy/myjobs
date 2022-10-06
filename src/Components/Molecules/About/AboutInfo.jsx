import React from 'react'
import { Image } from '../../Atoms/ImageComponent/Image'

export const AboutInfo = ({id, name, logo, summary}) => {
  return (
    <article>
         <p className='center w-[146px] h-[58px] ml-[30px] flex justify-center items-center'>{name}</p>
         <div className='flex gap-12'>
            <div className='flex items-center'>
                <Image text={logo} />

            </div>
            
            <p>{summary}</p>


         </div>
        
       
    </article>
  )
}
