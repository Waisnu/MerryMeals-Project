import React, { Component } from "react";
import "../css/HeaderComponent.css";
import logo from "../image/MoWlogo.svg";

export class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-light">
          <div className="container">
            <div class="navbar-logo">
              <a href="/">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <div class="navbar-items">
              <ul class="navbar-menu">
                <li>
                  <a href="/" class="navbar-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/menu" class="navbar-link">
                    Meals
                  </a>
                </li>
                {this.props.role === "ROLE_MEMBER" && (
                  <li>
                    <a href="/order" className="navbar-link">
                      Order
                    </a>
                  </li>
                )}
                <li>
                  <a href="/donate" class="navbar-link">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="/servicecenter" class="navbar-link">
                    Service Centers
                  </a>
                </li>
                {this.props.role === "ROLE_ADMIN" && (
                  <li>
                    <a href="/admindashboard" class="navbar-link">
                      Dashboard
                    </a>
                  </li>
                )}
                {this.props.role === "ROLE_MEMBER" && (
                  <li>
                    <a href="/memberprofile" class="navbar-link">
                      Profile
                    </a>
                  </li>
                )}
                {this.props.role === "ROLE_VOLUNTEER" && (
                  <li>
                    <a href="/volunteerprofile" class="navbar-link">
                      Profile
                    </a>
                  </li>
                )}
                {this.props.authenticated ? (
                  <li>
                    <a
                      href=".."
                      onClick={this.props.onLogout}
                      class="navbar-link"
                    >
                      Logout
                    </a>
                  </li>
                ) : (
                  <>
                    <li class="navbar-dropdown">
                      <a href="#" class="navbar-link">
                        Register
                      </a>
                      <div class="navbar-dropdown-content">
                        <a href="/memregistration">Member/Caregivers</a>
                        <a href="/pvregistration">Partner/Volunteer</a>
                      </div>
                    </li>
                    <li>
                      <a href="/login" class="navbar-link">
                        Login
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderComponent;
