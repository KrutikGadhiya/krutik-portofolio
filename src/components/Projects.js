import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
toast.configure();

export default function Projects() {
  const [projList, setProjList] = useState([]);
  useEffect(() => {
    fetch('https://portofolio-helper-server.herokuapp.com/getproject', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setProjList(response);
      })
      .catch((err) => {
        console.log(err)
        const message = 'No Response from the Server'
        if (err.response) {
          message = err.response.message
        }
        toast.error(message, { autoClose: 5000, draggable: true });
      })
  }, [])
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const heading2 = document.querySelector('.heading2');

    // when cursor on heading
    heading2.addEventListener('mouseover', () => {
      cursor.classList.add('onHeading')
    })
    heading2.addEventListener('mouseleave', () => {
      cursor.classList.remove('onHeading')
    })
  })
  return (
    <section className='projects'>
      <h1 className='heading2'>My Projects</h1>
      {
        projList.map((project, index) => {
          if (index % 2 === 0) {
            return (
              <div key={project._id} className="proj">
                <div className="left">
                  <h2 className="para">{project.projectName}</h2>
                  <p>{project.projectDescription}</p>
                  <a href={project.projectLink} target='blank'>Live link  <i class="fas fa-link"></i></a>
                </div>
                <div className="right">
                  <img width="100%" src={project.projectImage} alt="as" />
                </div>
              </div>
            )
          } else {
            return (
              <div key={project._id} className="proj">
                <div className="left">
                  <img width="100%" src={project.projectImage} alt="as" />
                </div>
                <div className="right">
                  <h2>{project.projectName}</h2>
                  <p>{project.projectDescription}</p>
                  <a href={project.projectLink} target='blank'>Live link  <i class="fas fa-link"></i></a>
                </div>
              </div>
            )
          }
        })
      }
    </section >
  )
}
