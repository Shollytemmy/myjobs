
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MoreInfo } from '../../Components/Molecules/Jobs/MoreInfo'
import PageTemplate from '../../Components/Templates/PageTemplate'

export const SeeMoreInfo = ({jobInfo}) => {
    const [jobData, updateJob]= useState(jobInfo)
    const {jobID} = useParams()
    // console.log(useParams())
    // console.log(jobID)
    const getParticularJob = jobInfo[jobID - 1]
    // console.log(getParticularJob)

    const removeJob = (id) =>{
        const filtered = jobData.filter((job) => job.id !== id)
        updateJob(filtered)
        console.log(filtered)
         
    }

    // console.log(jobData)
    useEffect(()=>{
        removeJob(Number(jobID))
        return() =>{
          updateJob([])
        }
    }, [])
  return (
    <PageTemplate>
        <MoreInfo {...getParticularJob} jobData={jobData}/>

      </PageTemplate>
  )
}
