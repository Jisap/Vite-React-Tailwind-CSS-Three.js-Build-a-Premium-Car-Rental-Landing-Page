import { Gauge, Menu, User, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"


const Navbar = () => {

  const [isScrolled, setISsCrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setISsCrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Fleet",
      path: "/fleet",
    },
    {
      name: "About Us",
      path: "/about",
    },
  ];



  return (
    <header className={`fixed cursor-pointer top-3.5 left-1/2 -translate-x-1/2 z-90 transition-all duration-300 rounded-full h-14 ${
      isScrolled 
        ? "bg-zinc-900/50 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-3xl" 
        : "bg-zinc-200 w-[95%] max-w-4xl"
    }`}>
      <div className="mx-auto h-full px-6">
        <nav className="centered-row justify-between h-full">
          {/* logo */}
          <NavLink to="/" className="flx items-center">
            <div className="h-auto relative centered-row gap-2">
              <Gauge className={`size-8 ${
                isScrolled
                  ? "text-zinc-100"
                  : "text-zinc-700/60"
              }`} />
              <p className={`tracking-tighter cursor-pointer text-xl clash-display font-medium ${
                isScrolled
                  ? "text-zinc-200"
                  : "text-zinc-700"
              }`}>
                DriveWell <sup className="text-xs ml-1">TM</sup>
              </p>
            </div>
          </NavLink>

          {/* desktop navigation */}
          <div className="hidden md:centered-row gap-6">
            {
              navLinks.map((item, index) => (
                <a 
                  key={index} 
                  href={item.path} 
                  className={`text-sm md:text-lg hover:font-semibold hover:-translate-y-1 ease-out transition-all duration-300 ${
                    isScrolled
                      ? "text-white hover:text-yellow-300"
                      : "text-zinc-800"
                  }`}
                >
                  {item.name}
                </a>
              ))
            }
          </div>

          {/* button & user icon*/}
          <div className="md:centered-row gap-2 hidden">
            <Link to="/rent">
              <button className="clash-display text-base bg-gradient-to-r from-zinc-950 to-zinc-950 px-4 py-2 rounded-full cursor-pointer hover:-translate-y-0.5 duration-200 transition-all ease-out">
                Rent Today
              </button>
            </Link>

            <div className="size-10 bg-zinc-800 rounded-full center-item cursor-pointer">
              <User />
            </div>
          </div>

          {/* mobile nav icon */}
          <div className="md:hidden p-1 rounded-md">
            <button 
              className="md:hidden text-white hover:text-zinc-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}  
            >
              { isOpen ? <X size={34} /> : <Menu size={40} className="text-zinc-400 mt-2"/> }
              
            </button>
          </div>

          {/* mobile nav menu */}
          <div>

          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar