import React, { useState, useEffect } from "react";
import Login from "./login.jsx";
import Logout from "./Logout.jsx";
import { useAuth } from "../context/AuthProvider.jsx";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();

  /* ---------------- THEME LOGIC ---------------- */
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  /* ---------------- STICKY NAVBAR ---------------- */
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- NAV ITEMS ---------------- */
  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/Course">Course</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/About">About</a></li>
    </>
  );

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 max-w-screen-2xl container mx-auto md:px-20 px-4
        ${sticky ? "shadow-md bg-base-200 dark:bg-slate-800 transition-all duration-300" : ""}
        dark:bg-slate-900 dark:text-white`}
      >
        <div className="navbar bg-base-100 dark:bg-slate-900">

          {/* LEFT */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 dark:bg-slate-800 rounded-box mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>

            <a className="text-2xl font-bold cursor-pointer">BookStore</a>
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end space-x-3">

            <input
              type="text"
              placeholder="Search"
              className="input input-bordered hidden md:block"
            />

            {/* 🌙 THEME TOGGLE */}
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={() =>
                  setTheme(theme === "light" ? "dark" : "light")
                }
              />

              {/* Sun */}
              <svg
                className="swap-off h-8 w-8 fill-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M12 4.5V2m0 20v-2.5M4.5 12H2m20 0h-2.5M6.34 6.34l-1.77-1.77m14.86 14.86l-1.77-1.77M6.34 17.66l-1.77 1.77m14.86-14.86l-1.77 1.77M12 7a5 5 0 100 10 5 5 0 000-10z"/>
              </svg>

              {/* Moon */}
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
              </svg>
            </label>

            {/* AUTH */}
            {authUser ? (
              <Logout />
            ) : (
              <>
                <button
                  className="text-white p-2 hover:bg-blue-500 border-rounded-md" 
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
