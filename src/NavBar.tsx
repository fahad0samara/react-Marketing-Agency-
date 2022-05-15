;
import { useState } from "react";
;
import img from "./img/1.png";
import Toggle from "./Toggle/Toggle";
import './App.css'

import { useContext } from "react";
import { themeContext } from "./Context";


export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    



  return (
    <section className="section text-white"

      
       
      >
       
        <div className={'px-4 py-5 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'}>
          <div className="relative flex items-center justify-between">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide  uppercase">
                Company
            </span>
           
          </a>
         
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <a
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  About us
                </a>
              </li>
            </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <span>  <Toggle  /></span>
              <li>
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign up
                </a>
              </li>
            </ul>
          <div className="lg:hidden ">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1  transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 " viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
              <div className="absolute text-white top-0 section left-0 w-full">
                  <div className="p-5  border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center"
                        >
                          <svg
                            className="w-8 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                          >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                          </svg>
                          <span className="ml-2 text-xl font-bold tracking-wide  uppercase">
                            Company
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 " viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4  ">
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Product
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Features
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="About us"
                            title="About us"
                            className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            About us
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign up
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
            )}
          
          </div>
         
          </div>
      </div>
     
        <div className="container px-4 mx-auto pt-12">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <span className="font-semibold text-xs text-blue-400">
           
              </span>
              <h2 className="mt-8 mb-6 lg:mb-12 text-4xl lg:text-5xl font-black">
              We are The Brilliants In Terms     Of Digital Marketing
              </h2>
              <div className="max-w-lg mb-6 lg:mb-12">
                <p className="text-4xl font-bold ">
                Book your 30-minute free strategy call
                </p>
              </div>
              <div className="flex flex-wrap">
                <a
                  className="inline-block  rounded-3xl drop-shadow-2xl px-6 py-4 mb-3 mr-4  text-4xl  leading-normal bg-white hover:bg-red-300  transition duration-200 text-black font-black"
                  href="#"
                >
                Book Now
                </a>
                
              </div>
            </div>
            <div className="relative w-full md:w-1/2 px-4">
            <div className="hidden lg:block lg:absolute top-0 right-0 z-10 lg:mt-28">

              <svg xmlns="http://www.w3.org/2000/svg" width="236" height="102" viewBox="0 0 236 102" fill="none">
                <path d="M0 71.7453C22 61.8295 67 37.7341 71 20.679C76 -0.639951 39.5 -10.06 35 20.679C31.6233 43.7446 35 101.493 83 100.997C131 100.501 180.833 68.7705 208 59.3505" stroke="#DADFE9" stroke-dasharray="4 4" />
                <circle cx="208" cy="57" r="28" fill="#45C1FF" />
                <path d="M203.371 55.2017V62.0618" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M208.038 51.9191V62.0618" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M212.629 58.8268V62.0618" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M212.686 47H203.314C200.048 47 198 49.3121 198 52.5852V61.4148C198 64.6879 200.038 67 203.314 67H212.686C215.962 67 218 64.6879 218 61.4148V52.5852C218 49.3121 215.962 47 212.686 47Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
               
               
                
        
              <img
                className="relative"
                          src={ img}
                alt=""
              />
              <img
                className="hidden lg:block lg:absolute bottom-0 lg:left-0 lg:ml-6 lg:mb-20"
                src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
                alt=""
            />
           
            </div>
          </div>
        </div>
        
      </section>
  );
 }
