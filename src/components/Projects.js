import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

import HTML from './img/html.svg';
import CSS from './img/css.svg';
import JS from './img/js.svg';
import REACT from './img/react.svg';
import EXPRESS from './img/express.png';
import CCPP from './img/CC++.png';
import NODE from './img/nodejs.svg';
import MONGODB from './img/mongodb.png';
import PYTHON from './img/python.svg';
import MATERIALUI from './img/materialui.svg';
toast.configure();

const techImgs = (tech) => {
  switch (tech) {
    case "HTML5":
      return HTML;
    case "CSS3":
      return CSS;
    case "Java Script":
      return JS;
    case "React JS":
      return REACT;
    case "Node JS":
      return NODE;
    case "MongoDB":
      return MONGODB;
    case "Express JS":
      return EXPRESS;
    case "C/C++":
      return CCPP;
    case "Python":
      return PYTHON;
    case "Material UI":
      return MATERIALUI;
    default:
      break;
  }
}

export default function Projects() {
  const [projList, setProjList] = useState([]);
  const [allprojList, setAllProjList] = useState([]);
  const [isSelectd, setIsSelected] = useState(false);

  const toggleIsSelected = () => {
    setIsSelected(!isSelectd)
  }

  useEffect(() => {
    fetch('https://portofolio-helper-server.herokuapp.com/top', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        let proj = response.map((itm) => itm.project)
        setProjList(proj);
      })
      .catch((err) => {
        console.log(err)
        let message = 'No Response from the Server'
        if (err.response) {
          message = err.response.message
        }
        toast.error(message, { autoClose: 5000, draggable: true });
      })
    fetch('https://portofolio-helper-server.herokuapp.com/getproject', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setAllProjList(response);
      })
      .catch((err) => {
        console.log(err)
        let message = 'No Response from the Server'
        if (err.response) {
          message = err.response.message
        }
        toast.error(message, { autoClose: 5000, draggable: true });
      })
  }, [])
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const heading2 = document.querySelector('.heading2');
    const btn = document.querySelector('.button');

    // when cursor on heading
    heading2.addEventListener('mouseover', () => {
      cursor.classList.add('onHeading')
    })
    heading2.addEventListener('mouseleave', () => {
      cursor.classList.remove('onHeading')
    })
    btn.addEventListener('mouseover', () => {
      cursor.classList.add('onHeading')
    })
    btn.addEventListener('mouseleave', () => {
      cursor.classList.remove('onHeading')
    })
  })
  return (
    <section id="projects" className='projects'>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3344ff" fill-opacity="1" d="M0,128L26.7,112C53.3,96,107,64,160,42.7C213.3,21,267,11,320,32C373.3,53,427,107,480,122.7C533.3,139,587,117,640,106.7C693.3,96,747,96,800,101.3C853.3,107,907,117,960,106.7C1013.3,96,1067,64,1120,53.3C1173.3,43,1227,53,1280,74.7C1333.3,96,1387,128,1413,144L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3344ff" fill-opacity="1" d="M0,320L30,298.7C60,277,120,235,180,186.7C240,139,300,85,360,64C420,43,480,53,540,90.7C600,128,660,192,720,224C780,256,840,256,900,256C960,256,1020,256,1080,213.3C1140,171,1200,85,1260,48C1320,11,1380,21,1410,26.7L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
      <h1 className='heading2'>My Projects</h1>
      {
        isSelectd ? <Project projList={allprojList} /> : <Project projList={projList} />
      }
      <button onClick={toggleIsSelected} className="button">{isSelectd ? "Less Projects" : "More Projects"}</button>
    </section >
  )
}

const Project = ({ projList }) => {
  return (
    <>
      {
        projList.map((project, index) => {
          if (index % 2 === 0) {
            return (
              <div key={project._id} className="proj">
                <div className="left">
                  <h2 className="para">{project.projectName}</h2>
                  <p>{project.projectDescription}</p>
                  <h3>Technologies Used :</h3>

                  <div className="techgrid">
                    {
                      project.technologies.map((tech, index) => {
                        return (
                          <div style={{ margin: '0 0.5em' }} key={index}>
                            <img width="50px" src={techImgs(tech)} alt={tech} />
                          </div>
                        )
                      })
                    }
                  </div>
                  <a href={project.projectLink} target='blank'>Live link  <i class="fas fa-link"></i></a>
                  <a className="gitlink" href={project.githubLink} target='blank'>Github link  <i class="fas fa-link"></i></a>
                </div>
                <div className="right">
                  <img className="projimg" width="100%" src={project.projectImage} alt="as" />
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
                  <h3>Technologies Used: </h3>
                  <div className="techgrid">
                    {
                      project.technologies.map((tech, index) => {
                        return (
                          <div style={{ margin: '0 0.5em' }} key={index}>
                            <img width="50px" src={techImgs(tech)} alt={tech} />
                          </div>
                        )
                      })
                    }
                  </div>
                  <a href={project.projectLink} target='blank'>Live link  <i class="fas fa-link"></i></a>
                  <a className="gitlink" href={project.githubLink} target='blank'>Github link  <i class="fas fa-link"></i></a>
                </div>
              </div>
            )
          }
        })
      }
    </>
  )
}