import './portfolio.css'

import IMG1 from '../../assets/ss frontend.png'
import IMG2 from '../../assets/todolist.png'
import IMG3 from '../../assets/oke.png'
import IMG4 from '../../assets/WeatherJs.png'
import IMG6 from '../../assets/Web-Porto-rima.png'
import IMG7 from '../../assets/Simple-Quiz.png'
import React from 'react'

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Website Aldrin Motor With Laravel',
      img: IMG1,
      description:
        'The Aldrin Motor website is an automotive business platform. It features an attractive design, a product catalog, company information, a search function, a blog page, and contact details. The goal is to enhance the companys online presence and provide a great user experience.',
      technologies: 'Bootstrap Css | Vue JS | Laravel',
      link: 'https://frontend-website-marketplace.vercel.app/',
      github: '',
    },
    {
      id: 2,
      title: 'Website Portofolio',
      img: IMG6,
      description:
        'In this portfolio, you’ll find a selection of my projects that showcase my skills in web development and design. Each project reflects my commitment to quality, attention to detail, and innovative problem-solving. Whether it’s building a dynamic web application or a visually stunning landing page, I strive to bring creativity and technical expertise to every project.',
      technologies: 'Html | css | Javascript',
      link: 'https://landing-page-rima1-pure-html-css.vercel.app/',
      github: '',
    },
    
    {
      id: 3,
      title: 'To-Do List Project',
      img: IMG2,
      description:
        'This project is a task list application that helps users note, manage, and track their tasks. The application allows for adding, editing, and deleting tasks. The goal is to assist users in better organizing their daily responsibilities.',
      technologies: 'HTML | CSS | Javascript ',
      link: 'https://project-30-days-gdgu.vercel.app/',
      github: '',
    },
    {
      id: 4,
      title: 'Website WeeBoo',
      img: IMG3,
      description: 
        'Weeboo is an innovative platform that connects anime and manga fans around the world. Here, you can find a wealth of up-to-date information about your favorite series, recommendations, reviews, and discussion forums with like-minded community members.',
      technologies: 'React JS',
      link: 'https://latihan-soal-javascript.vercel.app/',
      github: '',
    },
    {
      id: 6,
      title: 'Weather App ',
      img: IMG4,
      description:
        'This portfolio showcases the creation of a weather information website using Open API. The website provides up-to-date weather information with an informative and responsive layout, along with a location search feature. The goal is to offer an easily accessible and informative weather resource.',
      technologies: 'HTML| CSS | Javascript',
      link: 'https://project-30-days.vercel.app/',
      github: '',
    },
    {
      id: 7,
      title: 'Simple Quiz Website',
      img: IMG7,
      description:
        'Welcome to our Simple Quiz Website! This interactive platform is designed to challenge your knowledge and provide a fun way to learn new things. Whether you’re a trivia buff or just looking to test your skills, we have quizzes on a variety of topics that cater to all interests.',
      technologies: 'HTML| CSS | Javascript',
      link: 'https://project-30-days-culj.vercel.app/',
      github: '',
    },
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
