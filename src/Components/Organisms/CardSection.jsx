import React from 'react'
import { JobCard } from '../Molecules/Home/JobCard'
import Button from '../Atoms/Buttons'
import { Link } from 'react-router-dom'

export const CardSection = ({handleClick}) => {
   
  return (
    <>
    <JobCard handleClick={handleClick} />
    <div className='btn_more_div'>
      <Link to='/news'>
        <Button
             btnName={'More Updates'} customClasses="moreUpdate_btn" color="white" onClick={() =>  handleClick("moreUpdate is clicked")} />


      </Link>
            
          </div>

    </>
  )
}
