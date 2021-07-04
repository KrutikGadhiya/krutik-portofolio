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
      <div class="circle xxlarge1 shade1"></div>
      <div class="circle xlarge1 shade2"></div>
      <div class="circle large1 shade3"></div>
      <div class="circle medium1 shade4"></div>
      <div class="circle small1 shade5"></div>
    </section>
  )
}
