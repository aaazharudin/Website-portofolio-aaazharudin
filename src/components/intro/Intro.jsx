import './intro.css'

import { FaAward } from 'react-icons/fa'
import React from 'react'
import { VscFolderLibrary } from 'react-icons/vsc'
import img from '../../assets/FotoMe.jpeg'

// import ME from '../../assets/Rasif Tagizade image.jpg';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
          I am a dedicated developer specializing in building robust web applications using PHP, Laravel, Go, the Gin framework, React.js, and JavaScript. 
          With years of experience, I’ve successfully delivered projects from simple websites to complex applications. Whether you need backend solutions, 
          API development, or full-stack web development, I provide high-quality results.
          <hr />
          Core Skills:
          <hr />
          PHP & Laravel: Creating dynamic and secure web applications and REST APIs.
          Go & Gin: Developing high-performance backend services and microservices.
          Database Design: Expert in MySQL and PostgreSQL for scalable architecture.
          API Integration: Building and consuming APIs for various services.
          Problem Solving: Skilled in debugging and optimizing applications.
          <hr />
          Why hire me?
          <hr />
          Proven experience in delivering projects on time and within budget.
          Strong attention to detail and a problem-solving mindset.
          Committed to clear communication and ensuring client satisfaction.

          Let’s work together to bring your ideas to life!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default Intro
