import { Sparkle, Sparkles } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-[url(/car2.png)] bg-no-repeat bg-top'>
      {/* container */}
      <div className='container absolute mx-auto px-6 bottom-10 z-10'>
        <div className='z-50 gap-4 md:centered-row lg:gap-80'>
          {/* left */}
          <div className='z-10 left'>
            <div className='col max-w-3xl mx-auto'>
              {/* sub head */}
              <div className='mb-4'>
                <div className='bg-zinc-300/20 text-zinc-50 rounded-full px-4 py-1 text-sm font-medium inline-flex items-center clash-display'>
                  <Sparkles /> Your Journey, Elevated
                </div>
              </div>

              {/* Main head */}
              <h1>
                <span>Premium</span> car, <br/> rental
              </h1>
            </div>
          </div>

          {/* right */}
          <div>
            <p>
              Unlock unparalleled freedom with our premium car rental service. <br/>
              Experience luxury, comfort, and seamless booking.
             </p>
          </div>

        </div>
      </div>

    </section>
  )
}

export default HeroSection