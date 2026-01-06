import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from "axios"



function login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) => {
    const userInfo={
           
            email:data.email,
            password:data.password
    
          }
          await axios.post("http://localhost:4001/user/login",userInfo)
          .then((res)=>{
            console.log(res.data)
            if(res.data){
              alert("Login Successfully");
              document.getElementById("my_modal_3").close();

              setTimeout(() => {
              window.location.reload();
              localStorage.setItem("Users",JSON.stringify(res.data.user));

 
              }, 3000);
            }
          }).catch((err)=>{
            if(err.response){
              console.log(err);
              alert("Error:"+err.response.data.message);
              setTimeout(() => {
                
              }, 3000);
            }
          });
  }
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/signup" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=>document.getElementById("my_modal_3").close()}
>✕</Link>
    <h3 className="font-bold text-lg">Login</h3>
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
        <button className="bg-pink-500 text-white  rounded-md py-2 px-3 hover:bg-pink-700">Login</button>
        <p>Not registered?{" "} <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Sign Up</Link>{" "}</p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default login