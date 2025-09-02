import React from 'react'
import BookNowButton from '../components/BookNowButton'

const CTASection = () => {
  return (
    <>
      {/* Section Togglers */}
      <div>
        <div>

        </div>
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