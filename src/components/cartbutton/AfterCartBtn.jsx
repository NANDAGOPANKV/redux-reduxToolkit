import React from 'react'

export const AfterCartBtn = () => {
    return (
        <div className='flex items-center justify-around '>
            <button className='mx-1'  >-</button>
            <div className='mx-1 cursor-default'  >1</div>
            <button className='mx-1'  >+</button>
        </div>
    )
}
