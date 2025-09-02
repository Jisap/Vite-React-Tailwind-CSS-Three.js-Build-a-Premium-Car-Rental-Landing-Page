
import BookNowButton from "./BookNowButton"


const CarCard = ({imageSrc, name}) => {
  return (
    <div 
      className="h-[400px] lg:h-[380px] rounded cursor-pointer flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 ease-in-out" 
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}  
    >
      {/* text */}
      <div className="bg-gradient-to-b w-full from-zinc-950 to-transparent p-7">
        <h2 className="text-3xl clash-display">
          { name }
        </h2>
      </div>

      {/* Btns */}
      <div className="bottom-0 bg-gradient-to-t w-full from-zinc-950 to-transparent p-7 centered-row justify-between">
        {/* Price per day */}
        <p className="text-lg clash-display">
          $150/day
        </p>

        {/* Book Button */}
        <BookNowButton />
      </div>
    </div>
  )
}

export default CarCard