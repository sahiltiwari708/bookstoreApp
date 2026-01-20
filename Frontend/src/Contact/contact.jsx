import React from 'react'
import { Link } from 'react-router-dom';
function contact() {
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <form className='border-[2px] shadow-md p-5 rounded-lg '>
        <div className='top-40 right-80 absolute'>
    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-16 top-4">✕</Link></div>

        <h1 className='text-2xl font-bold '>Contact Us</h1>
    {/* Name */}
        <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input type="text" 
        placeholder="Enter your name" 
        className="py-1 w-80 px-3 border rounded-md outline-none"/>
    </div>
    {/* Email */}
     <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type="text" 
        placeholder="Enter your email" 
        className="py-1 w-80 px-3 border rounded-md outline-none"/>
    </div>
    {/* Message */}
        <div className='mt-4 space-y-2'>
        <span>Message</span>
        <br/>
        <textarea

            placeholder="Enter your message"            
            className="py-1 w-80 px-3 border rounded-md outline-none"
        ></textarea>
    </div>
    {/* Submit button */}
    <div className='mt-4'>
        <button className="bg-pink-500 text-white  rounded-md py-2 px-3 hover:bg-pink-700">Submit</button>
    </div>
    </form>
    </div>
    </>
  )
}

export default contact