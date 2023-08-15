import React, { Component } from 'react'
import '../css/HomeComponent.css'
import CarouselComponent from './CarouselComponent';
import TestimonialComponent from './TestimonialComponent';
//import purpose from '../image/purpose.jpg'
//import news from '../image/news.jpg'

export class HomeComponent extends Component {
  render() {
    return (
      <div>
        <CarouselComponent />
        
      <section class="course">
            <h1>OUR PURPOSE</h1>
            <p>Here are the purpose of Meals on Wheels below.</p>

            <div class="row">
                <div class="course-col">
                <h3>Nourishing Lives, Fostering Community</h3>
                <p>We are dedicated to diminishing hunger, improving nutritional well-being, and raising the overall quality of life for 
                  homebound seniors and those who are at risk. By delivering nourishing meals, nurturing social interactions, and providing
                   dedicated assistance from volunteers, our objective is to prevent hunger and isolation. Our mission is to foster a community 
                   that prioritizes and enhances the welfare of every vulnerable individual.</p>
                </div>
                <div class="course-col">
                    <h3>Empowering Wellness: Combating Hunger, Building Community</h3>
                    <p>Our mission revolves around the reduction of hunger, enhancement of nutrition, 
                      and promotion of the overall welfare of homebound seniors and other susceptible members of society. 
                      This is achieved through the provision of wholesome meals, encouragement of social connections, and the steadfast 
                      support offered by our committed volunteers. Our commitment is unwavering: ensuring that no senior or vulnerable person 
                      experiences hunger or isolation, and cultivating a community that values and uplifts their well-being.</p>
                </div>
                    <div class="course-col">
                    <h3>Beyond Meals, Forging Bonds</h3>
                    <p>With every meal we deliver and every smile we share, we are working towards a future where no one has 
                      to face hunger or loneliness alone. Meals on Wheels is not just about sustenance; 
                      it's about building relationships, restoring dignity, and creating a supportive network that uplifts 
                      the overall well-being of our community's cherished seniors and vulnerable members.</p>
                </div>
            </div>
            
        </section>
        

        <h1 class="testimonial">TESTIMONIALS</h1>
        <TestimonialComponent />

        <div id="more-info">
          <div id="more-info-content" class="row g-1">
            {/* ... Rest of the code for "WAYS TO GIVE," "BODY & SOUL," "GET INVOLVED," and "CONTACT US" sections */}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
{/*export class HomeComponent extends Component {
  render() {
    return (
      <div>
       <CarouselComponent />
       <h3 class="testimonial">TESTIMONIALS</h3>
       <TestimonialComponent/>
       <div id="more-info">
       <div id="more-info-content" class="row g-0">
          <div class="col-xl-3">
            <h3>WAYS TO GIVE</h3>
            <p>Assist in making sure that every elderly individual is not left overlooked.</p><br></br>
            <a class="btn btn-info fs-5 fw-bold text-light" href="/donate" role="button">DONATE</a>
          </div>
          <div class="col-xl-3">
            <h3>BODY & SOUL</h3>
            <p>Discover how Meals on Wheels goes beyond merely providing a meal.</p>
            <a class="btn btn-info fs-5 fw-bold text-light" href="/aboutus" role="button">LEARN MORE</a>
          </div>
          <div class="col-xl-3">
            <h3>GET INVOLVED</h3>
            <p>Create a positive influence within your local area.</p><br></br>
            <a class="btn btn-info fs-5 fw-bold text-light" href="/pvregistration" role="button">SIGN UP</a>
          </div>
          <div class="col-xl-3">
            <h3>CONTACT US</h3>
            <p>Reach out and communicate with our team.</p><br></br>
            <a class="btn btn-info fs-5 fw-bold text-light" href="..." role="button">REACH OUT</a>
          </div>
      </div>
      </div>
      <h1 id="purpose-title">OUR MISSION</h1>
      <div id="purpose-content" class="row justify-content-center">       
        <div class="col-xl-4">
        <img src={purpose} alt="Purpose"/>
        </div>
        <div class="col-xl-4">
          <h4 class="mb-4 offset-md-4">A single knock has the power to change lives.</h4>
          <p class="text-start mb-4 offset-md-4">Our mission involves reducing hunger, enhancing nutrition,
            and elevating the overall well-being of homebound seniors and other susceptible individuals.
            We achieve this by supplying nourishing meals, fostering social engagement, and providing supportive
            services through dedicated volunteers. Our commitment is to prevent any senior or vulnerable individual
            from experiencing hunger or isolation, while cultivating a community that cherishes and uplifts their welfare.</p>
            <a id="purpose-button" class="btn btn-info fs-5 fw-bold text-light offset-md-4" href="/donate" role="button">DONATE NOW</a>
        </div>      
        </div>*/}
       
        { /*<h1 id="news-title">NEWS</h1>
        <div id="news-content" class="row justify-content-center">       
        <div class="col-xl-4">
        <h4 class="mb-4 offset-mb-2">Initiatives now distributing a higher volume of meals than previously in order to meet rising demand.</h4>
          <p class="text-start mb-4 offset-mb-2">Amid the pandemic, we directed $31.3 million straight to the forefront. This sum translated into
           over 1,000 grants, benefiting 628 local communities in dire need. Our influence extended across the nation, reaching those
           communities most in need. Grateful for the support of our generous contributors, we have furnished nutritious meals, social
           connection, and attentive oversight for countless seniors. However, our journey is ongoing. Our commitment to assisting seniors
            in need endures throughout the pandemic's duration and into the distant future.</p>
            <a id="purpose-button" class="btn btn-info fs-5 fw-bold text-light" href="/news" role="button">LEARN MORE</a>
        </div>      
        </div>*/} 
        {/*export class HomeComponent extends Component {
  render() {
    return (
      <div>
       <CarouselComponent />
       <h3 class="testimonial">TESTIMONIALS</h3>
       <TestimonialComponent/>
       <div id="more-info">
       <div id="more-info-content" class="row g-0">
          <div class="col-xl-3">
            <h3>WAYS TO GIVE</h3>
            <p>Assist in making sure that every elderly individual is not left overlooked.</p><br></br>
            <a class="btn btn-info fs-5 fw-bold text-light" href="/donate" role="button">DONATE</a>
          </div>
          <div class="col-xl-3">
            <h3>BODY & SOUL</h3>
            <p>Discover how Meals on Wheels goes beyond merely providing a meal.</p>
            <a class="btn btn-info fs-5 fw-bold text-light" href="/aboutus" role="button">LEARN MORE</a>
          </div>
          <div class="col-xl-3">
            <h3>GET INVOLVED</h3>
            <p>Create a positive influence within your local area.</p><br></br>
            <a class="btn btn-info fs-5 fw-bold text-light" href="/pvregistration" role="button">SIGN UP</a>
          </div>
          <div class="col-xl-3">
            <h3>CONTACT US</h3>
            <p>Reach out and communicate with our team.</p><br></br>
            <a class="btn btn-info fs-5 fw-bold text-light" href="..." role="button">REACH OUT</a>
          </div>
      </div>
      </div>
      <h1 id="purpose-title">OUR MISSION</h1>
      <div id="purpose-content" class="row justify-content-center">       
        <div class="col-xl-4">
        <img src={purpose} alt="Purpose"/>
        </div>
        <div class="col-xl-4">
          <h4 class="mb-4 offset-md-4">A single knock has the power to change lives.</h4>
          <p class="text-start mb-4 offset-md-4">Our mission involves reducing hunger, enhancing nutrition,
            and elevating the overall well-being of homebound seniors and other susceptible individuals.
            We achieve this by supplying nourishing meals, fostering social engagement, and providing supportive
            services through dedicated volunteers. Our commitment is to prevent any senior or vulnerable individual
            from experiencing hunger or isolation, while cultivating a community that cherishes and uplifts their welfare.</p>
            <a id="purpose-button" class="btn btn-info fs-5 fw-bold text-light offset-md-4" href="/donate" role="button">DONATE NOW</a>
        </div>      
        </div>*/}

