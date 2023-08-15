import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import '../css/TestimonialComponent.css'
import profile1 from '../image/profile1.png'
import profile2 from '../image/profile2.png'
import profile3 from '../image/profile3.png'

export default class TestimonialComponent extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={profile1} alt="First profile"/>
          <div className="myCarousel">
            <h3>Shirley Thompson</h3>
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalf} />    
            <p>
            I have deep appreciation for Meals on Wheels. As an elderly individual with restricted mobility,
            it has become difficult for me to independently cook nourishing meals. This application has been
            a true lifesaver!
            </p>
          </div>
        </div>

        <div>
          <img src={profile2} alt="Second profile"/>
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <p>
            The meals are remarkably excellent, each dish is delightful and packed with essential nutrients,
            akin to homemade goodness. It significantly improved my health and well-being.
            </p>
          </div>
        </div>

        <div>
          <img src={profile3} alt="Third profile"/>
          <div className="myCarousel">
            <h3>Evelyn Thomas</h3>
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <p>
            The intuitive interface simplifies my exploration of a diverse range of meal choices.
             I can select from various culinary styles and dietary inclinations, guaranteeing that I
             receive meals customized to meet my requirements. 
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}