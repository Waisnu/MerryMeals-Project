import React, { Component } from 'react'
import '../css/FooterComponent.css'

export class FooterComponent extends Component {
  render() {
    return (
      <div>

<footer class="footer">
    <div class="footer-menu">
      <h3 class="footer-title">Get Support</h3>
      <ul class="footer-links">
        <li><a href="...">Meals</a></li>
        <li><a href="...">Wellbeing</a></li>
        <li><a href="...">Social Connection</a></li>
        <li><a href="...">Find Your Local Service</a></li>
      </ul>
    </div>
    <div class="footer-menu">
      <h3 class="footer-title">Get Involved</h3>
      <ul class="footer-links">
        <li><a href="/donate">Donate</a></li>
        <li><a href="...">Volunteer</a></li>
      </ul>
    </div>
    <div class="footer-menu">
      <h3 class="footer-title">Learn More</h3>
      <ul class="footer-links">
        <li><a href="/aboutus">About Us</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/privacypolicy">Privacy Policy</a></li>
        <li><a href="/foodsafetyguide">Food Safety Guideline</a></li>
      </ul>
    </div>
    <div class="footer-menu">
      <h3 class="footer-title">Contact Us</h3>
      <ul class="footer-links">
        <li><a href="/contactus">Contact Details</a></li>
        <li><a href="...">Media Enquiries</a></li>
      </ul>
    </div>
    <div class="footer-social">
      <a href="..." class="footer-social-link"><i class="fab fa-facebook"></i></a>
      <a href="..." class="footer-social-link"><i class="fab fa-youtube"></i></a>
      <a href="..." class="footer-social-link"><i class="fab fa-instagram"></i></a>
    </div>
  </footer>

      </div>
    )
  }
}

export default FooterComponent