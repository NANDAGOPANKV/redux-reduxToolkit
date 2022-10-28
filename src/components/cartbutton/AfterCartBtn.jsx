import React from 'react'

//redux-toolkit
import { useDispatch, useSelector } from 'react-redux'
//redux-toolkit-functions
import { decrement, increment, normal } from '../../redux/Cart'

export const AfterCartBtn = () => {
    const { setCount } = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    return (
        <div className='flex items-center justify-around '>
            {
                setCount === 1 ? <button className='mx-1 bg-rose-500 px-[9px] py-1 rounded ' onClick={() => dispatch(normal())} >X</button> : <button className='mx-1 bg-rose-500 px-3 py-1 rounded ' onClick={() => dispatch(decrement())} >-</button>

            }
            <div className='mx-1 cursor-default'  >{setCount}</div>
            <button className='mx-1 bg-rose-500 px-[9px] py-1 rounded ' onClick={() => dispatch(increment())} >+</button>
        </div>
    )
}
