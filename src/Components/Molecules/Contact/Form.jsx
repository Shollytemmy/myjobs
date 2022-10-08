import React from 'react'
import Button from '../../Atoms/Buttons'
import Input from '../../Atoms/Input'
import { contactData } from '../../../data/data'
import { SideNote } from './SideNote'

export const Form = () => {
  return (
    <form className='w-[1000px] mx-auto h-[596px]'>
        <div className='flex mx-[58px] mt-[39px] items-center justify-center gap-5'>

       
        <div className='ml-[57px]'>
            <h1 className='mt-[39px] mb-[45px] font-heading font-semibold text-[32px] leading-[53px]'>Feel free to drop message for us</h1>
            <div className='ml-[px]'>
                <Input type='text' placeholder='Name' size customClasses='w-[528px] h-[60px] mb-[24px]' />
                
                <Input type='email' placeholder='Email' size customClasses='w-[528px] h-[60px] mb-[24px]'/>
                <Input type='text' placeholder='Subject' size customClasses='w-[528px] h-[60px] mb-[24px]' />
                <textarea></textarea>
            </div>
        </div>
        <aside className=' text-ofWhite w-[466px] h-[283px] mb-[38px] font-heading mr-[54px] flex flex-col justify-center items-center mt-[130px]'>
            <div className='bg-hPrimary w-[308px] h-[283px] rounded'>
                {/* <h1>Hello world</h1> */}
                {
                    contactData.map((data) => <SideNote key={data.id} {...data} />)
                    
                    
                }

            </div>
            <Button color='teal' btnName='Send' customClasses='w-[307px] h-[60px] mt-[46px]' />

           
        </aside>
         
         </div>
    </form>
  )
}
