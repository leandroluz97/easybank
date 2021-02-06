import React from "react"
import About from "./About/About"
import Articles from "./Articles/Articles"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import HeroSection from "./HeroSection/HeroSection"

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Articles />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
