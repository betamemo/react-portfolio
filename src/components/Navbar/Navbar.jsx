import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <a href='#'>Portfolio</a>
                    </div>

                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Experience</a></li>
                        <li><a href='#'>Projects</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>

                    <div className={styles.button}>
                        <a href='#'>Say Hi!</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
