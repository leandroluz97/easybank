import React from "react"
import Question from "./Question/Question"
import "./Faq.css"
const Faq = () => {
  return (
    <section className='faq'>
      <div className='faq__wrapper'>
        <div className='faq__container'>
          <Question />
        </div>
      </div>
    </section>
  )
}
export default Faq
