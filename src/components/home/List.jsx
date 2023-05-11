import React from 'react'

export default function List(props) {
  const { order, title } = props
  return (
    <div className='grid grid-cols-[1.5rem_1fr] grid-rows-2 gap-y-2 '>
              <div className=' row-start-1 row-end-2 col-start-1 text-xs'>{order}</div>
              <div className='row-start-1 row-end-3 col-start-2 text-base capitalize'>{title}</div>
            </div>
  )
}
