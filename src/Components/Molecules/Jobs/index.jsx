import React from 'react'
import { useParams } from 'react-router-dom'
import PageTemplate from '../../Templates/PageTemplate'
import { SingleJob } from './SingleJob'

export const MainJob = ({jobInfo}) => {
    const {jobId} = useParams()
    // console.log(useParams())
    const getJobData = jobInfo[jobId - 1]

    // console.log(getJobData);
   
  return (
    <PageTemplate>
      
        <SingleJob {...getJobData} />
        </PageTemplate>
  )
}
