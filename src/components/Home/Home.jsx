import React from 'react'
import './Home.css'
import MultiItemCarousel from '../MultiIItemCrousel/MultiItemCarousel'
import RestaurantCard from '../Restaurants/RestaurantCard'

export const Home = () => {
  return (
    <div className=''>
        <section className='banner -z-50 relative flex flex-col justify-center items-center  '>
            <div className='w-[50vw] z-10 text-center'>
                <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>Cafe Tea</p>
                <p className='text-gray-300 text-xl z-10 Lg:text-4xl'>Taste the Convenience : Food, Fast And Delivered.</p>
            </div>
            <div className='cover bg-purple-300 absolute top-0 left-0 right-0  '>

            </div>
            <div className='fade-out'>

            </div>
        </section>  
        <section className=' p-2 lg:py-10 lg:px-20 '>
          <p className='text-2xl font-semibold text-gray-400 py-3 '>Top Meals</p>
          <MultiItemCarousel/>
        </section>
        <section className=' py-2 '>
          <h1 className=' font-semibold text-2xl text-gray-400 py-1  '>'
          Order From Our Handpicked Favorites</h1>
          <div className=' '>
            <RestaurantCard/>

          </div>
        </section>
    </div>
  )
}
