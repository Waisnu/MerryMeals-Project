import React, { useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Card,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "../css/MembersSignup.css";
import { volunteerRegister } from "../service/PVRegisterService";
import locationService from "../service/LocationService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../App.css';


  const RegistrationForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [barangay, setBarangay] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [representingGroup, setRepresentingGroup] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [station, setStation] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [validLocation, setValidLocation] = useState(false);
  const [locationError, setLocationError] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setPasswordMatchError(false);
      const registrationData = {
        firstName,
        lastName,
        email,
        latitude,
        longitude,
        contactNumber,
        dob,
        password,
        representingGroup,
        groupName,
        station
      };
      console.log(registrationData);
      volunteerRegister(registrationData)
        .then((response) => {
          toast.success(
            "Your application has been submitted! Our Staff will contact you shortly"
          );
        })
        .catch((error) => {
          toast.error(
            error.message || "Oops! Something went wrong. Please try again!"
          );
        });
    } else {
      setPasswordMatchError(true);
    }
  };

  const checkPassword = () => {
    if (password === confirmPassword) {
      setPasswordMatchError(false);
      setPasswordMatch(true);
    } else {
      setPasswordMatchError(true);
      setPasswordMatch(false);
    }
  };

  const getCoordinates = (address, city, country, postalCode, barangay) => {
    var fullAddress = `${address}, ${barangay}, ${city}, ${country}, ${postalCode}`;
    var geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: fullAddress }, (results, status) => {
      if (status === "OK") {
        var location = results[0].geometry.location;
        var latitude = location.lat();
        var longitude = location.lng();
  
        setValidLocation(true);
        setLocationError(false);
        setLatitude(latitude);
        setLongitude(longitude);
      } else {
        toast.error("Please enter a valid address!");
        setValidLocation(false);
        setLocationError(true);
      }
    });
  };
  

  return (
    <section class="registerpage">
    <Container>
      <Row className="justify-content-center mar">
        <Col xs={12} sm={10} md={8}>
          <Card className="shadow registration-card">
            <h1>Volunteer Application</h1>
            <br />
            <Form onSubmit={handleRegistration}>
              <Row>
                <Col>
                  <Form.Group controlId="firstName">
                    <Form.Control
                      type="text"
                      value={firstName}
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lastName">
                    <Form.Control
                      type="text"
                      value={lastName}
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Form.Group controlId="address">
  <Form.Control
    type="text"
    placeholder="Full Address"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    onBlur={(e) => getCoordinates(address, city, country, postalCode, barangay)}
    isInvalid={locationError}
    isValid={validLocation}
    required
  />
</Form.Group>
<br></br>
<Form.Group controlId="country">
  <Form.Control
    type="text"
    placeholder="Country"
    value={country}
    onChange={(e) => setCountry(e.target.value)}
    required
  />
</Form.Group>
<br></br>
<Form.Group controlId="city">
  <Form.Control
    type="text"
    placeholder="City"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    required
  />
</Form.Group>
<br></br>
<Form.Group controlId="barangay">
  <Form.Control
    type="text"
    placeholder="Barangay"
    value={barangay}
    onChange={(e) => setBarangay(e.target.value)}
    required
  />
</Form.Group>
<br></br>
<Form.Group controlId="postalCode">
  <Form.Control
    type="text"
    placeholder="Postal Code"
    value={postalCode}
    onChange={(e) => setPostalCode(e.target.value)}
    required
  />
</Form.Group>

              <br />
              <Row>
                <Col>
                  <Form.Group controlId="email">
                    <Form.Control
                      type="email"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="contactNumber">
                    <Form.Control
                      type="text"
                      value={contactNumber}
                      placeholder="Contact Number"
                      onChange={(e) => setContactNumber(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="dob">
                    <DatePicker
                      className="form-control"
                      selected={dob}
                      onChange={(date) => setDob(date)}
                      placeholderText="Date of Birth (mm/dd/yyyy)"
                      showMonthDropdown
                      showIcon
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Group controlId="password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={(e) => checkPassword()}
                      isInvalid={passwordMatchError}
                      isValid={passwordMatch}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="confirmPassword">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onBlur={(e) => checkPassword()}
                      isInvalid={passwordMatchError}
                      isValid={passwordMatch}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4}>
                  <Form.Group controlId="representingGroup">
                    <Form.Check
                      type="checkbox"
                      checked={representingGroup}
                      onChange={(e) => setRepresentingGroup(e.target.checked)}
                      label="Are you representing a Group?"
                      style={{ borderColor: "#ff0000" }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  {representingGroup && (
                    <Form.Group controlId="groupName">
                      <Form.Control
                        type="text"
                        placeholder="Group Name"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        required
                      />
                    </Form.Group>
                  )}
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={2}><label htmlFor="groupSelection">Choose Station:</label></Col>
                <Col sm={6}>
                  <Form.Group controlId="groupName">
                    
                    <select
                      id="groupSelection"
                      value={station}
                      onChange={(e) => setStation(e.target.value)}
                      className="form-control"
                    >
                      <option value="">Select an option</option>
                      <option value="Kitchen">Kitchen</option>
                      <option value="Delivery">Delivery</option>
                    </select>
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Button variant="primary" type="submit" disabled={!passwordMatch}>
                Register
              </Button>
            </Form>
            <div className="text-center">
              Already have an account? <Link to="/login">Login here</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default RegistrationForm;
