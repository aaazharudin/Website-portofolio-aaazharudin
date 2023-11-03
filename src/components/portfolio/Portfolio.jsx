import './portfolio.css'

import IMG1 from '../../assets/ss frontend.png'
import IMG2 from '../../assets/todolist.png'
import IMG3 from '../../assets/oke.png'
import IMG4 from '../../assets/WeatherJs.png'
import IMG6 from '../../assets/Project4.jpg'
import React from 'react'

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Website Aldrin Motor With Laravel',
      img: IMG1,
      description:
        'Website Aldrin Motor merupakan bisnis otomotif. Website ini memiliki tampilan menarik, katalog produk, informasi perusahaan, fitur pencarian, halaman blog, dan informasi kontak. Tujuannya adalah meningkatkan online presence perusahaan dan memberikan pengalaman pengguna yang baik. ',
      technologies: 'Bootstrap Css | Vue JS | Laravel',
      link: 'https://frontend-website-marketplace.vercel.app/',
      github: '',
    },
    {
      id: 2,
      title: 'Weather App ',
      img: IMG4,
      description:
        'Portofolio ini menampilkan pembuatan website informasi cuaca menggunakan Open API. Website ini memberikan informasi cuaca terkini dengan tampilan informatif dan responsif, serta fitur pencarian lokasi. Tujuannya adalah menyediakan sumber informasi cuaca yang mudah diakses dan informatif.',
      technologies: 'HTML| CSS | Javascript',
      link: 'https://project-30-days.vercel.app/',
      github: '',
    },
    {
      id: 3,
      title: 'To-Do List Project',
      img: IMG2,
      description:
        'Proyek ini adalah aplikasi daftar tugas yang membantu pengguna mencatat, mengelola, dan melacak tugas-tugas mereka. Aplikasi ini memungkinkan penambahan, pengeditan, dan penghapusan tugas. Tujuannya adalah membantu pengguna mengatur tugas-tugas sehari-hari dengan lebih baik.',
      technologies: 'HTML | CSS | Javascript ',
      link: 'https://project-30-days-gdgu.vercel.app/',
      github: 'https://github.com/Rasif-Taghizada/RubyCode-Blog',
    },
    {
      id: 4,
      title: 'Website WeeBoo',
      img: IMG3,
      description: 'Website untuk Penggemar anime',
      technologies: 'React JS',
      link: 'https://latihan-soal-javascript.vercel.app/',
      github: 'https://github.com/Rasif-Taghizada/Alpha-Agency-Project',
    },
    {
      id: 6,
      title: 'Fs Poster Website',
      img: IMG6,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'Html | Scss | Javascript',
      link: 'https://fs-poster-project.vercel.app/',
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
