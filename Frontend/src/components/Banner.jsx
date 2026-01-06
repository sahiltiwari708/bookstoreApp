import React from 'react'
import banner from "./../../public/Banner.jpg"


function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx:auto md:px-20 px:4 flex flex-col md:flex-row '>
                <div className='w-full md:w-1/2 mt-32 '>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>Hello,Welcome here to learn something{" "} 
                            <span className='text-pink-500'>new Everyday!!</span>
                        </h1>
                            <p>Books are a powerful source of knowledge and inspiration.
                                They help us learn new ideas, explore different perspectives, and grow intellectually.
                                Reading improves focus, creativity, and critical thinking.
                                Every book carries a story that can shape our thoughts and future.
                            </p>
                            <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="Enter valid email address" required />

</label>

</div>
  <button className="btn btn-secondary mt-6 hover:bg-pink-600">Get Started</button>



<div className="validator-hint hidden">Enter valid email address</div>                </div>
                <div className='w-full md:w-1/2 '>
                    <img src={banner} alt="banner-image" />
                </div>


            </div>
        </>
    );
}

export default Banner