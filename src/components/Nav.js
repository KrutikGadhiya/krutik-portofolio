import React, { useEffect } from 'react';
import resume from './Krutik_Resume.pdf'

export default function Nav() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const logo = document.querySelector('.logo');
    const link = document.querySelectorAll('.navlinks li a');
    const nav = document.querySelector(".Navbar");

    logo.addEventListener('mouseover', () => {
      cursor.classList.add('onHeading')
    })
    logo.addEventListener('mouseleave', () => {
      cursor.classList.remove('onHeading')
    })
    for (let i = 0; i < link.length; i++) {
      link[i].addEventListener('mouseover', () => {
        cursor.classList.add('onPara')
      })
      link[i].addEventListener('mouseleave', () => {
        cursor.classList.remove('onPara')
      })
    }

    window.addEventListener('scroll', () => {
      if (window.pageYOffset < 200) {
        nav.classList.remove("activeNav");
      } else {
        nav.classList.add("activeNav");
      }
    })

  })
  return (
    <nav className="Navbar">
      <div className="logo">
        <a href="/"><h2>Krutik<span>Gadhiya</span></h2></a>
      </div>
      <input type="checkbox" id="click" />
      <label for="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul className="navlinks">
        <li><a id="navhome" href="/">Home</a></li>
        <li><a id="navintro" href="#introduction">Intro</a></li>
        <li><a id="navskill" href="#skill">Skills</a></li>
        <li><a id="navproj" href="#projects">Projects</a></li>
        <li><a id="navcont" href="#contact">Contact ME</a></li>
        <li><a id="navcont" href={resume}>Resume</a></li>
      </ul>
    </nav>
  )
}
