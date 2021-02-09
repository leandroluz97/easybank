import React from "react"
import Question from "./Question/Question"
import "./Faq.css"
const Faq = () => {
  const faqData = [
    { id: 78, title: "What is EastBank?" },
    { id: 75, title: "Can I use EasyBank for free?" },
    { id: 74, title: "Can I have a live time acount?" },
    { id: 71, title: "Is EasyBank trusty?" },
    { id: 79, title: "Can I use EastBank with another bank?" },
  ]
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
          {faqData.map((item) => {
            return <Question key={item.id} title={item.title} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Faq
