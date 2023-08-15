import React, { Component } from 'react'
import '../css/AboutUs.css';
import Volunteer from '../image/Volunteer.jpg';

export class AboutUs extends Component {
  render() {
    return (
      <div>
        <h2 className="mt-5 mb-4">OUR STORY</h2>
        <div className="container1 mt-7 text-left">
        <div className="story-card">
        <img src={Volunteer} alt="Meals on Wheels" className="story-image" />
        <p className="story-text ms-4">
        At Meals on Wheels, our journey began with a powerful mission: to enhance the lives of our cherished senior citizens through nourishing meals and genuine companionship. We embarked on this path with a vision of spreading warmth, compassion, and sustenance to those who have played an essential role in our communities.
        Our story is one of unity, driven by the collective dedication of volunteers, partners, and supporters who have become the heart of our organization. With each meal delivered and every smile shared, we create meaningful connections that combat isolation and loneliness among our seniors.
        Over the years, we have witnessed the profound impact of our efforts. Beyond delivering meals, we provide a lifeline of care, empathy, and understanding. Our commitment to quality, community, and the well-being of our seniors continues to shape our narrative, ensuring that our story remains one of making a positive difference in the lives we touch.
        </p>
        </div>
        </div>

        <div className="container2 mt-5">
       <div className="custom-container row">
        <div className="col-md-6">
          <h2 className='mb-3'>OUR VISION</h2>
          <p className='mb-5'>Our vision at Meals on Wheels is to create a society where every senior
           citizen experiences nourishment, care, and a strong sense of community. We strive to eliminate hunger
           and isolation among the elderly, fostering a future where no senior goes without a nutritious meal and
           the comfort of companionship. Through our unwavering commitment, we aspire to build a world where every
           senior is not only nourished physically but also emotionally, enriching their lives with dignity and genuine
           human connection.</p>

          <h2 className='mb-3'>OUR MISSION</h2>
          <p>
          At Meals on Wheels, our mission is to provide nourishing meals and meaningful companionship to senior citizens,
          enhancing their quality of life and promoting a sense of belonging. We are dedicated to combating hunger, loneliness,
          and isolation among the elderly by delivering nutritious meals with a side of compassion. Through our tireless efforts
          and dedicated volunteers, we aim to create a supportive community where every senior feels valued, cared for, and 
          empowered to age gracefully while maintaining their dignity and independence.
          </p>
        </div>
        <div className="col-md-6">
          <h2 className='mb-3'>OUR VALUES</h2>
          <p>
          At Meals on Wheels, our core values guide every aspect of our work:
          Compassion: With empathy and kindness, we provide nourishing meals
          and heartfelt companionship to uplift the lives of senior citizens.
          </p>
          <ul>
            <li>Dignity – We uphold the inherent worth of every individual, ensuring that seniors age with grace, respect, and a sense of self-value.</li>
            <li>Community – Fostering connections and a sense of belonging, we create a caring community where seniors are celebrated and never feel alone.</li>
            <li>Excellence – Striving for the highest quality in all we do, we deliver exceptional meals and services that reflect our deep dedication to senior well-being.</li>
            <li>Collaboration –Through strong partnerships and a network of support, we work together to enrich the lives of seniors and create a ripple effect of care.</li>
            <li>Innovation – Embracing fresh ideas and approaches, we continuously evolve to meet the changing needs of seniors and enhance the impact of our mission.</li>
            <li>Empowerment – By providing resources and support, we empower seniors to maintain their independence, make informed choices, and lead fulfilling lives on their own terms.</li>
          </ul>
        </div>
      </div>
    </div><br></br>

    {/*<h2 className='mt-4'>HOW WE'VE GROWN</h2>
    <div className="container3 mt-4 mb-5">
      <p className='text-center'>
      Today, MerryMeals produces 7,300 nutritious meals four days each week in a 14,000-square-foot commercial kitchen located in the heart of Singapore. Meals are then delivered to dozens of dining centers throughout the city, where they are served at noon to older adults in center dining rooms or sent out as Meals on Wheels to homebound older adults.
      </p>
    </div>

    <h2 className='mt-4'>VOLUNTEERS HELP MAKE IT HAPPEN</h2>
    <div className="container3 mt-4 mb-5">
      <p className='text-center'>
        Volunteers are the heart and soul of the Meals on Wheels People, and we depend on more than 200 people every day to help prepare and deliver meals at the centers and to deliver Meals on Wheels. The volunteer with the friendly smile and hot meal is often the only person some of our homebound seniors will see on an average day. Find out more about volunteer opportunities.
      </p>
    </div>

    <h2 className='mt-4'>MAKING MEALS AVAILABLE</h2>
    <div className="container3 mt-4 mb-5">
      <p className='text-center'>
        Meals on Wheels People meals are available to anyone over the age of 60, and seniors are encouraged to donate what they can afford. For seniors that living more than 10km from our place, we can provide the frozen food to avoid stale food while on the go. 
    </p>
      <br></br>
    </div>*/}

    </div>
    )
  }
}

export default AboutUs;
