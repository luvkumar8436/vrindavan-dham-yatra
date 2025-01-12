import React from 'react';
import styles from "./About.module.css"
import premanandji from './images/premanandji.jpg'

const About = () => {
  return (
    <div className={styles["container"]} >
      <img src={premanandji} alt="premanandji" />
      <div className={styles["about-text"]} >
        <h2>About Us</h2>
        <p>
          Welcome to <b>Vrindavan Dham Yatra</b>, your trusted companion for exploring the spiritual and cultural essence of Mathura, Vrindavan, and nearby sacred destinations. 
        </p>
        <h3>What we Offer</h3>
        <p>
          We specialize in offering curated tours and travel experiences that immerse you in the divine charm of Krishna’s land. From serene temples and vibrant ghats to local festivals and authentic cuisines, we ensure every moment is memorable.
        </p>
        <p>
          Whether you're seeking spiritual solace, historical insights, or a serene getaway, Vrindavan Dham Yatra promises personalized services and hassle-free planning for an unforgettable journey. Let us guide you through the heart of devotion and heritage.
        </p>
      </div>

    </div>
  );
};

export default About;
