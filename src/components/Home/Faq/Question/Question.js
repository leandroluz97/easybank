import React from "react"
import "./Question.css"
const Question = () => {
  return (
    <div className='question'>
      <div className='question__box'>
        <h5 className='question__title'>Can I use EmailJS for free?</h5>
      </div>
      <div className='question__content'>
        <p className='question__response'>
          You can send up to 200 emails per month completely for free. If you
          need to send more emails, want to use advanced features like file
          attachments or remove our footer from the emails – please take a look
          at our plans.
        </p>
      </div>
    </div>
  )
}

export default Question
