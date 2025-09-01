import { MoveRight } from "lucide-react"
import { Link } from "react-router-dom"
import ServiceCard from "../components/ServiceCard"


import {featuredServices} from "../assets/assets"

const ServiceSection = () => {
  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h2 className="heading-2 clash-display grad1 from-zinc-50">
              Our Premiun Fleet & <br/> Services
            </h2>
            <p className="text-zinc-400 max-w-lg">
              Discover the perfect vehicle for your needs, backed by unparalleled service and support.
            </p>
          </div>

          <Link to="/fleet" className="mt-4 sm:mt-0 flex items-center text-sky-500 hover:text-sky-400 transition-colors">
              View All Cars <MoveRight className="ml-1 size-4"/>
          </Link>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-16">
          {featuredServices.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
              imageSrc={service.imageSrc} 
            />
          ))}           
        </div>

      </div>
    </section>
  )
}

export default ServiceSection