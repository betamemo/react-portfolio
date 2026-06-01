import React from 'react'
import styles from './Hero.module.css'
import { ImGithub, ImLinkedin as ImLinkedin2 } from "react-icons/im";
import { TbBrandLinkedinFilled, TbBrandGithubFilled, TbGhost2Filled } from "react-icons/tb";

function Hero() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.hero_content}>
                    <div className={styles.hero_info}>
                        <p className={styles.text_1}>Hello! It's me.</p>
                        <h3 className={styles.text_2}>Jane Doe</h3>
                        <p className={styles.text_3}>I'm Software Developer</p>
                        <p className={styles.text_4}>I love creating beautiful and functional web applications.</p>

                        <ul className={styles.hero_links}>
                            <li><a href="https://linkedin.com" target="_blank" ><TbBrandLinkedinFilled /></a></li>
                            <li><a href="https://github.com" target="_blank"><TbBrandGithubFilled /></a></li>
                            <li><a href="https://google.com" target="_blank" ><TbGhost2Filled /></a></li>
                        </ul>
                    </div>

                    <div>
                        <div className={styles.hero_image}></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
