import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import FreeBooks from '../components/FreeBooks.jsx'

export const Home = (props) => {
  return (
    <>
     <Navbar />
      <Banner />
      <FreeBooks />

      <Footer />
    </>
  )
}

export default Home