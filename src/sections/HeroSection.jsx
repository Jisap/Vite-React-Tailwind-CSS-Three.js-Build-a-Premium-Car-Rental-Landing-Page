import { Sparkle, Sparkles } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section>
      <div>
        <div>
          {/* left */}
          <div>
            <div>
              {/* sub head */}
              <div>
                <div>
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