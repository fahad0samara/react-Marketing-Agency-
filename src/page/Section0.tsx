import React from 'react'
import img from "../img/1.png";
const Section0 = () => {
  return (
      <div>
          
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
                          src={img}
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


    </div>
  )
}

export default Section0