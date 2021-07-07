import React, { useEffect } from 'react'
import Swal from 'sweetalert2';

export default function Contact() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const heading3 = document.querySelector('.heading3');
    const btn = document.querySelector('.button');
    const link = document.querySelectorAll('.link');

    document.addEventListener('mousemove', (e) => {
      cursor.style.top = e.pageY + 'px';
      cursor.style.left = e.pageX + 'px';
    })
    // when cursor on heading
    heading3.addEventListener('mouseover', () => {
      cursor.classList.add('onHeading')
    })
    heading3.addEventListener('mouseleave', () => {
      cursor.classList.remove('onHeading')
    })
    btn.addEventListener('mouseover', () => {
      cursor.classList.add('onHeading')
    })
    btn.addEventListener('mouseleave', () => {
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
  }, [])

  return (
    <section id='contact' class="contact">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f0f0f0" fill-opacity="1" d="M0,96L30,90.7C60,85,120,75,180,112C240,149,300,235,360,256C420,277,480,235,540,224C600,213,660,235,720,208C780,181,840,107,900,85.3C960,64,1020,96,1080,138.7C1140,181,1200,235,1260,245.3C1320,256,1380,224,1410,208L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z">
        </path>
      </svg>
      <h1 className="heading3">Wana, Contact Me?</h1>
      <div className="contactform">
        <form
          name="contact me"
          method="post"
          data-netlify="true"
          git         >
          <input type="hidden" name="form-name" value="contact me" />
          <div className="inputs">
            <div className="formctrl">
              <label htmlFor="Name">Name</label>
              <input id="Name" type="text" name="name" />
            </div>
            <div className="formctrl">
              <label htmlFor="Email">Email</label>
              <input id="Enail" type="email" name="email" />
            </div>
          </div>
          <div className="formctrl">
            <label htmlFor="Message">Message</label>
            <textarea id="Message" name="message" cols="30" rows="6" />
          </div>
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
      <div className="social">
        <div className="link">
          <a href="https://codepen.io/krutikgadhiya" target="_blank" rel="noopener noreferrer"><i class="fab fa-codepen"></i></a>
        </div>
        <div className="link">
          <a href="https://github.com/KrutikGadhiya" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
        </div>
        <div className="link">
          <a href="mailto:krutikgadhiya@gmail.com?subject=want+to+connect!&body=Hi." target="_blank" rel="noopener noreferrer"><i class="far fa-envelope"></i></a>
        </div>
        <div className="link">
          <a href="https://www.linkedin.com/in/krutik-gadhiya-21a814190/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </section>
  )
}
