import './Home.css';  // create a Home.css for specific styling
import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import PackagesList from './PackagesList';
import Diwali from './Diwali';
import Introduction from './Introduction';


const data = [
  {
    image:require('./images/indian-temple-g085a80a15_1920-1.jpg'), 
    caption:"Caption",
    description:"Description Here"
   },
  {
    image:require('./images/mathura12.webp'), 
    caption:"Caption",
    description:"Description Here"
   } ,
  
   {
     image:require('./images/DSC_1170.jpg'), 
     caption:"Caption",
     description:"Description Here"
    },
    {
      image:require('./images/prem-mandir7.jpg'), 
      caption:"Caption",
      description:"Description Here"
     },
     {
      image:require('./images/pexels-photo-5413600.jpeg'), 
      caption:"Caption",
      description:"Description Here"
     },
     {
      image:require('./images/Vrindavan__Overview.avif'), 
      caption:"Caption",
      description:"Description Here"
     },
     {
      image:require('./images/Vaishno-Devi-Dham-Vrindavan.jpg'), 
      caption:"Caption",
      description:"Description Here"
     },
     {
      image:require('./images/Chhatris-of-Barsana-Uttar-Pradesh.webp'), 
      caption:"Caption",
      description:"Description Here"
     },
     {
      image:require('./images/free-photo-of-people-at-shri-radha-rani-temple-in-barsana.jpeg'), 
      caption:"Caption",
      description:"Description Here"
     },
   
]


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
        {data.map((slide, i) => {
          return (
            <Carousel.Item>        
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
        <h1 className='protest-strike-regular' >Welcome to the Divine Land of Mathura & Vrindavan</h1>
        <p className='dancing-script-subheading'>Experience the spiritual charm of Lord Krishna's birthplace</p>
      </div>
      
      <Introduction />
      <Diwali />
      <PackagesList />
    </div>
  );
};

export default Home;
