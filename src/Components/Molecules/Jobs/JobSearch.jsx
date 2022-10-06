import React from 'react'
import { Image } from '../../Atoms/ImageComponent/Image'
import Button from '../../Atoms/Buttons'
import { Experience } from '../News/Experience'
import { JobInfo } from '../News/JobInfo'

export const JobSearch = (
    {company,
     job,
         summary, experiences, logo, levels, id
       }
         ) => {
  return (
    <JobInfo
    job={job}
    company={company}
    summary ={summary}
     experiences ={experiences} logo={logo} levels={levels} id ={id}
     />
  )
}
