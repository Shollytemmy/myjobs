import React from 'react'

import { TableCells } from './TableCells'
import { cellsData } from './tableData'

export const Table = () => {
  return (
     <>
        {cellsData.map((data) => {
          return <TableCells key={data.id} {...data} />
          
          
        })}
      </>
  )
}
