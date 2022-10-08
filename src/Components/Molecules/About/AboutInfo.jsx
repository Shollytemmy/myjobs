import React from 'react'
import { Image } from '../../Atoms/ImageComponent/Image'

export const AboutInfo = ({id, name, logo, summary}) => {
  return (
    <article className=' mt-[100px]'>
         <p className='center w-[160px] h-[58px] ml-[43px] flex justify-center items-center font-heading font-semibold text-[32px] text-hPrimary'>{name}</p>
         <div className='flex gap-12'>

            <div className='flex items-center w-[] h-[80px]'>
                <Image text={logo} />

            </div>
            
            <p className='font-heading font-normal text-[22px] leading-[40px] text-brownish'>{summary}</p>


         </div>
        
       
    </article>
  )
}
