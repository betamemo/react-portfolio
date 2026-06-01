import React from 'react'
import Styles from './Skills.module.css'
import { TbBrandReact, TbBrandNodejs, TbBrandPython, TbBrandFlutter, TbBrandGit } from "react-icons/tb"

function Skills() {
  return (
    <div className={Styles.skills_container}>
      <h3 className={Styles.skills_title}>My Skills</h3>
      <ul className={Styles.skills_list}>
        <li><TbBrandReact /> </li>
        <li><TbBrandNodejs /> </li>
        <li><TbBrandPython /> </li>
        <li><TbBrandFlutter /> </li>
        <li><TbBrandGit /> </li>
      </ul>
    </div>
  )
}

export default Skills
