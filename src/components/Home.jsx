import './Home.css';  // create a Home.css for specific styling
import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import PackagesList from './PackagesList';
import Diwali from './Diwali';
import Introduction from './Introduction';
import Video from './Video';
import Destinations from './Destinations';
import Review from './TestimonialSection';
import { templeImages } from './templeImages';



const Home = () => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div className="home-container">
       <Carousel 
       activeIndex={index} 
       onSelect={handleSelect}
       touch={true}
       interval={1000}
       >
        {templeImages.map((slide, i) => {
          return (
            <Carousel.Item key={i} >        
          <img
            // style={{opacity: 0.8 }}
            className="d-block w-100 carousel-inner"
            src={slide.image}
            alt="slider"
          />
        </Carousel.Item>
          )
        })}
        
      </Carousel>

      <div className='homepage-text-container'>
        <h1 className='protest-strike-regular' >
          <span>
          Welcome to Mathura & Vrindavan
          </span>
        </h1>
        <p className='dancing-script-subheading'>Experience the spiritual charm of Lord Krishna's birthplace</p>
      </div>
      
      <Introduction />
      <Diwali />
      <PackagesList />
      <Destinations />
      <Video />
      <Review />
    </div>
  );
};

export default Home;
