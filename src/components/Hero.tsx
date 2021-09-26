import React, { FC } from "react";
import { Link } from "gatsby";
import {SocialLink, socialLinks} from "../constants/social_links";
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image";

const Hero: FC = () => {
  return (
  <header className="hero">
    <section className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h1>I'm Radek</h1>
          <h4>Junior React and Salesforce Web Developer</h4>
          <Link to="/contact" className="btn">
            contact me
          </Link>
          <div className="social-links">
            {socialLinks.map((link: SocialLink) => {
              return (
                <a key={link.id} href={link.url} className="social-link">
                  {link.icon}
                </a>
              );
            })}
          </div>
        </div>
      </article>
      <StaticImage 
        src="../assets/images/hero.svg"
        alt="portfolio" 
        className="hero-img" 
        placeholder="blurred"
      />
    </section>
  </header>
  );
}

export default Hero;
