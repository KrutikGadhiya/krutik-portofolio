import React, { useEffect } from 'react'
import myImage from './img/avatar.png'

export default function Intro() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const para = document.querySelectorAll('.para');
    const myImage = document.getElementById('my-image');
    // when cursor on My image
    myImage.addEventListener('mouseover', () => {
      cursor.classList.add('onImage')
    })
    myImage.addEventListener('mouseleave', () => {
      cursor.classList.remove('onImage')
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
    <section id="introduction" class="intro">
      <img id="my-image" width="350px" src={myImage} alt="myimage" />
      <div class='text'>
        <p class="para">Hello my name is krutik Gadhiya. I am a web developer currently persuing B-tech IT in
          charotar university of science and technology. I want to become a Full stack Developer. Always eager to learning new inspiring and interesting thing.
          Also When I am not working either I play minecraft or I spent my time watching <a
            href="https://www.youtube.com/user/LinusTechTips" target="blank">Linuses</a>, <a
              href="https://www.youtube.com/user/duncan33303" target="blank">Austin's</a>,
          <a href="https://www.youtube.com/user/Mrwhosetheboss" target="blank"> Mrwhosetheboss</a> videos on youtube
        </p>
      </div>
      <div class="circle xxlarge shade1"></div>
      <div class="circle xlarge shade2"></div>
      <div class="circle large shade3"></div>
      <div class="circle medium shade4"></div>
      <div class="circle small shade5"></div>

    </section>
  )
}
