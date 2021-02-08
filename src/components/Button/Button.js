import React from "react"
import "./Button.css"
const Button = (props) => {
  return (
    <a href='#contact' className='btn'>
      {props.children}
    </a>
  )
}

export default Button
