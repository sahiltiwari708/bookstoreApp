import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="relative min-h-screen  px-6 py-8">
      <div className="text-center flex justify-center text-pink-500 text-2xl font-semibold">About Us</div>
      
      {/* Home Button */}
      <Link to="/" className="absolute top-4 right-4">
        <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition">
          Home
        </button>
      </Link>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            About Our <span className="text-pink-600">Book Store</span>
          </h1>

          <p className="text-white leading-relaxed mb-4">
            Our bookstore is a haven for readers who love exploring stories,
            ideas, and knowledge. We carefully curate books that inspire,
            educate, and entertain readers of all ages.
          </p>

          <p className="text-white leading-relaxed">
            From timeless classics to modern bestsellers, we aim to create
            a warm and welcoming space where every book tells a story.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/Banner.jpg"
            alt="Book Store"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default About;
