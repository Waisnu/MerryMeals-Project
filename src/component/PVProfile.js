
import { Container, Row, Col, Image, Card, Form, Button } from "react-bootstrap";
import defaultProfile from "../image/profile.svg";
import { getCurrentUser } from "../service/MCRegisterService";
import volunteerService from '../service/VolunteerService'
import { useState, useEffect } from "react";
import LoadingSpinner from "./Loading";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";


export const PVProfile = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [address, setAddress] = useState("");
  const [showEditModal, setShowEditModal] = useState(false); // State for showing/hiding the edit modal
  const [selectedVolunteer, setSelectedVolunteer] = useState({
    firstName: "",
    lastName: "",
    user: {
      email: ""
    },
    contactNumber: "",
    dob: "",
    groupName: "",
    station: "",
    // Add other properties here
  });

  if (!props.authenticated) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const volunteerService = {
    updateVolunteer: (volunteerId, updatedVolunteer) => {
      // Simulating a service call, you need to implement your logic here
      return new Promise((resolve, reject) => {
        // Simulate a successful response
        setTimeout(() => {
          resolve({ data: "Volunteer updated successfully." });
        }, 1000);
      });
    }
  };

  
  // reverseGeocodeAddress(
  //   props.currentUser.volunteer.latitude,
  //   props.currentUser.volunteer.longitude
  // );

  // function reverseGeocodeAddress(latitude, longitude) {
  //   var geocoder = new window.google.maps.Geocoder();
  //   var lat = parseFloat(latitude);
  //   var long = parseFloat(longitude);

  //   if (isNaN(lat) || isNaN(long)) {
  //     toast.error("Please enter valid coordinates.");
  //     return;
  //   }

  //   var location = new window.google.maps.LatLng(lat, long);

  //   geocoder.geocode({ location: location }, function (results, status) {
  //     if (status === "OK") {
  //       if (results[0]) {
  //         var formattedAddress = results[0].formatted_address;
  //         var modifiedAddress = formattedAddress.replace(/\s\w+\+\w+/g, "");
  //         setAddress(modifiedAddress);
  //       } else {
  //         toast.error("No results found.");
  //       }
  //     } else {
  //       toast.error("Please enter a valid address!");
  //     }
  //   });
  // }

  // Function to open the edit profile modal
  const handleEditProfile = () => {
    setShowEditModal(true);
  };

  // Function to close the edit profile modal
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  
  const updateVolunteer = (volunteerId, updatedVolunteer) => {
    volunteerService
      .updateVolunteer(volunteerId, updatedVolunteer)
      .then((response) => {
        toast.info(response.data);
        handleCloseEditModal(); 
        
        const updatedVolunteers = props.currentUser.volunteers.map((volunteer) => {
           if (volunteer.volunteerId === volunteerId) {
             return { ...volunteer, ...updatedVolunteer };
           }
           return volunteer;
         });
         props.updateVolunteers(updatedVolunteers);
        
      })
      .catch((error) => {
        toast.error(error.data);
      });
  };

  const handleSaveChanges = () => {
    const updatedData = { ...data };
    
    setData(updatedData);
    handleCloseEditModal();
  };


  return (
    <section>
      
      <Container className="profile">
        <Row className="py-5 justify-content-center">
          <Col xs={12} sm={10} md={8}>
            <Card className="p-3 shadow-lg" style={{ height: "200%%" }}>
              <Row>
                <Col xs={4} className="text-center">
                  <Image
                    src={defaultProfile}
                    roundedCircle
                    thumbnail
                    className="profile-image"
                  ></Image>
                  <h4 className="pt-2">
                    {props.currentUser.volunteer.firstName}{" "}
                    {props.currentUser.volunteer.lastName}
                  </h4>
                  <h6 className="text-secondary">volunteer</h6>
                </Col>
                <Col xs={8}>
                  <h1 className="text-secondary">volunteer Profile</h1>
                  <hr />
                  <Row className="py-2">
                    <Form.Label>Email:</Form.Label>
                    <h5>{props.currentUser.user.email}</h5>
                  </Row>
                  <Row>
                    <Form.Label>Contact Number:</Form.Label>
                    <h5>{props.currentUser.volunteer.contactNumber}</h5>
                  </Row>
                  <Row>
                    <Form.Label>Date of Birth:</Form.Label>
                    <h5>{props.currentUser.volunteer.dob}</h5>
                  </Row>
                  <Row>
                    <Form.Label>Address:</Form.Label>
                    <h5>{address}</h5>
                  </Row>
                  <Row>
                    <Form.Label>Group Name:</Form.Label>
                    <h5>{props.currentUser.volunteer.groupName}</h5>
                  </Row>
                  {/* <Row>
                    <Form.Label>Health Condition:</Form.Label>
                    <h5>{props.currentUser.volunteer.condition}</h5>
                  </Row>
                  {props.currentUser.volunteer.caregiver !== "" && (
                    <Row>
                      <Form.Label>Caregiver:</Form.Label>
                      <h5>{props.currentUser.volunteer.caregiver}</h5>
                    </Row> */}
                    <Button variant="primary" onClick={handleEditProfile}>
                        Edit Profile
                    </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Edit Profile Modal */}
        <Modal show={showEditModal} onHide={handleCloseEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
          <div className="form-group">
          <label htmlFor="firstname">First Name </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            value={selectedVolunteer.firstName}
            onChange={(e) => {
              setSelectedVolunteer(prevVolunteer => ({
                ...prevVolunteer,
                firstName: e.target.value,
              }));
            }}
            
          />
        </div>
        <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                value={selectedVolunteer.lastName}
                onChange={(e) => {
                  setSelectedVolunteer(prevVolunteer => ({
                    ...prevVolunteer,
                    lastName: e.target.value,
                  }));
                }}
              />
        </div>
        <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={selectedVolunteer.user.email}
                onChange={(e) => {
                  setSelectedVolunteer(prevVolunteer => ({
                    ...prevVolunteer,
                    user: {
                      ...prevVolunteer.user,
                      email: e.target.value,
                    },
                  }));
                }}
              />
            </div>
              {/* <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={selectedMember.password}
                  onChange={(e) => {
                    const updatedMember = {
                      ...selectedMember,
                      password: e.target.value,
                    };
                    this.setState({ selectedMember: updatedMember });
                  }}
                />
              </div> */}
              <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="number"
                className="form-control"
                id="contactNumber"
                value={selectedVolunteer.contactNumber}
                onChange={(e) => {
                  setSelectedVolunteer(prevVolunteer => ({
                    ...prevVolunteer,
                    contactNumber: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="text"
                className="form-control"
                id="dob"
                value={selectedVolunteer.dob}
                onChange={(e) => {
                  setSelectedVolunteer(prevVolunteer => ({
                    ...prevVolunteer,
                    dob: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="groupName">Group Name</label>
              <input
                type="text"
                className="form-control"
                id="groupName"
                value={selectedVolunteer.groupName}
                onChange={(e) => {
                  setSelectedVolunteer(prevVolunteer => ({
                    ...prevVolunteer,
                    groupName: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="station">Station</label>
              <input
                type="text"
                className="form-control"
                id="station"
                value={selectedVolunteer.station}
                onChange={(e) => {
                  setSelectedVolunteer(prevVolunteer => ({
                    ...prevVolunteer,
                    station: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="isApproved">Approve Application</label>
              <select
                className="form-control"
                id="isApproved"
                value={data?.user?.isApproved || false}
                onChange={(e) => {
                  const updatedData = { ...data };
                  updatedData.user.isApproved = e.target.value === "true";
                  setData(updatedData);
                }}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};


export default PVProfile;