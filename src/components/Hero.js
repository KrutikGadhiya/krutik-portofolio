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
        height="40px" viewBox="0 0 24 24" width="40px" fill="#000000">
        <rect fill="none" height="24" width="24" />
        <path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z" />
      </svg>
      </a>
      <div className="sign">
        <svg viewBox="0 0 101 82" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="sigenature" d="M15.75 23.75C17.3928 25.8795 17.9647 28.1517 19.1528 30.5278C20.4101 33.0425 21.8279 35.4312 22.9028 38.0417C25.1823 43.5775 26.7866 49.3603 28.7361 55.0139C30.5065 60.1481 32.6507 64.8924 35.4861 69.5C35.9197 70.2045 36.5976 71.6272 36.7361 72.4583C36.9416 73.6913 36.7527 69.958 36.7222 68.7083C36.5619 62.1364 36.25 55.5919 36.25 49.0139C36.25 42.4033 36.3289 35.7929 35.5139 29.2222C35.1138 25.9968 35 22.7895 35 19.5417C35 17.0972 35 14.6528 35 12.2083C35 9.6636 34.9145 17.3051 34.625 19.8333C33.8395 26.6937 33.75 33.6764 33.75 40.5833C33.75 45.398 29.9499 48.8586 28.5 53.2083C28.3255 53.7319 27.0226 51.5463 26.9861 51.4722C25.7678 48.9997 24.9211 46.3024 23.7917 43.7778C23.2429 42.5512 22.6496 41.1214 22.5139 39.7639C22.4283 38.9075 22.6158 39.2663 23.2083 39.6667C24.8148 40.7521 26.0963 42.1347 27.6389 43.2917C30.266 45.262 33.1112 46.8899 35.6111 49.0417C38.0414 51.1335 39.9454 53.6776 42.4444 55.7222C43.7904 56.8234 44.7923 58.2291 46.0972 59.3333C46.323 59.5244 46.5442 59.4651 46.8056 59.5556C47.4461 59.7773 47.77 60.4078 48.1944 60.8889C49.3514 62.2002 51.4108 63.6179 53.0833 64.1389C55.4393 64.8727 57.5287 63.2957 58.9167 61.5278C61.8115 57.8403 63.221 52.7467 64.6389 48.3611C66.5448 42.4662 68.1099 36.5831 68.3889 30.3611C68.5253 27.3184 68.3531 24.2818 68.1111 21.25C67.9441 19.1574 67.8994 16.8262 67.2222 14.8056C66.42 12.4116 64.2603 10.3714 62.5278 8.63889C60.7741 6.88524 58.7781 4.98953 56.4167 4.11111C51.9261 2.44071 46.5606 1.21742 41.8056 0.777778C35.356 0.181471 29.0778 2.52378 23.1111 4.66667C17.97 6.51306 13.1604 7.9796 10.25 12.8889C7.45019 17.6116 5.33992 22.9337 3.55556 28.1111C2.22387 31.975 0.57365 36.1711 1.27778 40.3333C1.65236 42.5475 2.56307 44.6832 3.29167 46.7917C4.31163 49.7434 5.25512 52.7164 6.19445 55.6944C7.46123 59.7106 8.68809 63.7306 11.25 67.1389C14.0123 70.8138 18.321 73.3627 22.3889 75.3056C29.3265 78.619 37.1376 80.863 44.8333 81.2778C51.5824 81.6416 59.7175 80.1827 64.4167 74.8889C69.4301 69.241 72.3731 61.3565 74.5278 54.25C76.4231 47.9989 77.2076 37.1156 68.9722 34.7778C64.9021 33.6224 59.5795 35.5135 55.7778 36.75C52.1855 37.9184 48.0634 39.0135 44.8056 41C42.9458 42.134 38.5786 48.1075 41.3611 50.0278C42.0569 50.508 42.87 50.2463 43.5833 49.9861C45.8373 49.1641 48.0184 48.1027 50.25 47.2222C59.9784 43.3841 69.8485 39.9831 79.4444 35.8056C83.6294 33.9837 87.7678 32.1715 92.0694 30.6389C94.29 29.8478 96.5018 29.1362 98.6389 28.1389C99.3463 27.8088 99.3708 27.6811 99.75 28.25" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  )
}
