import React from 'react'

 const Input = ({type, placeholder, customClasses, size}) => {

  const DEFAULT = "px-3 py-1.5 border border-solid border-gray-300 rounded "
  

  return (
    <input type={type} name="" id="" placeholder={placeholder} className={` ${ size ? customClasses : 'input' } ${DEFAULT}`} />
  
  )
}

export default Input