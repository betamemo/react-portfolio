import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_container}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        
        <div className={styles.testi_item}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolor molestiae minima consequatur similique aperiam laboriosam illum? Officia illo provident aspernatur, ad fugiat magnam animi, accusamus harum possimus vero nobis.</p>
          <img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h4>Jane</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>

        <div className={styles.testi_item}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolor molestiae minima consequatur similique aperiam laboriosam illum? Officia illo provident aspernatur, ad fugiat magnam animi, accusamus harum possimus vero nobis.</p>
          <img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h4>Jane</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>

        <div className={styles.testi_item}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolor molestiae minima consequatur similique aperiam laboriosam illum? Officia illo provident aspernatur, ad fugiat magnam animi, accusamus harum possimus vero nobis.</p>
          <img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h4>Jane</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>

      </div>
    </div>
  )
}

export default Testimonials
