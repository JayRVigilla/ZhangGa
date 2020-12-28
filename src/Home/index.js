import React, { useEffect } from 'react';
import './Home.css';
import basketball from './../images/audi-nissen.png';
import togetherBlank from './../images/clarke-sanders.png';
import engagement from './../images/jose-escobar.png';
import bornThisWay from './../images/levi-saunders.png';
import togetherTrio from './../images/omar-lopez.png';
import texting from './../images/priscilla-du-preez.png';
import togetherGraf from './../images/together-graffiti.png';


/** Home Component
 * Above the fold
 * transitions background images
 */

function Home() {
  const images = [
    basketball,
    togetherBlank,
    engagement,
    bornThisWay,
    togetherTrio,
    texting,
    togetherGraf
  ]

  // const randNum = (num) => { Math.floor(Math.random() * num)}
  // let featuredImage = images[randNum(images.length-1)]

  // let featuredImage = images[images.length - 1]
  // let randNum = Math.floor(Math.random() * images.length)
  let randNum = images.length-1;

  function newImg() {
    randNum = setInterval(nextImg, 5000)
  }


  function nextImg() {
    randNum = Math.floor(Math.random() * images.length)
    console.log(`in nextImg, randNum is ${randNum}`)
    console.log(`featuredImage = ${featuredImage}`)
  }

  let featuredImage = images[randNum]

  // newImg()

  useEffect()

  return (
    <section id="Home" >
      <h1>ZhangGa -- Tell Your Story</h1>
      <img id="featured-image" src={`${featuredImage}`} alt=""/>
    </section>
  );
}

export default Home;
