import React from 'react'
import Styles from './Services.module.css'
import { TbDeviceImacCode, TbChartHistogram, TbMoodCheck } from "react-icons/tb";

function Services() {
    return (
        <div className={Styles.services_container}>
            <h3 className={Styles.services_title}>What I Do</h3>
            <div className={Styles.services_list}>

                <div className={Styles.services_items}>
                    <TbDeviceImacCode />
                    <h4>Software & Web Development</h4>
                    <p>Creating robust and scalable web applications from intuitive frontends to powerful backends.</p>
                </div>

                <div className={Styles.services_items}>
                    <TbChartHistogram />
                    <h4>AI & Data-Driven Solutions</h4>
                    <p>Enhancing digital experiences by integrating smart features, data reporting, and modern AI tools.</p>
                </div>

                <div className={Styles.services_items}>
                    <TbMoodCheck />
                    <h4>Automation & Quality Assurance</h4>
                    <p>Ensuring high-quality performance and reliability through automated testing frameworks and optimized workflows.</p>
                </div>

            </div>
        </div>
    )
}

export default Services
