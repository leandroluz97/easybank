import React from "react"
import "./Contact.css"

const Contact = () => {
  return (
    <section className='contact'>
      <div className='contact__container'>
        <div className='contact__header'>
          <h2 className='secundary-heading mb-big'>Contact us</h2>
        </div>
        <div className='contact__content'>
          <form action='' className='form'>
            <div className='form__group'>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' id='name' />
            </div>
            <div className='form__group'>
              <label htmlFor='name'>Email</label>
              <input type='email' name='email' id='email' />
            </div>
            <div className='form__group'>
              <label htmlFor=''>Message</label>
              <textarea name='sms' id='sms' cols='30' rows='5'></textarea>
            </div>
            <div className='form__group'>
              <button className='form__btn'>Submit</button>
            </div>
          </form>
          <div className='contact__imgs'>
            <img
              src='img/design_gradient_header.svg'
              className='contact__img contact__img--2'
              alt='vectors'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
