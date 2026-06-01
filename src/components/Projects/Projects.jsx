import React from 'react'
import Styles from './Projects.module.css'

function Projects() {
  return (
    <div className={Styles.projects_container}>
      <h3 className={Styles.projects_title}>My Projects</h3>
      <div className={Styles.projects_list}>

        <div className={Styles.projects_item}>
          <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1" />
          <p>Project Title</p>
        </div>

        <div className={Styles.projects_item}>
          <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1" />
          <p>Project Title</p>
        </div>

        <div className={Styles.projects_item}>
          <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1" />
          <p>Project Title</p>
        </div>

        <div className={Styles.projects_item}>
          <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1" />
          <p>Project Title</p>
        </div>

        <div className={Styles.projects_item}>
          <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1" />
          <p>Project Title</p>
        </div>

        <div className={Styles.projects_item}>
          <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1" />
          <p>Project Title</p>
        </div>

      </div>
    </div>
  )
}

export default Projects
