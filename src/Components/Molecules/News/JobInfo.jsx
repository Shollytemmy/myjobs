import React from 'react'
import { Image } from '../../Atoms/ImageComponent/Image'
import { Experience } from './Experience'

export const JobInfo = ({company:{name, specialization, location }, job:{title, nature, offer, stack, proposedSalary, postedDate}, summary, experiences, logo, levels}) => {
  return (
    <section className='mx-[127px]'>
        <article className='border mb-[60px]'>
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
                </div>
                <div>
                    <div className=' mt-[20px] p-6 '>
                        <h2 className='font-medium text-[24px] leading-[29px] text-hPrimary'>Job Summary</h2>
                        <p className='w-[768px] whitespace-pre text-brownish font-heading font-normal leading-[32px] text-[22px]'>{summary}</p>
                    </div>
                    <div className=''>
                        <Experience levels={levels} experiences={experiences} />
                    </div>
                </div>
            </article>
        </article>
    </section>
  )
}
