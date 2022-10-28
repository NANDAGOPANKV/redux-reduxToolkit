import React from 'react'
// api
import prosuctsapi from '../api/product.json'
import { AfterCartBtn } from './cartbutton/AfterCartBtn'
import { BeforeCartBtn } from './cartbutton/BeforeCartBtn'
//redux-toolkit
import { useSelector } from 'react-redux'

export const ProductList = () => {

    const { setCount } = useSelector((state) => state.cart)

    console.log(setCount);


    return (
        <>
            <div className='w-full h-ful' >
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 md:mt-[45px] '>
                    {
                        prosuctsapi.map((items, index) => {
                            return (
                                <div key={index} className='bg-slate-700 w-[300px] sm:w-[220px] h-[300px] mx-auto p-2 rounded shadow-md hover:shadow-2xl  hover:bg-slate-900 hover:scale-105 hover:rounded-xl  duration-700  '>
                                    <div className='w-full h-full flex flex-col '>
                                        <div className='mx-auto'>
                                            <img className='w-[181px] h-[170px] ' src={items?.image} alt={items?.title} />
                                        </div>
                                        <div className='mx-auto py-4 '>
                                            <p className=' '>{items?.title}</p>
                                        </div>
                                        <div className='mx-auto'>
                                            {/* Cart btn */}
                                            {setCount > 0 ? <AfterCartBtn /> : <BeforeCartBtn  />}
                                            {/* Cart btn */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
