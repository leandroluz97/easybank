import React, { useState } from "react"
import "./Question.css"
import { IoIosArrowDropdownCircle } from "react-icons/io"
import { IconContext } from "react-icons"

const Question = () => {
  const [open, setopen] = useState(false)

  const handleOpen = () => setopen(!open)

  return (
    <IconContext.Provider
      value={
        open
          ? { className: "faq__icons faq__icons--open" }
          : { className: "faq__icons" }
      }
    >
      <div className='question'>
        <div className='question__box'>
          <div className='question__header'>
            <h5 className='question__title'>Can I use EmailJS for free?</h5>
            <div className='question__icon' onClick={handleOpen}>
              <IoIosArrowDropdownCircle />
            </div>
          </div>
        </div>
        <div
          className={
            open
              ? "question__content question__content--open "
              : "question__content"
          }
        >
          <p className='question__response'>
            You can send up to 200 emails per month completely for free. If you
            need to send more emails, want to use advanced features like file
            attachments or remove our footer from the emails – please take a
            look at our plans.
          </p>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Question
