import React from 'react'
import Styles from './Services.module.css'
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa'

function Services() {
    return (
        <div className={Styles.services_container}>
            <h3 className={Styles.services_title}>My Services</h3>
            <div className={Styles.services_list}>

                <div className={Styles.services_items}>
                    <FaCode />
                    <h4>Web Development</h4>
                    <p>Creating responsive and user-friendly websites and web applications.</p>
                </div>

                <div className={Styles.services_items}>
                    <FaPaintBrush />
                    <h4>UI/UX Design</h4>
                    <p>Designing intuitive and visually appealing user interfaces.</p>
                </div>

                <div className={Styles.services_items}>
                    <FaMobileAlt />
                    <h4>Frontend Consulting</h4>
                    <p>Providing expert guidance on frontend development best practices and technologies.</p>
                </div>

            </div>
        </div>
    )
}

export default Services
