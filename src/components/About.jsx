import React from "react";
import IMAGES from "../assets/img/images";
import { Squircle } from "@squircle-js/react";
import { Link } from "react-router-dom";
function About(props) {
  return (
    <section id="about">
      <h2>A propos</h2>
      <div className="content">
        <div className="right">
          <div className="img">
            <img src={IMAGES.me} alt="photographie de Raphaël boucheron" />
          </div>
        </div>
        <div className="left">
          <p>
            Depuis toujours, je suis passionné par l'informatique, qui est pour
            moi à la fois un outil de travail, de communication et de
            divertissement. J'ai commencé mon parcours en réalisant des projets
            avec des cartes électroniques Arduino puis en intégrant des sites
            web en HTML, CSS et JavaScript. Après l’obtention d’un BAC sciences
            et technologie de l’industrie et du développement durable, je
            poursuis mes études en BUT métiers du multimédia et de l’internet
            pour devenir développeur Full Stack. J'apprends et j'acquiers des
            compétences dans le développement web, le design et l'audio-visuel.
          </p>
          <div className="btn">
            <Link to="/cv">Voir mon cv</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
