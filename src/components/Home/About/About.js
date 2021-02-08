import React from "react"
import "./About.css"
import AboutItem from "./AboutItem/AboutItem"
import { aboutData } from "./AboutData.js"
const About = () => {
  return (
    <section className='about' id='about'>
      <div className='row'>
        <div className='about__header mb-big '>
          <h2 className='about__title mb-small secundary-heading'>
            Why choose Easybank?
          </h2>
          <p className='about_copy'>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <div className='container'>
          {aboutData.map((item) => (
            <AboutItem
              key={item.id}
              img={item.img}
              title={item.title}
              copy={item.copy}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
