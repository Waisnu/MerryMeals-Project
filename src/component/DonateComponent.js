import React, { Component } from "react";
import "../css/DonateComponent.css";
import donate from "../image/donate.jpg";
import DonationComponent from "./DonationComponent";

export class DonateComponent extends Component {
  render() {
    return (
      <div>
        <div class="card text-black border-0 ">
          <img src={donate} alt="Donate" />
          <div class="card-img-overlay">
            <h1 class="card-title rounded-top pt-5 pb-4 text-secondary">
              USA'S SENIORS NEED YOU
            </h1>
            <p class="card-text pe-5 ps-5 pb-3 fs-5 text-secondary">
            Your contribution will assist us in backing community initiatives that
            ensure the safety and self-sufficiency of senior citizens across the country.
            </p>
            <p class="card-text rounded-bottom pe-4 ps-3 pb-5 fs-5 text-secondary">
              <span style={{ color: "green" }}>$30</span> can provide a weeks
              worth of meals for one person
            </p>
            <DonationComponent/>
          </div>
        </div>
      </div>
    );
  }
}

export default DonateComponent;
