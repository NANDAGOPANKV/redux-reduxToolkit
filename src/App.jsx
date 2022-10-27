import React from 'react'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { ProductList } from './components/ProductList'

export const App = () => {
  return (
    <div className="max-w-[2400px] min-h-[569px] bg-slate-800 text-white ">
      {/* navbar */}
      <NavBar />
      {/* navbar */}
      {/* product-List */}
      <ProductList />
      {/* product-List */}
      <Footer />
    </div>
  )
}
