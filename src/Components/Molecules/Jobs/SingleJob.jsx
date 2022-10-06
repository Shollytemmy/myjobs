import React from 'react'
import { ExactJob } from './ExactJob'


export const SingleJob = (
    {  company:{name, specialization, location },
     job:{title, nature, offer, stack, proposedSalary, 
        postedDate}, jobDescription, about,
         summary, experiences, logo, levels, skills}
         ) => {
  return (
    <div>
        <ExactJob 
        name={name}
        specialization={specialization}
        location={location}
        title ={title}
        nature = {nature}
        offer = {offer}
        stack = {stack}
        proposedSalary ={proposedSalary}
        postedDate = {postedDate}
        jobDescription = {jobDescription}
        about ={about}
        summary = {summary}
        experiences = {experiences}
        logo = {logo}
        levels = {levels}
        skills = {skills}
       
         />
        
        
    </div>
  )

  
}
