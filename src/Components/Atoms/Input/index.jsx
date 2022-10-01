import React from 'react'

 const Input = ({type, placeholder, customClasses, size}) => {
  

  return (
    <input type={type} name="" id="" placeholder={placeholder} className={` ${ size ? customClasses : 'input' }`} />
  
  )
}

export default Input