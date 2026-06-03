import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { TbMenu2 } from 'react-icons/tb';

function Navbar() {

    const [isToggled, setToggled] = useState(false);

    function toggleMenu() {
        setToggled(!isToggled);
    }

    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.nav_container}>

                    <div className={styles.logo}>
                        <a href='#'>Portfolio</a>
                    </div>

                    <ul>
                        <li><a href='#'>Skills</a></li>
                        <li><a href='#'>Projects</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>

                    <div className={styles.button}>
                        <a href='#'>Say Hi!</a>
                    </div>
                </div>

                {/* Mobile Menu */}
                <TbMenu2 className={styles.menu} onClick={toggleMenu} />

                {isToggled ? (
                    <>
                        <ul className={styles.mobile_menu}>
                            <li><a href='#'>Skills</a></li>
                            <li><a href='#'>Projects</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>

                        <div className={styles.mobile_button}>
                            <a href='#'>Say Hi!</a>
                        </div>
                    </>
                ) : null}

            </div>
        </nav>
    )
}

export default Navbar
