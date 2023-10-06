import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, history, useHistory} from "react-router-dom";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";
import "../css/MembersSignup.css";
import { memberRegister } from "../service/MCRegisterService";
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
  const [mealType, setMealType] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [condition, setCondition] = useState("");
  const [allergies, setAllergies] = useState("");
  const [caregiverName, setCaregiverName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [caregiverContact, setCaregiverContact] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [validLocation, setValidLocation] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [serviceLocation, setServiceLocation] = useState("");
  const [serviceCenter, setServiceCenter] = useState("");
  const history = useHistory();


  const handleRegistration = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setPasswordMatchError(false);
      const registrationData = {
        firstName,
        lastName,
        email,
        contactNumber,
        dob,
        condition,
        allergies,
        caregiverName,
        relationship,
        caregiverContact,
        longitude,
        latitude,
        password
      };
      memberRegister(registrationData)
        .then((response) => {
          toast.success("Your application has been submitted! Our Staff will contact you shortly");
          setTimeout(() => {
            history.push("/");
            window.location.reload();
          }, 1000);
        })
        .catch((error) => {
          toast.error((error.message) || 'Oops! Something went wrong. Please try again!');
        });
    } else {
      setPasswordMatchError(true);
    }
  };

  const getCoordinates = (address, barangay, city, country, postalCode) => {
    var fullAddress = `${address}, ${barangay}, ${city}, ${country}, ${postalCode}`;
    var geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: fullAddress }, (results, status) => {
      if (status === "OK" && results[0] && results[0].geometry && results[0].geometry.location) {
        var location = results[0].geometry.location;
        var latitude = location.lat();
        var longitude = location.lng();
        
        setValidLocation(true);
        setLocationError(false);
        setLatitude(latitude);
        setLongitude(longitude);
        getMealType(longitude, latitude);
      } else {
        toast.error("Please enter a valid address!");
        setValidLocation(false);
        setLocationError(true);
      }
    });
  };
  
  
  function getDistance(lat1, lng1, lat2, lng2) {
    const R = 6371e3;
    const phi1 = toRadians(lat1);
    const phi2 = toRadians(lat2);
    const deltaPhi = toRadians(lat2 - lat1);
    const deltaLambda = toRadians(lng2 - lng1);

    const a =
      Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
      Math.cos(phi1) *
        Math.cos(phi2) *
        Math.sin(deltaLambda / 2) *
        Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    return distance / 1000;
  }

  function reverseGeocodeAddress(latitude, longitude) {
    var geocoder = new window.google.maps.Geocoder();
    var lat = parseFloat(latitude);
    var long = parseFloat(longitude);

    if (isNaN(lat) || isNaN(long)) {
      toast.error("Please enter valid coordinates.");
      return;
    }

    var location = new window.google.maps.LatLng(lat, long);

    geocoder.geocode({ location: location }, function (results, status) {
      if (status === "OK") {
        if (results[0]) {
          var formattedAddress = results[0].formatted_address;
          var modifiedAddress = formattedAddress.replace(/\s\w+\+\w+/g, "");
          setServiceLocation(modifiedAddress);
        } else {
          toast.error("No results found.");
        }
      } else {
        toast.error("Please enter a valid address!");
      }
    });
  }

  function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  const getMealType = async (longitude, latitude) => {
    const serviceLocation = (await locationService.getServiceCenter()).data;
    const distances = [];
    serviceLocation.forEach((location) => {
      const locationLongitude = parseFloat(location.scLongitude);
      const locationLatitude = parseFloat(location.scLatitude);

      const distance = getDistance(
        latitude,
        longitude,
        locationLatitude,
        locationLongitude
      );
      distances.push({
        distance: distance,
        center: location.scName,
        longitude: locationLongitude,
        latitude: locationLatitude,
      });
    });

    distances.sort((a, b) => a.distance - b.distance);

    if (distances[0].distance <= 10) {
      setMealType("Hot Meal");
    } else {
      setMealType("Frozen Meal");
    }
    setServiceCenter(distances[0].center);
    reverseGeocodeAddress(distances[0].latitude, distances[0].longitude);
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

  return (
    <section class = "membersignup">
    <Container>
      
      <Row className="justify-content-center mar">
        <Col xs={12} sm={10} md={8}>
          <Card className="shadow registration-card">
            <h1>Member Application</h1>
            <br />
            <Form onSubmit={handleRegistration}>
            <Form.Group controlId="address">
  <Form.Label>
    This address will determine the type of meal you will receive
  </Form.Label>
  <Form.Control
    type="text"
    placeholder="Full Address"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
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

              <Row>
                <Col>
                  <Form.Group controlId="mealType">
                    <Form.Label>Meal Type</Form.Label>
                    <Form.Control
                      type="text"
                      value={mealType}
                      disabled
                      style={{
                        fontWeight: "bold",
                        color: "green",
                        textAlign: "center",
                        letterSpacing: "2px",
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="serviceCenter">
                    <Form.Label>Service Center</Form.Label>
                    <Form.Control
                      type="text"
                      value={serviceCenter}
                      di
                      style={{
                        fontWeight: "bold",
                        color: "green",
                        textAlign: "center",
                        letterSpacing: "2px",
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="serviceCenter">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      value={serviceLocation}
                      disabled
                      style={{
                        fontWeight: "500",
                        color: "green",
                        textAlign: "center",
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Group controlId="firstName">
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lastName">
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Group controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="contactNumber">
                    <Form.Control
                      type="tel"
                      placeholder="Phone"
                      value={contactNumber}
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
                      dateFormat={"MM/dd/yyyy"}
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
                <Col>
                  <Form.Group controlId="condition">
                    <Form.Control
                      type="text"
                      placeholder="Recent Illness or Accident"
                      value={condition}
                      onChange={(e) => setCondition(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="allergies">
                    <Form.Control
                      type="text"
                      placeholder="Food Allergies"
                      value={allergies}
                      onChange={(e) => setAllergies(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Group controlId="caregiverName">
                    <Form.Control
                      type="text"
                      placeholder="Caregiver's Name"
                      value={caregiverName}
                      onChange={(e) => setCaregiverName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="relationship">
                    <Form.Control
                      type="text"
                      placeholder="Relation"
                      value={relationship}
                      onChange={(e) => setRelationship(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="caregiverContact">
                    <Form.Control
                      type="tel"
                      placeholder="Caregiver's Contact"
                      value={caregiverContact}
                      onChange={(e) => setCaregiverContact(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Button variant="primary" type="submit" disabled={!passwordMatch}>
                Register
              </Button>
              <br />
              <Form.Text>
                Already have an account? <Link to="/login">Login here</Link>.
              </Form.Text>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default RegistrationForm;
