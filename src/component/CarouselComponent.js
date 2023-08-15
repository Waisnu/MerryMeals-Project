import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/CarouselComponent.css'
import { Link } from 'react-router-dom';
import banner1 from '../image/banner1.jpg'
import banner2 from '../image/banner2.jpg'


const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption className="d-flex flex-column align-items-start">
          <h3 className="fs-1">PROTECT SENIORS NATIONWIDE</h3>
          <p className="fs-5">Help seniors like Sophia age with<br></br> dignity and without fear of hunger.</p>
          <a type="button" href='/donate' class="btn btn-info fs-5 fw-bold text-light">GIVE NOW</a><br></br><br></br><br></br><br></br><br></br>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption className="d-flex flex-column align-items-start">
          <h3 className="fs-1">JOIN US NOW!</h3>
          <p className="fs-5">Join us in the mission to bring meals,<br></br> hope, and support to those in need.</p>
          <Link to="/destination">
          <button type="button" class="btn btn-info fs-5 fw-bold text-light">LEARN MORE</button><br></br><br></br><br></br><br></br><br></br>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;