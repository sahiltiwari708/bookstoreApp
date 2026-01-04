import React from 'react'
import list from "./../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4'>
      <div className='mt-28 items-center justify-center text-center mb-20 '>
        <h1 className='text-2xl font-semibold md:4xl'>We're delighted to have you <span className='text-pink-600'>here</span></h1>
        <p className='mt-10'>Books are a powerful source of knowledge and inspiration.
                                They help us learn new ideas, explore different perspectives, and grow intellectually.
                                Reading improves focus, creativity, and critical thinking.
                                Every book carries a story that can shape our thoughts and future.
        </p>
       <Link to="/">
        <button className='mt-8 bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
          Back
        </button>
       </ Link>  
      </div>
      <div className='mt-12 grid grid-cols-4'>
        {list.map((item)=>{
          return <Cards key={item.id} item={item} />
        })}
      </div>

    </div>
    </>
  )
}

export default Course