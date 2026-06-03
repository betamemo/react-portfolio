import React from 'react'
import Styles from './Contact.module.css'
import { TbMapPinFilled, TbPhoneFilled, TbMailFilled } from "react-icons/tb";

function Contact() {
  return (
    <div className={Styles.contact_wrapper}>
      <div className={Styles.contact_container}>
        <div className={Styles.contact_info}>
          <h3>Get in touch</h3>

          <p className={Styles.contact_description}>Feel free to reach out to us with any questions or inquiries. We are here to help and provide you with the best service possible.</p>

          <p className={Styles.contact_address}>
            <TbMapPinFilled /> 123 Main Street <br />Bangkok, Thailand
          </p>

          <p className={Styles.contact_phone}>
            <TbPhoneFilled /> +1 (123) 456-7890
          </p>

          <p className={Styles.contact_email}>
            <TbMailFilled /> info@company.com
          </p>
        </div>

        <div className={Styles.contact_form}>
          <form>

            <div className={Styles.contact_group}>
              <div>
                <label htmlFor="first name">First name</label>
                <input type="text" placeholder="e.g. John" required />
              </div>

              <div>
                <label htmlFor="last name">Last name</label>
                <input type="text" placeholder="e.g. Doe" required />
              </div>
            </div>

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="e.g. johndoe@mail.com" required />

            <label htmlFor="message">Message</label>
            <textarea placeholder="Your message here..." required></textarea>

            <button type="submit">Send Message</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
