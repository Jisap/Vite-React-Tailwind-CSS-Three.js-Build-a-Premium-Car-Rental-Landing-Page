import React, { useState } from 'react'
import BookNowButton from '../components/BookNowButton'
import { togglerBtns } from '../assets/assets'
import ModelViewer from '../components/ModelViewer'

const CTASection = () => {

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      {/* Section Togglers */}
      <div className='w-full h-[200px] bg-zinc-950 flex overflow-x-scroll lg:overflow-clip snap-x snap-mandatory'>
        {togglerBtns.map((item, index) => (
          <div 
            onClick={() => setActiveIndex(index)}
            key={index} 
            className={`min-w-full center-item md:min-w-1/2 lg:min-w-1/4 h-full cursor-pointer hover:bg-zinc-800 transition-all duration-300 ease-out py-10 px-8
            ${activeIndex === index ? "bg-zinc-200 text-zinc-700" : "bg-zinc-950" }`}
          >
            <div className='centered-row min-w-full gap-4 text-lg'>
              {item.icon}
              <p className='leading-5'>
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className='section-padding bg-gradient-to-b from-zinc-700/70 to-zinc-900 py-32 relative overflow-hidden'>
        <div className='absolute inset-0 bg-transparent overflow-hidden'>
          <div className='absolute hidden lg:block bg-transparent inset-0'>
            {/* 3d canvas component */}
            <ModelViewer />
          </div>

          {/* Decor: dide Overlays */}
          <div className='absolute h-full w-20 md:w-40 lg:w-80 lg:pointer-events-none bg-gradient-to-r from-zinc-950 to-transparent'></div>
          <div className='absolute right-0 h-full w-20 md:w-40 lg:w-80 lg:pointer-events-none bg-gradient-to-l from-zinc-950 to-transparent'></div>
        </div>

        {/* Text overlay */}
        <div className='max-w-7xl mx-auto relative z-10 flex justify-between pointer-events-none'>
          <div>
            <h2 className='heading-2 clash-display max-w-2xl pointer-events-none'>
              View Closely Your Perfect Ride in 3D.
            </h2>
            <p className='text-gray-300 max-w-md pointer-events-none mb-8'>
              Browse our expensive fleet in 3D, book with ease, and embark on your next unforgettable journey.
            </p>
            <BookNowButton type={2} />
          </div>

          {/* Discount banner */}
          <div className='hidden lg:block w-50 h-40 bg-blue-400/40 text-zinc-200 p-6 px-8'>
            <div className='col'>
              <p className='heading-2 clash-display font-semibold'>
                50%
              </p>
              <p className='text-xl leading-tight clash-display'>
                For everyone Brand cars
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTASection