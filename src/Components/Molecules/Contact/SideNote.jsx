import React from 'react'
import { Image } from '../../Atoms/ImageComponent/Image'

export const SideNote = ({email, logo, desc}) => {
  return (
    <div>
        <div className='flex gap-5 '>
            <div className='rounded-full bg-slate-300 w-[30px] h-[30px] flex items-center justify-center '>
               <Image text={logo} />
               
            </div>
            <div className='flex flex-col gap-3'>
                <p className='font-tableH font-normal text-[18px] leading-[21px] text-white'>{email}</p>
                <p className='font-normal font-tableH text-[14px] leading-[16px]'>{desc}</p>
            </div>
        </div>
      
        
    </div>
  )
}
