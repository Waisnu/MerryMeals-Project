import React, { Component } from 'react';
import ContactUsService from '../service/ContactUsService';
import '../css/ContactUsComponent.css';

export class ContactUsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  changeMessage = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  sendMessage = () => {
    const fullName = document.getElementsByName('name')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const subject = document.getElementsByName('subject')[0].value;
    const message = document.getElementsByName('message')[0].value;
  
    // Check if any of the required fields are empty
    if (!fullName || !email || !subject || !message) {
      console.log('Please fill in all the required fields');
      return;
    }
  
    const text = `[${fullName}] [${email}] [${subject}]: ${message}`;
  
    ContactUsService.slackMessage({ text })
      .then(() => {
        console.log('The message has been sent successfully');
      });
  };
  

  render() {
    return (
     
      <div className='App'>
      <div className="container-contact100 mt-3">
        <div
          className="contact100-map"
          id="google_map"
          data-map-x="40.722047"
          data-map-y="-73.986422"
          data-pin="images/icons/map-marker.png"
          data-scrollwhell="0"
          data-draggable="1"
        ></div>
        <div className="wrap-contact100">
          <div
            className="contact100-form-title"
            style={{ backgroundImage: "{img1}" }}
          >
            <span className="contact100-form-title-1 fs-1">CONTACT US</span>
            <span className="contact100-form-title-2 fs-5">
              Feel free to drop us a message below!
            </span>
          </div>
          <form className="contact100-form validate-form">
            <div
              className="wrap-input100 validate-input"
              data-validate="Name is required"
            >
              <span className="label-input100">Full Name:</span>
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="Enter full name"
                required
              />
              <span className="focus-input100"></span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <span className="label-input100">Email:</span>
              <input
                className="input100"
                type="email"
                name="email"
                placeholder="Enter email address"
                required
              />
              <span className="focus-input100"></span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Subject is required"
            >
              <span className="label-input100">Subject:</span>
              <input
                className="input100"
                type="text"
                name="subject"
                placeholder="Enter subject of your concern"
                required
              />
              <span className="focus-input100"></span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Message is required"
            >
              <span className="label-input100">Message:</span>
              <textarea
                id="contact-message"
                name="message"
                value={this.state.text}
                onChange={this.changeMessage}
                style={{ width: '100%' }}
                placeholder="Enter your message here"
                required
              ></textarea>
              <span className="focus-input100"></span>
            </div>
            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn" onClick={this.sendMessage}>
                <span>
                  Submit
                  <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <div id="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.47076465373!2d103.76184082312515!3d1.3115935238580003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2ssg!4v1671625950283!5m2!1sen!2ssg" width="500" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div id="contact-details" style={{ textAlign: 'center', marginRight: '60px' }}>
          <ul>
            <h4 class="mt-4">Contact Us:</h4>
            <ul>Email: <b>meals@onwheels@gmail.com</b></ul>
            <ul>Tel No. <b>297-0123</b></ul>
            <ul class="mb-4">Location: <b>Merry on Wheels
123 North Joyful Avenue
Cheerful Town, CA 98765
United States e</b></ul>
          </ul>
        </div>
      </div>
    </div>
      
    );
  }
}

export default ContactUsComponent;
