import { Container, Row, Col, Image, Card, Form } from "react-bootstrap";
import defaultProfile from "../image/profile.svg";
import { useState} from "react";
import LoadingSpinner from "./Loading";
import { toast } from "react-toastify";

export const MemberProfile = (props) => {
  const [address, setAddress] = useState("");
  if (!props.authenticated) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  reverseGeocodeAddress(
    props.currentUser.member.latitude,
    props.currentUser.member.longitude
  );

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
          setAddress(modifiedAddress);
        } else {
          console.log("No results found.");
        }
      } else {
        console.log("Enter Valid Address")
      }
    });
  }
  return (
    <section>
      <Container className="profile">
        <Row className="py-5 justify-content-center">
          <Col xs={12} sm={10} md={8}>
            <Card className="p-3 shadow-lg">
              <Row>
                <Col xs={4} className="text-center">
                  <Image
                    src={defaultProfile}
                    roundedCircle
                    thumbnail
                    className="profile-image"
                  ></Image>
                  <h4 className="pt-2">
                    {props.currentUser.member.firstName}{" "}
                    {props.currentUser.member.lastName}
                  </h4>
                  <h6 className="text-secondary">Member</h6>
                </Col>
                <Col xs={8}>
                  <h1 className="text-secondary">Member Profile</h1>
                  <hr />
                  <Row className="py-2">
                    <Form.Label>Email:</Form.Label>
                    <h5>{props.currentUser.user.email}</h5>
                  </Row>
                  <Row>
                    <Form.Label>Contact Number:</Form.Label>
                    <h5>{props.currentUser.member.contactNumber}</h5>
                  </Row>
                  <Row>
                    <Form.Label>Date of Birth:</Form.Label>
                    <h5>{props.currentUser.member.dob}</h5>
                  </Row>
                  <Row>
                    <Form.Label>Address:</Form.Label>
                    <h5>{address}</h5>
                  </Row>
                  <Row>
                    <Form.Label>Allergies:</Form.Label>
                    <h5>{props.currentUser.member.allergies}</h5>
                  </Row>
                  <Row>
                    <Form.Label>Health Condition:</Form.Label>
                    <h5>{props.currentUser.member.condition}</h5>
                  </Row>
                  {props.currentUser.member.caregiver !== "" && (
                    <>
                    <Row>
                      <Form.Label>Caregiver:</Form.Label>
                      <h5>{props.currentUser.member.caregiverName}</h5>
                    </Row>
                    <Row>
                      <Form.Label>Caregiver Contact Number:</Form.Label>
                      <h5>{props.currentUser.member.caregiverContact}</h5>
                    </Row>
                    <Row>
                      <Form.Label>Relationship:</Form.Label>
                      <h5>{props.currentUser.member.relationship}</h5>
                    </Row>
                    </>
                  )}
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MemberProfile;
