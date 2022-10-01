import React from 'react'
import Input from '../Atoms/Input'
import Button from '../Atoms/Buttons'
import { options } from '../../data/selectData'
import { Text } from '../Atoms/Text'

const InputsWithButton = () => {
  
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec"

  return (
    <aside className=" mt-[192px] flex flex-col justify-between ">
          <div className='flex justify-center'>
           
            <Input type='text' placeholder='Company' />
           

            <select className="form-select form-select-lg">
        {options.map((option, idx) => <option key={idx} value={option}>{option}</option>)}
    </select>
          </div>
          <div className='mb-[60px]'>
            <Input
             type='Search' 
             placeholder='Search the web'
             size
             customClasses="form-control search"
              />
          </div>
          
          <div className='lorem'>
            <Text sentences={lorem} />
           
          </div>
          <div>
            <Button btnName='Sign in' customClasses="signIn_btn" color="teal" onClick={()=> handleClick("Clicked SignIn")} />
          </div>
        </aside>
  )
}

export default InputsWithButton