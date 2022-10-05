import React from 'react'
import { JobDesc } from './JobDesc'
import Button from '../Components/Atoms/Buttons'
import { Image } from '../Components/Atoms/ImageComponent/Image'

export const RecentJobs = ({id, logo, role, name, location, description, requirement1, requirement2, handleClick}) => {
  return ( 
  <section className='w-[1164px] h-[623px] container mx-auto border-2 rounded-md mb-[106px]'>
            <article className='flex justify-between'>
                <div className=''>
                
                    <div className='flex flex-col'>
                          <Image text={logo}  className='w-[100px] h-[100px]'/>
                          <div className='mx-auto'>
                              <p className='company_name '>{name}</p>
                              <p className='company_location'>{location}</p>
                              <Button
                               btnName={'More'}  color="teal" customClasses="more_btn" onClick={() => handleClick("More is Clicked")}/>
                          </div>
                    </div>
              </div>

                

              <div>
               
                <JobDesc requirement1 ={requirement1} requirement2={requirement2} role={role} description={description} />
              </div>

            </article>

                    </section>
  
  )
}
