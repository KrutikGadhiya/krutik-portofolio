import React, { useEffect } from 'react'

import HTML from "./img/html5-brands.svg";
import CSS from "./img/css3-alt-brands.svg";
import JS from "./img/js-brands.svg";
import NODE from "./img/node-brands.svg";
import REACT from "./img/react-brands.svg";
import MONGODB from "./img/PngItem_3850359.png";
import CCPP from "./img/c-cpp.png";
import PYTHON from "./img/python-brands.svg";
import ILLUSTRATOR from "./img/skill.svg";

export default function Skills() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const heading1 = document.querySelector('.heading1');
    const animateimg1 = document.querySelector('.animateimg1');
    const animateimg2 = document.querySelector('.animateimg2');
    const animateimg3 = document.querySelector('.animateimg3');
    const animateimg4 = document.querySelector('.animateimg4');
    const animateimg5 = document.querySelector('.animateimg5');
    const animateimg6 = document.querySelector('.animateimg6');
    const animateimg7 = document.querySelector('.animateimg7');
    const animateimg8 = document.querySelector('.animateimg8');
    const anime = window.anime

    // when cursor on heading
    heading1.addEventListener('mouseover', () => {
      cursor.classList.add('onHeading')
    })
    heading1.addEventListener('mouseleave', () => {
      cursor.classList.remove('onHeading')
    })

    const animateIn = (e) => {
      anime({
        targets: `${e}`,
        scale: 1.3,
        direction: 'alternate',
        loop: false,
        easing: 'spring(1, 100, 10, 10)'
      })
    }
    const animateOut = (e) => {
      anime({
        targets: `${e}`,
        scale: 1,
        direction: 'alternate',
        loop: false,
        easing: 'spring(1, 100, 10, 10)'
      })
    }
    animateimg1.addEventListener('mouseover', () => {
      animateIn('.animateimg1')
    })
    animateimg2.addEventListener('mouseover', () => {
      animateIn('.animateimg2')
    })
    animateimg3.addEventListener('mouseover', () => {
      animateIn('.animateimg3')
    })
    animateimg4.addEventListener('mouseover', () => {
      animateIn('.animateimg4')
    })
    animateimg5.addEventListener('mouseover', () => {
      animateIn('.animateimg5')
    })
    animateimg6.addEventListener('mouseover', () => {
      animateIn('.animateimg6')
    })
    animateimg7.addEventListener('mouseover', () => {
      animateIn('.animateimg7')
    })
    animateimg8.addEventListener('mouseover', () => {
      animateIn('.animateimg8')
    })
    animateimg1.addEventListener('mouseleave', () => {
      animateOut('.animateimg1')
    })
    animateimg2.addEventListener('mouseleave', () => {
      animateOut('.animateimg2')
    })
    animateimg3.addEventListener('mouseleave', () => {
      animateOut('.animateimg3')
    })
    animateimg4.addEventListener('mouseleave', () => {
      animateOut('.animateimg4')
    })
    animateimg5.addEventListener('mouseleave', () => {
      animateOut('.animateimg5')
    })
    animateimg6.addEventListener('mouseleave', () => {
      animateOut('.animateimg6')
    })
    animateimg7.addEventListener('mouseleave', () => {
      animateOut('.animateimg7')
    })
    animateimg8.addEventListener('mouseleave', () => {
      animateOut('.animateimg8')
    })
  })
  return (
    <section id='skill' class="skills">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000066" fill-opacity="1" d="M0,64L26.7,69.3C53.3,75,107,85,160,80C213.3,75,267,53,320,53.3C373.3,53,427,75,480,85.3C533.3,96,587,96,640,101.3C693.3,107,747,117,800,117.3C853.3,117,907,107,960,90.7C1013.3,75,1067,53,1120,58.7C1173.3,64,1227,96,1280,96C1333.3,96,1387,64,1413,48L1440,32L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
      <h1 className='heading1'>My Skills</h1>
      <div class="skill-container">
        <div class="left">
          <div class="item">
            <p>HTML 5</p>
            <img class="animateimg1 para" width="80px" src={HTML} alt="HTML5" />
          </div>
          <div class="item">
            <p>CSS 3</p>
            <img class="animateimg2 para" width="80px" src={CSS} alt="CSS3" />
          </div>
          <div class="item">
            <p>JavaScript</p>
            <img class="animateimg3 para" width="80px" src={JS} alt="JavaScript" />
          </div>
          <div class="item">
            <p>Node JS</p>
            <img class="animateimg4 para" width="80px" src={NODE} alt="NodeJS" />
          </div>
          <div class="item">
            <p>React JS</p>
            <img class="animateimg5 para" width="80px" src={REACT} alt="React" />
          </div>
          <div class="item">
            <p>MongoDB</p>
            <img class="animateimg6 para" width="40px" src={MONGODB} alt="MongoDB" />
          </div>
          <div class="item">
            <p>C/C++</p>
            <img class="animateimg7 para" width="80px" src={CCPP} alt="C/C++" />
          </div>
          <div class="item">
            <p>Python</p>
            <img class="animateimg8 para" width="80px" src={PYTHON} alt="Python" />
          </div>
        </div>
        <div class="right">
          <img width="400px" height="auto" src={ILLUSTRATOR} alt="skills illustrator" />
        </div>
      </div>
      <div class="square xxlarge1 shade1"></div>
      <div class="square xlarge1 shade2"></div>
      <div class="square large1 shade3"></div>
    </section>
  )
}
