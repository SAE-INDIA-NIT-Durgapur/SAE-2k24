import React from 'react'
import './Event.css'

const Event = () => {
  return (
    <>
       <section className="homevents-section data">
        <div className="homhlo-sae" data-aos="fade-right">
          <h1 className='font-bold'>Events</h1>
        </div>
      </section>
      <section className='homevents-section-data px-6'>
        <div id="homcontainer-fluid">
          <div className="homevent-content">
            <div className="homfist-image ">
              <img className='pt-6 flex justify-center items-center'
                src="https://github.com/Suke2004/Birthday-django-/blob/main/IMG-20240821-WA0048.jpg?raw=true"
                alt="Image"
                data-aos="fade-right"
              />
            </div>
            <div className="homabout-fist" data-aos="fade-up-left">
              <h1 data-aos="fade-right">F.I.S.T</h1>
              <p>
                Team SAE-NITD's "Forum for Ideas on Science and Technology" (F.I.S.T.) fosters a research-oriented culture through webinars and workshops on advanced topics like generative AI. By inviting experts, FIST bridges knowledge gaps, stimulates innovation, and empowers students to develop technology-driven solutions to real-world challenges.
              </p>
            </div>
          </div>
        </div>

        <div id="homcontainer-fluid">
          <div className="homevent-content">

            <div className="homabout-baja" >
              <h1 data-aos="fade-left">BAJA SAEINDIA</h1>
              <p data-aos="fade-up-right">Baja SAEINDIA is a national event where university students design, build, and compete with off-road vehicles, promoting collaboration and engineering excellence.
                NIT Durgapur's Team NDORS, comprising 25 students, achieved 38th position nationwide and 7th position among IITs and NITs. </p>
            </div>

            <div className="hombaja-image">
              <img
                src="https://saenitdgp-self.vercel.app/static/media/fullvehicle.72e6f860c848885980de.png"
                alt="Image"
                data-aos="fade-left"
              />
            </div>

          </div>
        </div>

        <div id="homcontainer-fluid">
          <div className="homevent-content">
            <div className="homaiml-image">
              <img className='pt-6 flex justify-center items-center'
                src="https://github.com/Suke2004/Birthday-django-/blob/main/IMG-20240821-WA0076.jpg?raw=true"
                alt="Image"
                data-aos="fade-right"
              />
            </div>
            <div className="homabout-aiml" >
              <h1 data-aos="fade-right">AI ML Workshop</h1>
              <p data-aos="fade-up-left">The workshop offers participants practical experience with AI and ML technologies, focusing on CNNs and deep learning models, to tackle real-world challenges and acquire hands-on expertise in designing neural network architectures and understanding their contemporary applications.</p>
            </div>

          </div>
        </div>

      </section> 
    </>
  )
}

export default Event
