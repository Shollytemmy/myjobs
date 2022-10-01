import React from 'react'
import { jobLists } from '../../data/data'
import { RecentJobs } from '../../Pages/RecentJobs'


export const JobCard = ({handleClick}) => {
    const job ="Recently Posted Jobs"
    
  
  return (
    <div>
        <h1 className='recent_post'>{job}</h1>
        
              {/* map here */}
              {
                jobLists.map((job) =>  <RecentJobs key={job.id} {...job} handleClick ={handleClick} />
                )}

               
    </div>
  )
}
