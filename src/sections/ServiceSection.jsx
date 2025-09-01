import { MoveRight } from "lucide-react"
import { Link } from "react-router-dom"


const ServiceSection = () => {
  return (
    <section className="h-screen">
      <div>
        {/* Heading */}
        <div>
          <div>
            <h2>
              Our Premiun Fleet & <br/> Services
            </h2>
            <p>
              Discover the perfect vehicle for your needs, backed by unparalleled service and support.
            </p>
          </div>

          <Link to="/fleet">
              View All Cars <MoveRight />
          </Link>
        </div>

        {/* Service Cards */}
        <div>
          
        </div>

      </div>
    </section>
  )
}

export default ServiceSection