import React from 'react'
import { Text } from '../../Atoms/Text'
import { jobInfo } from '../../../data/data'
import './News.scss'
import { JobInfo } from './JobInfo'
import { LatestNewsItems } from './LatestNewsItems'

export const LatestNews = () => {
    const latest = `Latest news
& discussions`;

    const news = `The most elegant expression of Apple
Watch returns with two iconic materials
— titanium and ceramic. The most elegant 
expression of Apple Watch returns with two
 iconic materials
— titanium and ceramic.`
  return (
    <section>
        <LatestNewsItems news={news} latest={latest} />
        {
            jobInfo.map((job) => <JobInfo key={job.id} {...job} />)
        }

    </section>
  )
}
