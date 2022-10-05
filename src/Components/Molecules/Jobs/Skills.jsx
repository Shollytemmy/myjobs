import React from 'react'
import Button from '../../Atoms/Buttons'
import { ThreeButtons } from './ThreeButtons'

export const Skills = ({skills}) => {
  return (
    <div>
        <div className='mb-[32px]'>

        <h1 className='font-heading font-medium text-[23px] leading-[29px] text-hPrimary p-[4px] mb-[12px]'>Required skills and competency</h1>
        {
            skills.map((skill, idx) => <li key={idx} className='text-brownish font-heading font-normal text-[22px] leading-[36px]'>{skill}</li>)
        }
        </div>

        <div className='mb-[32px]'>

        <h1 className='font-heading font-medium text-[23px] leading-[29px] text-hPrimary p-[4px] mb-[12px]' >Requirements</h1>
        {
            skills.map((skill, idx) => <li key={idx} className='text-brownish font-heading font-normal text-[22px] leading-[36px]'>{skill}</li>)
        }
        </div>

        <div className='mb-[100px]'>

        <h1 className='font-heading font-medium text-[23px] leading-[29px] text-hPrimary p-[4px] mb-[12px]'>Important safety tips</h1>
        {
            skills.map((skill, idx) => <li key={idx} className='text-brownish font-heading font-normal text-[22px] leading-[36px]'>{skill}</li>)
        }
        </div>
        <div className='flex gap-[60px] mb-[74px]'>
            <ThreeButtons
            button = {<Button
            color="white"
            btnName="Report this job"
            customClasses="moreUpdate_btn"
            
                 />}
             />

             <ThreeButtons
            button = {<Button
            color="white"
            btnName="Share"
            customClasses="moreUpdate_btn"
            
                 />}
             /><ThreeButtons
            button = {<Button
            color="teal"
            btnName="Apply"
            customClasses="more_btn"
            
                 />}
             />
        </div>
    </div>
  )
}


//Important safety tips