import React from 'react'
import { Image } from '../../Atoms/ImageComponent/Image'

export const LatestNewsItems = ({news, latest, text, update, custom, top, icon}) => {
  console.log(icon);
  return (
    <article className='latest_news'> 
            <div className={`${custom ? custom : 'left__side'}`}>
              <h1 className='font-heading font-semibold text-[48px]  leading-[58px] mb-[17px] text-center text-hPrimary'>{top}</h1>
                <p>
                  
                  {latest}
                  </p>
                <Image text={text} />
            </div>
            <div className='right__side'>
                <h3 className=' news__update'>{update}</h3>
               <Image text={icon} /> <p className='news__card'>{news}</p>
            </div>
        </article>
  )
}
