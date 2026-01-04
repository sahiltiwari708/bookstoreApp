import React from 'react'
import { Link } from 'react-router-dom';
import Login from './login.jsx';
import { useForm } from "react-hook-form"

function Signup() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
        <div id="my_modal_3" className="border-[2px] shadow-md p-5 rounded-lg">
  <div className="">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <div className='top-40 right-80'>
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link></div>
    <h3 className="font-bold text-lg">Signup Form</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input type="text" 
        placeholder="Enter your name" 
        className="py-1 w-80 px-3 border rounded-md outline-none"
        {...register("name", { required: true })}
        />
        <br/>
         {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Email */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input 
        type="email" 
        placeholder="Enter your email" 
        className="py-1 w-80 px-3 border rounded-md outline-none"
        {...register("email", { required: true })}/>
        <br/>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Password */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input 
        type="password" 
        placeholder="Enter your password" 
        className="py-1 w-80 px-3 border rounded-md outline-none"
        {...register("password", { required: true })}/>
        <br/>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}

    </div>
    {/* Login button */}
    <div className='mt-4 flex justify-around'>
       <button className="bg-pink-500 text-white  rounded-md py-2 px-3 hover:bg-pink-700">Signup</button>
        <p>Have Account?{" "} <button className='underline text-blue-500 cursor-pointer'
        onClick={()=>
            document.getElementById("my_modal_3").showModal()

        }
        >
          <Link to="/">
            Login
            </Link>
            </button>{" "}
        
        </p>
        
    </div>
    </form>
  </div>

    </div>
    </div>
    </>
  )
}

export default Signup