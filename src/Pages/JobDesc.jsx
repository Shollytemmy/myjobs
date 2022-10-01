import React from 'react'

export const JobDesc = ({role, requirement1, requirement2,description}) => {
  return (
    <div className='p-12 '>

    <h1 className='leading-8 text-[32px] mb-5'>{role}</h1>
                  <div className='w-[600px]'>
                  <h2 className='requirement__text'>Description</h2>
                    <p className='job__description'>
                     {description}  
                    </p>
                  </div>
                  <div className='w-[600px]'>
                    <h2 className='requirement__text'>Requirement</h2>
                    <p className='job__description'>
                     {requirement1}
                    </p>
                  </div>
                  <div className='w-[600px] h-[96px]'>
                    <h2 className='requirement__text'>Requirement</h2>
                    <p className='job__description'>
                      {requirement2}
                    
                    </p>
                  </div>
    </div>



  )
}
