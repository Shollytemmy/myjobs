import React from 'react'
import { Image } from '../../Atoms/ImageComponent/Image'
import InputsWithButton from '../../Molecules/InputsWithButton'
import logo from '../../Atoms/Images/header-logo.png'
import { Text } from '../../Atoms/Text'

export const Hero = () => {
  const lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec"

  const jobs = "Jobs for every GRADUATE"
  return (
    <>
    <div className='flex'>
    <aside className=" mt-[168px]">
          
         
         <div className='img__div'>
          <Image text={logo}/>
          </div>
         <div className='job_grad_txt'>
          <Text sentences={jobs} />
         </div>
         </aside>

        <InputsWithButton  />
        
    </div>
    <div className='central__text'>
           <Text sentences={lorem} />

          </div>
    </>
  )
}
