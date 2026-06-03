import React from 'react'
import Styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={Styles.footer}>
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  )
}

export default Footer
