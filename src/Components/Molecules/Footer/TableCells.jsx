import React from 'react'
import { Link } from 'react-router-dom'

export const TableCells = ({head, cell1, cell2, cell3, cell4, cell5}) => {
  return (
    <table className='Foot_table'>
      <thead className='header'>
            <tr>
              <td>{head}</td>
            </tr>
          </thead>
          <tbody className='tbody' >
             <tr>
              <td><Link to='/'>{cell1}</Link></td>
  
             </tr>
             <tr>
              <td><Link to='/'>{cell2}</Link></td>
             </tr>
             <tr>
              <td><Link to='/'>{cell3}</Link></td>
             </tr>
             <tr>
              <td><Link to='/'>{cell4}</Link></td>
             </tr>
             <tr>
              <td><Link to='/'>{cell5}</Link></td>
             </tr>
          </tbody>
    </table>
  )
}

