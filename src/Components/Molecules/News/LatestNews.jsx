import React from 'react'
import { Text } from '../../Atoms/Text'
import { jobInfo } from '../../../data/data'
import './News.scss'
import { JobInfo } from './JobInfo'

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
        <article className='latest_news'>
            <div className='left__side'>
                <h1>{latest}</h1>
            </div>
            <div className='right__side'>
                <h3 className=' news__update'>Our news update</h3>
                <p className='news__card'>{news}</p>
            </div>
        </article>
        {
            jobInfo.map((job) => <JobInfo key={job.id} {...job} />)
        }

    </section>
  )
}
