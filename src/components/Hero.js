import React, { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const heading = document.querySelector('.heading');
    const para = document.querySelectorAll('.para');
    const arrow = document.getElementById('scroll-down');

    document.addEventListener('mousemove', (e) => {
      cursor.style.top = e.pageY + 'px';
      cursor.style.left = e.pageX + 'px';
    })
    // when cursor on heading
    heading.addEventListener('mouseover', () => {
      cursor.classList.add('onHeading')
    })
    heading.addEventListener('mouseleave', () => {
      cursor.classList.remove('onHeading')
    })
    // when cursor on arrow
    arrow.addEventListener('mouseover', () => {
      cursor.classList.add('onHeading')
    })
    arrow.addEventListener('mouseleave', () => {
      cursor.classList.remove('onHeading')
    })
    // when cursor on para
    for (let i = 0; i < para.length; i++) {
      para[i].addEventListener('mouseover', () => {
        cursor.classList.add('onPara')
      })
      para[i].addEventListener('mouseleave', () => {
        cursor.classList.remove('onPara')
      })
    }
  })
  return (
    <div class="container">
      <h1 class="heading">Hello my name is <span>Krutik Gadhiya.</span></h1>
      <p class="para">Want to <a href="#contact">connect?</a></p>
      <p class="para">I am an web Developer. sort of :)</p>
      <a href="#introduction"><svg id="scroll-down" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
        height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <rect fill="none" height="24" width="24" />
        <path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z" />
      </svg>
      </a>
    </div>
  )
}
