import './Diwali.css'
import React from "react"; 
import holi_img from './images/holi_mathura.webp'

const Diwali = () => {
    return (
        <div className='container-outside'>
            <div className='festive-offer-container' >
                    <div className='festive-heading'>
                    Experience the Magic of Holi in Mathura & Vrindavan! 🌸🎨
                    </div>
                    <p>This Holi, immerse yourself in the vibrant colors of devotion, joy, and celebration in Mathura & Vrindavan—the birthplace and playground of Lord Krishna!</p>
                    <p>Witness the most spectacular Holi festival in the world, where every street, temple, and heart is drenched in color, love, and music.</p>
                    <p> Book now to avail early-bird discounts and complimentary cultural experiences. Let the divine aura of these holy places make your Holi truly unforgettable!</p>
                    <button>
                        Click Here
                    </button>
                    <div className='discount' >Heavy Discounts</div>
                    
            </div>
            <div className='festive-img-container'>
                <img src={holi_img} alt='holi mathura'/>
            </div>    
        </div>
    )
}

export default Diwali;