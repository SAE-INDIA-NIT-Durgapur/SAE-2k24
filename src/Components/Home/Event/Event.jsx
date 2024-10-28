import React, { useRef, useEffect } from "react";
import "./Event.css";

const Event = () => {
  const cardsRef = useRef([]);

  // Update glow position on mouse move
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update CSS variables for glow position
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <>
      <section className="homevents-section data">
        <div className="homhlo-sae" data-aos="fade-right">
          <h1 className="font-bold">Events</h1>
        </div>
      </section>
      <section className="homevents-section-data px-6">
        <div id="homcontainer-fluid">
          <div
            className="homevent-content"
            ref={(el) => (cardsRef.current[0] = el)}
            onMouseMove={(e) => handleMouseMove(e, 0)}
          >
            <div className="homfist-image">
              <img
                className="pt-6 mx-auto"
                src="https://i.ibb.co/m4yp2vJ/Screenshot-2024-10-28-193138.png"
                alt="Image"
                data-aos="fade-right"
              />
            </div>
            <div className="homabout-fist" data-aos="fade-up-left">
              <h1 data-aos="fade-right">F.I.S.T</h1>
              <p>
                Team SAE-NITD's "Forum for Ideas on Science and Technology"
                (F.I.S.T.) fosters a research-oriented culture through webinars
                and workshops on advanced topics like generative AI. By inviting
                experts, FIST bridges knowledge gaps, stimulates innovation, and
                empowers students to develop technology-driven solutions to
                real-world challenges.
              </p>
            </div>
          </div>

          <div
            className="homevent-content"
            ref={(el) => (cardsRef.current[1] = el)}
            onMouseMove={(e) => handleMouseMove(e, 1)}
          >
            <div className="homabout-baja">
              <h1 data-aos="fade-left">BAJA SAEINDIA</h1>
              <p data-aos="fade-up-right">
                Baja SAEINDIA is a national event where university students
                design, build, and compete with off-road vehicles, promoting
                collaboration and engineering excellence. NIT Durgapur's Team
                NDORS, comprising 25 students, achieved 38th position nationwide
                and 7th position among IITs and NITs.
              </p>
            </div>
            <div className="hombaja-image">
              <img
                src="https://saenitdgp-self.vercel.app/static/media/fullvehicle.72e6f860c848885980de.png"
                alt="Image"
                data-aos="fade-left"
              />
            </div>
          </div>

          <div
            className="homevent-content"
            ref={(el) => (cardsRef.current[2] = el)}
            onMouseMove={(e) => handleMouseMove(e, 2)}
          >
            <div className="homaiml-image">
              <img
                className="pt-6 mx-auto"
                src="https://github.com/Suke2004/Birthday-django-/blob/main/IMG-20240821-WA0076.jpg?raw=true"
                alt="Image"
                data-aos="fade-right"
              />
            </div>
            <div className="homabout-aiml" data-aos="fade-up-left">
              <h1 data-aos="fade-right">AI ML Workshop</h1>
              <p>
                The workshop offers participants practical experience with AI
                and ML technologies, focusing on CNNs and deep learning models,
                to tackle real-world challenges and acquire hands-on expertise
                in designing neural network architectures and understanding
                their contemporary applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;
