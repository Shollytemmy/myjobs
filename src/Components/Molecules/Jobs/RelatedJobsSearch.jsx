import React from 'react'
import { JobSearch } from './JobSearch'

export const RelatedJobsSearch = ({jobData}) => {
   
  return (
    <div className='mt-[161px]'>
      <h1 className='ml-[225px] font-heading font-medium text-2xl leading-10 -tracking-[1px] text-brownish'>Related Jobs Search</h1>
        {jobData.map((job) => <JobSearch key={job.id} {...job} /> )}
         
    </div>
  )
}
