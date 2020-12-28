import React, { useState, useEffect } from 'react';
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

  const [featuredImage, setFeaturedImage] = useState(images[images.length-1]);


  useEffect(function () {
    function newImg() {
      function nextImg() {
        const rand = Math.floor(Math.random() * images.length)
        setFeaturedImage(images[rand]);
      }
      setInterval(nextImg, 7000)
    }
    newImg()
  }, [featuredImage, images])

  return (
    <section id="Home" >
      <h1>ZhangGa -- Tell Your Story</h1>
      <img id="featured-image" src={`${featuredImage}`} alt=""/>
    </section>
  );
}

export default Home;
