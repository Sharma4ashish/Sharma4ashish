import React from 'react'

const CarouselItem = ({image,title}) => {
    return (
    <div className='flex flex-col justify-center items-center p-4  lg:p-1'>
      <img className=' w-[7rem] h-[7rem] md:h-[10rem] md:w-[10rem] lg:h-[15rem] lg:w-[15rem] rounded-full object-cover object-center' src={image}></img>
      <span className='py-5 font-semibold text-xl text-gray-400'>{title}</span>
    </div>
    )
}

export {CarouselItem}


