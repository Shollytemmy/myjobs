import React from 'react'
import Button from '../../Atoms/Buttons'
import { Image } from '../../Atoms/ImageComponent/Image'


export const Experience = ({levels, experiences}) => {
  return (
    <div className='flex gap-6'>
        <div>
             {levels.map((level) => <div><li
             className='text-[20px] font-heading font-normal leading-[30px]'>{level}</li></div>)}
            
        </div>
       
        <div>
            {experiences.map((exp, idx) => <div key={idx} 
             className='text-[20px] font-heading font-normal leading-[30px]'>{exp}</div>)}
            
        </div>
        <div className='flex gap-9 w-[50%] items-center'>
            <Image text="/images/share.png" />
            <Button btnName={'See more'} color="teal" customClasses="more_btn" />
        </div>

        
    </div>
  )
}
