import React from 'react'
import { JobCard } from '../Molecules/JobCard'
import Button from '../Atoms/Buttons'

export const CardSection = ({handleClick}) => {
   
  return (
    <>
    <JobCard handleClick={handleClick} />
    <div className='btn_more_div'>
            <Button
             btnName={'More Updates'} customClasses="moreUpdate_btn" color="white" onClick={() =>  handleClick("moreUpdate is clicked")} />

          </div>

    </>
  )
}
