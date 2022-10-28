import React from 'react'
// redux-toolkti
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Cart'

export const BeforeCartBtn = () => {

    const dispatch = useDispatch()

    return (
        <div className='w-full '>
            <button className='px-2 py-2 rounded-md bg-rose-500  ' onClick={() => dispatch(addToCart())}  >Add to cart</button>
        </div>
    )
}
