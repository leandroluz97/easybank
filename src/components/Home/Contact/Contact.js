import React, { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userSms, setUserSms] = useState("")
  const [error, setError] = useState("")

  const handleUserName = (e) => {
    setUserName(e.target.value)
    console.log(userName.length < 4)
    if (userName.length > 0 && userName.length < 4) {
      setError("INVALID NAME! Your Name must have more than 3 characters.")
    } else {
      setError("")
    }
  }
  const handleUserEmail = (e) => {
    setUserEmail(e.target.value)
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userEmail)) {
      setError("")
    } else {
      setError("INVALID EMAIL! Please enter a valid email.")
    }
  }
  const handleUserSms = (e) => {}
  return (
    <section className='contact'>
      <div className='contact__container'>
        <div className='contact__header'>
          <h2 className='secundary-heading mb-big'>Contact us</h2>
        </div>
        <div className='contact__content'>
          <form action='' className='form'>
            <div className='error'>{error}</div>
            <div className='form__group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                onChange={handleUserName}
              />
            </div>
            <div className='form__group'>
              <label htmlFor='name'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                onChange={handleUserEmail}
              />
            </div>
            <div className='form__group'>
              <label htmlFor=''>Message</label>
              <textarea name='sms' id='sms' cols='30' rows='5'></textarea>
            </div>
            <div className='form__group'>
              <button className='form__btn' disabled>
                Submit
              </button>
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
