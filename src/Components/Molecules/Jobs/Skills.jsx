import React from 'react'
import Button from '../../Atoms/Buttons'
import { ThreeButtons } from './ThreeButtons'

export const Skills = ({skills}) => {
  return (
    <div>
        <div>

        <h1>Required skills and competency</h1>
        {
            skills.map((skill) => <li>{skill}</li>)
        }
        </div>

        <div>

        <h1>Requirements</h1>
        {
            skills.map((skill) => <li>{skill}</li>)
        }
        </div>

        <div>

        <h1>Important safety tips</h1>
        {
            skills.map((skill) => <li>{skill}</li>)
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