import React  from "react"; 
import './Introduction.css'
import { TypeAnimation } from 'react-type-animation';


const Introduction = () => {

  
    
    return (

    <div className='intro-container '>
        <div className="intro-heading">
          <h2>Best Tour Packages of</h2>
          <TypeAnimation
            sequence={[
              "Mathura",
              2000,
              "Vrindavan",
              2000,
              "Barsana",
              2000,
              "Agra",
              2000
            ]}
            speed={50}
            repeat={Infinity}
            style={{ fontSize: '4em' , color: 'blueviolet' }}
          />
        </div>

        <div className="summary-container">
          <div className="intro-summary">
          
            Mathura and Vrindavan are the two sacred towns in the heart of Uttar Pradesh, are timeless destinations that attracts tourist around the world.
    
            Mathura, the birthplace of Lord Krishna, has its spiritual history and vibrant culture which tourist wants to explore. 
        
            From the ancient temples and ghats along the Yamuna River to the lively celebrations of Janamasthami and Holi, every street of Mathura has its own story related to Lord Krishna.  
          </div>
          <div className="radharani-image">
          <img  src={require("./images/Beautiful-wallpaper-radha.jpg")}  alt="radha rani" />
          </div >
          
        </div>
        
        
    </div>
      

    )
}

export default Introduction;