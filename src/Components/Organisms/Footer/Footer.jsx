import React from 'react'

import {BsFacebook} from 'react-icons/bs'
import {FiTwitter, FiInstagram} from 'react-icons/fi'
import './footerStyle.css'
import { Image } from '../../Atoms/ImageComponent/Image'
import logo from '../../Atoms/Images/f-logo.svg'

import { Table } from '../../Molecules/Footer/Table'
const Footer = () => {

  
  return (
    <footer className="footer">
      <aside className='flex justify-between'>
      <div className='text-white mt-12'>
        <Image text={logo} />
    <p className='max-w-[45%] p-7'>
              <span className=' text__footer'>
                  My jobs provide 
                  real opportunities to
                  graduates and unemployed
                  individuals to search and acquire
                  Jobs in their career and areas
                  of interest
    </span>
  </p>
      </div>

      <Table />

     
      </aside>

       <hr className='border-slate-400'  />
       
      <aside className='bottom_aside__footer '>
        <p className='my-auto text-white text-[18px] leading-[20px] font-medium font-tableH text-[rgba(255, 255, 255, 0.5)]'> Copyright &copy; {new Date().getFullYear()}</p>
        <div className='social_icons'>
          <div className=' icons__footer'>
            <a href="https://www.facebook.com" target="_blank"><BsFacebook className=' ' style={{color: '#FFFFFF'}}/></a>
             
             </div>
          <div className=' icons__footer'>
            <a href="https://www.instagram.com" target="_blank"> <FiInstagram className='' style={{color: '#FFFFFF'}}/></a>
           
          </div>
          <div className=' icons__footer'>
            <a href="https://www.twitter.com" target="_blank"><FiTwitter   className='' style={{color: '#FFFFFF'}}/></a>
            
          </div>
       
        

        </div>
      </aside>  
    </footer>
  )
}

export default Footer