import React from 'react'
import { Image } from '../../Atoms/ImageComponent/Image'

export const LatestNewsItems = ({news, latest, text}) => {
  return (
    <article className='latest_news'> 
            <div className='left__side'>
                <h1>{latest}</h1>
                <Image text={text} />
            </div>
            <div className='right__side'>
                <h3 className=' news__update'>Our news update</h3>
                <p className='news__card'>{news}</p>
            </div>
        </article>
  )
}
