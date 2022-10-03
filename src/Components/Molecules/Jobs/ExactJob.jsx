import React from 'react'
import { Image } from '../../Atoms/ImageComponent/Image'
import { Experience } from '../News/Experience'
import { Skills } from './Skills'

export const ExactJob = ({id,name, specialization, location ,
     title, nature, offer, stack, proposedSalary, 
        postedDate, jobDescription, about,
         summary, experiences, logo, levels, skills}) => {
  return (
    <section className='mt-5 mb-[24px]'>
        <div className='right__h flex flex-col mt-[130px] mb-[64px] gap-[23px] ml-[140px]'>
                  <span className='name__comp font-heading font-[700px] text-[58px] leading-[72px] block'>{name}</span> 
                    <span>{specialization}</span>
                    <span>{location}</span>
                    <span>{title}</span>
                </div>
               <section className='mx-[127px] border'>
        <article className=' mb-[]'>
            <header className='header_news flex gap-4 items-center border-b p-4'>
                <div className='left__header'>
                    <div className='title__job'>{title}</div>
                    <div className='nature__job'>{nature}</div>
                    <div className='level__job'>
                        <span>{stack}</span>
                        <span>{offer}</span>
                        <span>{proposedSalary}</span>
                        <span>{postedDate}</span>
                    </div>
                </div>
                <div className='right__header'>
                  <span className='name__company'>{name}</span> 
                    <span>{specialization}</span>
                    <span>{location}</span>
                </div>
            </header>
            <article className='flex gap-8'>
                <div className='ml-[46px] object-contain mt-[46PX]'>
                    <Image text={logo} />
                    {/* <img src="images/sec.png" alt="" /> */}
                </div>
                <div>
                    <div className=' mt-[20px] p-6 '>
                        <h2 className='font-medium text-[24px] leading-[29px] text-hPrimary'>Job Summary</h2>
                        <p className='w-[768px] whitespace-pre text-brownish font-heading font-normal leading-[32px] text-[22px]'>{summary}</p>
                    </div>
                    <div className=''>
                        <Experience 
                        levels={levels} 
                        experiences={experiences} />
                    </div>
                </div>
            </article>
        </article>
        <section className=' mt-[58px] mb-[12px] ml-[46px]'>
                    <div className='h-[288px] font-heading font-medium text-[22px] leading-[36px] mb-[74px]'>
                        <h2 className='font-heading font-medium text-[23p4] leading-[29px] text-hPrimary p-[4px]'>Job Description  and requirements</h2>
                        {jobDescription}
                        </div>
                    <div className='h-[250px] font-heading font-normal text-[22px] leading-[36px]'>
                        <h2 className='text-brownish'>About You</h2>
                        {about}
                        </div>
                    <div>
                        <Skills skills={skills} />
                    </div>
                </section>
    </section>
    </section>
  )
}