import React, { useState, useEffect } from "react"
import emailjs from "emailjs-com"
import "./Contact.css"

const Contact = () => {
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userSms, setUserSms] = useState("")
  const [error, setError] = useState("")
  const [btn, setBtn] = useState(true)

  useEffect(() => {
    if (userName.length > 0 && userName.length < 4) {
      setError("INVALID NAME! Your Name must have more than 3 characters.")
    } else {
      setError("")
    }
  }, [userName])

  useEffect(() => {
    if (
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userEmail) ||
      userEmail.length === 0
    ) {
      setError("")
    } else {
      setError("INVALID EMAIL! Please enter a valid email.")
    }
  }, [userEmail])

  useEffect(() => {
    if (userSms.length < 10 && userSms.length > 0) {
      setError("Your message must have more than 20 characters.")
    } else {
      setError("")
    }
  }, [userSms])

  useEffect(() => {
    console.log(userSms)
    if (error.length === 0 && userName && userEmail && userSms) {
      setBtn(false)
    } else {
      setBtn(true)
    }
  }, [userName, userSms, userEmail, error])
  const handleUserName = (e) => {
    setUserName(e.target.value)
  }
  const handleUserEmail = (e) => {
    setUserEmail(e.target.value)
  }
  const handleUserSms = (e) => {
    setUserSms(e.target.value)
  }

  const {
    REACT_APP_YOUR_SERVICE_ID,
    REACT_APP_YOUR_TEMPLATE_ID,
    REACT_APP_YOUR_USER_ID,
  } = process.env

  function sendEmail(e) {
    e.preventDefault()

    console.log(e.target)

    emailjs
      .sendForm(
        REACT_APP_YOUR_SERVICE_ID,
        REACT_APP_YOUR_TEMPLATE_ID,
        e.target,
        REACT_APP_YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    e.target.reset()
    setBtn(true)
    setUserName("")
    setUserEmail("")
    setUserSms("")
    setError("")
  }

  return (
    <section className='contact'>
      <div className='contact__container'>
        <div className='contact__header'>
          <h2 className='secundary-heading mb-big'>Contact us</h2>
        </div>
        <div className='contact__content'>
          <form action='' className='form' onSubmit={sendEmail}>
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
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                onChange={handleUserEmail}
              />
            </div>
            <div className='form__group'>
              <label htmlFor=''>Message</label>
              <textarea
                name='message'
                id='sms'
                cols='30'
                rows='5'
                onChange={handleUserSms}
              ></textarea>
            </div>
            <div className='form__group'>
              <button className='form__btn' disabled={btn}>
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
