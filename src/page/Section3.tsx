import React from 'react'

const Section3 = () => {
  return (
      <div>
          
          <section className="py-20">
              <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                   className="container px-4 mx-auto">
                  <h2 className={'mb-8 md:mb-16 text-5xl lg:text-6xl font-semibold font-heading'}>Do you have any project?</h2>
                  <div className="flex flex-wrap items-center"
               
                  
                  >
                      <div
                          data-aos="fade-right"
                          className={'inline-block max-w-xl mb-6 md:mb-0'}>
                          <p className="text-xl ">Drop us a line, and we'll get in touch.</p>
                          <p className="text-xl ">We'll see if we're a match and how we can help each other.</p>
                      </div>
                      <a
                         
 
                          className={'inline-block ml-auto w-full md:w-auto px-12 py-4 text-center text-sm text-white font-medium leading-normal bg-[#cd114e] hover:bg-red-300 rounded'} href="#">Sign up</a>
                  </div>
              </div>
          </section>


    </div>
  );
}

export default Section3