import React, { useState } from 'react'
import BookNowButton from '../components/BookNowButton'
import { togglerBtns } from '../assets/assets'

const CTASection = () => {

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      {/* Section Togglers */}
      <div className='w-full h-[200px] bg-zinc-950 flex overflow-x-scroll lg:overflow-clip snap-x snap-mandatory'>
        {togglerBtns.map((item, index) => (
          <div 
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
      <section>
        <div>
          <div>

          </div>
          <div></div>
          <div></div>
        </div>

        {/* Text overlay */}
        <div>
          <div>
            <h2>
              View Closely Your Perfect Ride in 3D.
            </h2>
            <p>
              Browse our expensive fleet in 3D, book with ease, and embark on your next unforgettable journey.
            </p>
            <BookNowButton type={2} />
          </div>

          <div>
            <div>
              <p>
                50%
              </p>
              <p>
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