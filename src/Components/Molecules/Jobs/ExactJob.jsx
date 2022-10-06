import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from '../../Atoms/ImageComponent/Image'
import { Experience } from '../News/Experience'
import { Skills } from './Skills'



export const ExactJob = ({id, logo, name, specialization, location ,
     title, nature, offer, stack, proposedSalary, 
        postedDate, jobDescription, about,
         summary, experiences, levels, skills}) => {
           
  return (
    <section className='mt-5 mb-[24px]'>
        <div className='right__h flex flex-col mt-[130px] mb-[64px] gap-[23px] ml-[140px]'>
                  <span className='name__comp font-heading font-[700px] text-[58px] leading-[72px] block'>{name}</span> 
                    <span className='font-heading font-normal text-[44px] leading-[52px] tracking-[1.222px]'>{specialization}</span>
                    <span className='font-heading font-normal text-[44px] leading-[52px]'>{location}</span>
                    <span className='font-heading font-medium text-[58px] leading-[60px]'>{title}</span>
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
                <Link to={ id ?`/job/${id}` : ''} className='right__header'>
                       
                  <span className='name__company'>{name}</span> 
                    <span>{specialization}</span>
                    <span>{location}</span>
             
                </Link>
             
            </header>
            <article className='flex gap-8'>
                <div className='ml-[46px] object-contain mt-[46PX]'>
                    <Image text={logo} />
        
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
                    <div className=' font-heading font-medium text-[22px] leading-[36px] mb-[32px]'>
                        <h2 className='font-heading font-medium text-[23px] leading-[29px] text-hPrimary p-[4px] mb-[12px]'>Job Description  and requirements</h2>
                        
                        <p className='text-brownish'>{jobDescription}</p>
                        </div>

                    <div className='font-heading font-normal text-[22px] leading-[36px] mb-[32px]'>
                        <h2 className='font-heading font-medium text-[23px] leading-[29px] text-hPrimary p-[4px] mb-[12px]'>About You</h2>
                        <p className='text-brownish'>{about}</p>
                        
                        </div>
                    <div>
                        <Skills skills={skills} />
                    </div>
                </section>
    </section>
    </section>
  )
}

