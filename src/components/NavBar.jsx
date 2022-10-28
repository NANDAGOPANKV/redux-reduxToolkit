import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'

export const NavBar = () => {

    const { setCount } = useSelector((state) => state.cart)

    return (
        <div className='max-w-[2400px] h-[85px] bg-slate-700  pt-4'>
            <div className='flex items-center justify-between  w-full  px-[40px] '>
                <h1 className='text-2xl font-bold cursor-default capitalize '>gopan's store</h1>
                <div className='flex flex-col items-center'>
                    <div>
                        <p>{setCount === 0 ? null : setCount}</p>
                    </div>
                    <div>
                        <BsFillCartFill size={45} />
                    </div>
                </div>
            </div>

        </div>
    )
}
