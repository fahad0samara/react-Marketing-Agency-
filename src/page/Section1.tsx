import React from 'react'
import { UilFileSearchAlt } from '@iconscout/react-unicons'
import { UilEnvelopeUpload } from '@iconscout/react-unicons'
import { UilChartLine } from '@iconscout/react-unicons'
const Section1 = () => {
  return (
      <div>
          <div>

              <section>
                  <div className="container px-5 py-24 mx-auto lg:px-16">
                      <div className="flex flex-col w-full mb-8 text-center space-x-2">
                          <span className="mb-4 text-xl  font-black uppercase">
                              Trusted by over <span className="text-[#cd114e]">13,041+</span> happy customers, including
                              <a href="" className="font-semibold ml-1 text-[#cd114e] lg:mb-0 hover:text-blue-500">Our customers »</a>
                          </span>
                      </div>
                      <div className="mx-auto text-center">
                          <div className="grid grid-cols-5 gap-4 mx-auto lg:grid-cols-5">
                              <div>
                                  <img className="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/5a364f2e7cfeadd0f603cdfeda83f5cd0509770d/3f0ae/images/logos/logoone.svg" alt="Figma"/>
                              </div>
                              <div>
                                  <img className="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/ab0d1eeefb9cddb55f05f1601b2ae3fbae9317a9/5bfbe/images/logos/logotwo.svg" alt="Framer"/>
                              </div>
                              <div>
                                  <img className="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/2fea2d550675d7cf3bb77a515487bce6c086051b/951f5/images/logos/logothree.svg" alt="Sketch "/>
                              </div>
                              <div>
                                  <img className="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/f9b8da8b1442382848d30275dc2d0337d14a04c9/dc8f4/images/logos/logofour.svg" alt="Sketch "/>
                              </div>
                              <div>
                                  <img className="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/07ddf740e29509004147c6a83c09f299366546c9/03a26/images/logos/logofive.svg" alt="Invision"/>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

          </div>
          <div className="text-center  space-x-2 space-y-3">
              <h1 className='text-[#cd114e] text-4xl font-medium'>Services</h1>
              <h2 className=' font-black text-5xl'>What we offer</h2>
              <h3 className=' font-semibold'>Quis ipsum gravida. Accumsan lacus vel facilisis dolore magna aliqua lacus dolor sit
                  <br /> 
                  amet, consectetur adipiscing elitd do.</h3>

          </div>
          <section className="relative py-20 2xl:py-40  overflow-hidden">
              <div className="absolute h-40 w-40 bg-blue-500 bottom-0 right-0 -mr-20 -mb-20 rounded-full"></div>
              <div className="container px-4 mx-auto">
                  <div>
                      <div className="flex flex-wrap -mx-6 lg:-mx-8">
                          <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-8 mb-20 lg:mb-0">
                              <span className="flex mb-10 justify-center items-center w-20 h-20 bg-blue-500 rounded-lg">
                                  <UilFileSearchAlt color="white" size="40" />
                              </span>
                              <div className="pb-px mb-12 bg-gray-500"></div>
                              <h3 className="mt-12 mb-8 text-lg font-bold font-heading ">Seo Marketing</h3>
                              <p className="text-lg ">The brown me quam, sagittis porttitor lorem vel, commodo fringilla nisl.</p>
                          </div>
                          <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-8 mb-20 lg:mb-0">
                              <span className="flex mb-10 justify-center items-center w-20 h-20 bg-violet-500 rounded-lg">
                                  <UilEnvelopeUpload color="white" size="40" />
                              </span>
                              <div className="pb-px mb-12 bg-gray-500"></div>
                              <h3 className="mt-12 mb-8 text-lg font-bold font-heading ">Email Marketing</h3>
                              <p className="text-lg ">It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.</p>
                          </div>
                          <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-8 mb-10 lg:mb-0">
                              <span className="flex mb-10 justify-center items-center w-20 h-20 bg-green-500 rounded-lg">
                                  <UilChartLine color="white" size="40" />
                              </span>
                              <div className="pb-px mb-12 bg-gray-500"></div>
                              <h3 className="mt-12 mb-8 text-lg font-bold font-heading ">Growth Hacking</h3>
                              <p className="text-lg ">The time, this accumsan augue, posuere posuere elit lorem.</p>
                          </div>
                          <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-8">
                              <span className="flex mb-10 justify-center items-center w-20 h-20 bg-pink-500 rounded-lg">
                                  <svg className="w-8 h-8" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0618 13.1249C24.0618 12.8935 23.952 12.6758 23.766 12.5384C23.5797 12.4009 23.3394 12.3599 23.1183 12.428L14.3682 15.1203C14.0623 15.2144 13.8535 15.4972 13.8535 15.8173V21.536C13.4245 21.2878 12.9264 21.1457 12.3952 21.1457C10.7844 21.1457 9.47852 22.4515 9.47852 24.0624C9.47852 25.6733 10.7844 26.9791 12.3952 26.9791C14.0044 26.9791 15.3092 25.6758 15.3118 24.0671V24.0624V16.3557L22.6035 14.1122V20.0777C22.1745 19.8294 21.6765 19.6874 21.1452 19.6874C19.5343 19.6874 18.2285 20.9932 18.2285 22.6041C18.2285 24.2149 19.5343 25.5207 21.1452 25.5207C22.7545 25.5207 24.0592 24.2174 24.0618 22.6087V22.6041V13.1249ZM22.6035 22.6041C22.6035 21.7986 21.9506 21.1457 21.1452 21.1457C20.3397 21.1457 19.6868 21.7986 19.6868 22.6041C19.6868 23.4095 20.3397 24.0624 21.1452 24.0624C21.9506 24.0624 22.6035 23.4095 22.6035 22.6041ZM12.3952 22.6041C11.5898 22.6041 10.9368 23.257 10.9368 24.0624C10.9368 24.8678 11.5898 25.5207 12.3952 25.5207C13.2006 25.5207 13.8535 24.8678 13.8535 24.0624C13.8535 23.257 13.2006 22.6041 12.3952 22.6041Z" fill="white"></path>
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.208 3.64577C8.19447 3.64577 6.56217 5.27807 6.56217 7.2916V8.0937C4.89804 8.43149 3.64551 9.90278 3.64551 11.6666V27.7083C3.64551 29.7218 5.27781 31.3541 7.29134 31.3541H27.708C29.7215 31.3541 31.3538 29.7218 31.3538 27.7083V11.6666C31.3538 9.90278 30.1013 8.43149 28.4372 8.0937V7.2916C28.4372 5.27807 26.8049 3.64577 24.7913 3.64577H10.208ZM26.9788 8.02077V7.2916C26.9788 6.08347 25.9994 5.1041 24.7913 5.1041H10.208C8.99988 5.1041 8.02051 6.08347 8.02051 7.2916V8.02077H26.9788ZM7.29134 9.4791C6.08321 9.4791 5.10384 10.4585 5.10384 11.6666V27.7083C5.10384 28.9163 6.08321 29.8958 7.29134 29.8958H27.708C28.9161 29.8958 29.8955 28.9163 29.8955 27.7083V11.6666C29.8955 10.4585 28.9161 9.4791 27.708 9.4791H7.29134Z" fill="white"></path>
                                  </svg>
                              </span>
                              <div className="pb-px mb-12 bg-gray-500"></div>
                              <h3 className="mt-12 mb-8 text-lg font-bold font-heading ">Google PPC</h3>
                              <p className="text-lg ">Again and again vehicula libero at nibh volutpat lacinia non sed you see.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    </div>
  )
}

export default Section1