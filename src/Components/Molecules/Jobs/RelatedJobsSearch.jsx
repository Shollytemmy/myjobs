import React from 'react'
import { JobSearch } from './JobSearch'

export const RelatedJobsSearch = ({jobData}) => {
    // console.log("4rom related jobs",jobData)
  return (
    <div>
        {jobData.map((job) => <JobSearch key={job.id} {...job} /> )}
         
    </div>
  )
}
