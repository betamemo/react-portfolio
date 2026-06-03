import React from 'react'
import styles from './Number.module.css'

function Number() {
  return (
    <div className={styles.number_container}>
      <div className={styles.number_items}>
        <h3>100+</h3>
        <p>Project delivered</p>
      </div>

      <div className={styles.number_items}>
        <h3>50+</h3>
        <p>Companies helped</p>
      </div>

      <div className={styles.number_items}>
        <h3>10</h3>
        <p>Year of experience</p>
      </div>

      <div className={styles.number_items}>
        <h3>200+</h3>
        <p>Happy clients</p>
      </div>
    </div>
  )
}

export default Number
