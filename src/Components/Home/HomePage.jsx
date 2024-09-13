

import React, { useEffect, useState ,useRef} from 'react';
import Lottie from 'lottie-react';
import { scroll, animate } from 'https://cdn.skypack.dev/motion@10.13.1';
import './HomePage.css';
import cloudAnimation from '../../Cloud.json';
import engineAnimation from '../../Engine1.json';

import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import TypeJs from './TypeJs/TypeJs';
import FacultyAdvisors from './FacultyAdvisors/FacultyAdvisors';
import HomeCarousel from './HomeCarousel/HomeCarousel'
import Event from './Event/Event'
import Cryptech from './Cryptech/Cryptech'

AOS.init({
  duration: 500,
  delay: 100,
  easing: 'ease-out',
});


const HomePage = () => {

  return (
    <div className="home-container">
   <HomeCarousel/>
    <section className="hommain"> 
          <div className="homheading">
            <h1 className='font-bold'>SAENITD</h1>
            <TypeJs />
            {/* <p>We are the Society of Automotive Engineers Collegiate Club of National Institute of Technology Durgapur</p> */}
         
        </div>
      </section>

      <div className="homanimated-line"></div>

      <section className="homboxes">
        <div id="testimonial-box" className="homcontainer">
          <div className="homsubheading">
            <h2>We are present at</h2>
            <p>
              Various events, fests, competitions, and projects, fueled by boundless enthusiasm and an unwavering ambition to achieve great heights.
            </p>
          </div>

          <div className="homcard-container" max-auto>

<div className="homcard-aar" data-aos="fade-right">
  <div className="homwrapper">
    <img
      src="https://github.com/Suke2004/Birthday-django-/blob/main/aarohan_2.jpg?raw=true"
      className="homcover-image-aarohan"
      alt="Aarohan"
    />
  </div>
  
  <img
    src="https://i.ibb.co/7j61wMw/aarohan.jpg"
    className="homcharacter-aar"
    alt="Dark Rider Character"
  />
</div>

<div className="homcard-sdv" data-aos="fade-up">
  <div className="homwrapper">
    <img
      src="https://github.com/Suke2004/Birthday-django-/blob/main/IMG-20240907-WA0000.jpg?raw=true"
      className="homcover-image-sdv"
      alt="Force Mage Cover"
    />
  </div>
  <img
    src="https://github.com/Suke2004/Birthday-django-/blob/main/bot.png?raw=true"
    className="homcharacter"
    alt="Force Mage Character"
  />
</div>

<div className="homcard-tedx" data-aos="fade-left">
  <div className="homwrapper">
    <img
      src="https://i.ibb.co/DYqwXcc/Whats-App-Image-2024-08-21-at-23-51-44-c685cd62.jpg"
      className="homcover-image-tedx"
      alt="Force Mage Cover"
    />
  </div>

  <img
    src="https://i.ibb.co/7CK09nR/Whats-App-Image-2024-08-21-at-23-50-49-9d4f2cd5.jpg"
    className="homcharacter"
    alt="Force Mage Character"
  />
</div>

</div>

</div>
</section>
     
      <FacultyAdvisors/>

      <section className="homabout">
        <div id="homcontainer-fluid">
          <div className="homabout-content">
            <Lottie
              animationData={cloudAnimation}
              loop={true}
              className="homresponsive-lottie"
            />
            <div className="homabout-sae" data-aos="fade-up-left">
              <h1 data-aos="fade-right font-bold">About SAE</h1>
              <p>
                The <span>SAE</span> Collegiate Club of NIT Durgapur, the only automotive club of its kind, organizes a diverse range of innovative events, interactive workshops, and enlightening lectures throughout the year, including F.I.S.T., webinars, SDV workshops, Drag and Drift Competition, and TEDX Talks.
                As a pivotal force, SAE being a part of Team Aavishkar coordinates Aarohan, the second-largest techno-management festival in Eastern India, held at NIT Durgapur.
                The club maintains a robust online presence through platforms like Instagram, LinkedIn, Facebook, and YouTube, regularly sharing technology-related content to engage automobile enthusiasts.
              </p>
            </div>

          </div>
        </div>
      </section>

    <Event/>

<Cryptech/>


    </div>
  );
};
export default HomePage;
