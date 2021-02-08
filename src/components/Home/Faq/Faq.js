import React from "react"
import Question from "./Question/Question"
import "./Faq.css"
const Faq = () => {
  return (
    <section className='faq' id='faq'>
      <div className='faq__wrapper'>
        <div className='faq__container'>
          <h1 className='secundary-heading mb-small'>FAQ</h1>
          <p className='faq__copy mb-big'>
            get to know more about us. Here's a list of the popular question
            about our organization with their respective response. Still's more
            douth on us feel free to email us
          </p>
          <Question />
          <Question />
          <Question />
          <Question />
        </div>
      </div>
    </section>
  )
}
export default Faq
