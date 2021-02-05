import React from "react"
import "./AboutItem.css"

const AboutItem = ({ img, title, copy }) => {
  return (
    <div className=' about__card col-4-of-1'>
      <img src={img} alt='icon' className='mb-small' />
      <h3 className='about__card-title mb-small'>{title}</h3>
      <p className='about__card-copy '>{copy}</p>
    </div>
  )
}

export default AboutItem
