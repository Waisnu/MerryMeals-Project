import React, { useState, useEffect } from "react";
import { Container, Col, Row, Form, Card, Button, Modal } from "react-bootstrap";
import mealService from "../service/MealService";
import MealOrderMap from "./MealOrderMap"; // MAPA=
import { calculateDistance } from "./distanceUtil"; // ALGORITHM PARA SA LATITUDE + LONGTITUDE




const MealOrder = (props) => {
  const [mealItem, setMealItem] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [mondayMeal, setMondayMeal] = useState("");
  const [tuesdayMeal, setTuesdayMeal] = useState("");
  const [wednesdayMeal, setWednesdayMeal] = useState("");
  const [thursdayMeal, setThursdayMeal] = useState("");
  const [fridayMeal, setFridayMeal] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [, setNearestBranch] = useState(null);
  


  useEffect(() => {
    menuData();
    setCurrentUser(props.currentUser.member);
    fetchCurrentLocation();
  }, [props.currentUser]);

  const menuData = () => {
    mealService.getMealItems().then((response) => {
      setMealItem(response.data);
    });
  };

  const fetchCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCurrentLocation({ latitude, longitude });

          console.log("Current Latitude:", latitude);
          console.log("Current Longitude:", longitude);
        },
        
        
        (error) => {
          console.error("Error fetching current location:", error);
        }
      );
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  };
 

  



  const handleSubmit = async (event) => {

    
    event.preventDefault();
    setMondayMeal("");
  setTuesdayMeal("");
  setWednesdayMeal("");
  setThursdayMeal("");
  setFridayMeal("");
    
    const currentMember = currentUser.memberId;
    const mealData = {
      currentMember,
      mondayMeal,
      tuesdayMeal,
      wednesdayMeal,
      thursdayMeal,
      fridayMeal,
    };

    
    

    
    const serviceCenters = [
      { name: "Center A", latitude: 7.065478, longitude: 125.605088 }, //Davao branch , Ezekiel Zafra waz here.
      { name: "Center B", latitude: 10.338588, longitude: 123.912023 }, //Cebu Branch / UC-Banilad lyn
      { name: "Center C", latitude: 10.350335, longitude: 123.948586 }, //Vincent's Area -  Carnivale 
      { name: "Center B", latitude: 13.447059, longitude: 121.701677}, //Manila Branch - si marc? tahi...
      
      // Add more service centers as needed
    ];
   
    
    
    
    

  
    if (currentLocation.latitude && currentLocation.longitude) {
      const { latitude, longitude } = currentLocation;

      let closestCenter = null;
      let closestDistance = Infinity;

      for (const center of serviceCenters) {
        const distance = calculateDistance(
          latitude,
          longitude,
          center.latitude,
          center.longitude
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestCenter = center;
        }
      }
    
      console.log("Delivery Distance:", closestDistance);
    
      // Show modal based on distance
      if (closestCenter) {
        mealData.closestServiceCenter = closestCenter.name;
        mealData.deliveryType = closestDistance <= 10.0000 ? "hot" : "cold";
        console.log(`Nearest Service Center: ${closestCenter.name}`);
        console.log(closestDistance <= 10.0000 ? "Inside 10km: Hot Meal" : "Outside 10km: Cold Meal");
        setNearestBranch({
          name: closestCenter.name,
          distance: closestDistance,
          latitude: closestCenter.latitude, // Add latitude
          longitude: closestCenter.longitude,
        });
        
        const modalMessage = mealData.deliveryType === "hot"
          ? `We found a nearby branch around you! Rest assured we will deliver your HOT MEAL shortly! 🚀`
          : `We will deliver your COLD MEAL. ❄️`;
      
        setModalContent(
          <>
            <div className="text-center">
              <div className="mb-4">
                {mealData.deliveryType === "hot" ? (
                  <span role="img" aria-label="Hot Meal" className="modal-icon">
                    🔥
                  </span>
                ) : (
                  <span role="img" aria-label="Cold Meal" className="modal-icon">
                    ❄️
                  </span>
                )}
              </div>
              <div className="modal-message">
                {modalMessage}
                {mealData.closestServiceCenter && (
                  <p className="mt-2">
                    Estimated distance to nearest branch: <span className="fw-bold">{closestDistance.toFixed(2)} km</span>
                  </p>
                )}
              </div>
              <div className="mt-4">
                <Button variant="primary" onClick={() => setShowModal(false)}>Select again</Button>
              </div>
            </div>
          </>
        );
      
        setShowModal(true);
        
      }
      
      
    }
    
  };

  

  
  return (
    
    <Container>
      
      
      <Row className="justify-content-center">
        <Col sm={5}>
          <Card className="shadow registration-card">
      
            
            <h2 className="fw-bold">Meal Plan</h2>
            
            <Form onSubmit={handleSubmit}>
              
              <Form.Group>
                <Form.Label>
                  <h5 className="text-secondary pt-3">Monday Meal</h5>
                </Form.Label>
                <Form.Control
                  as="select"
                  value={mondayMeal}
                  onChange={(e) => setMondayMeal(e.target.value)}
                  required
                >
                  <option value="">Select your Monday Meal Option</option>
                  {mealItem
                    .filter((item) => item.day === "Monday")
                    .map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <h5 className="text-secondary pt-3">Tuesday Meal</h5>
                </Form.Label>
                <Form.Control
                  as="select"
                  value={tuesdayMeal}
                  onChange={(e) => setTuesdayMeal(e.target.value)}
                  required
                >
                  <option value="">Select your Tuesday Meal Option</option>
                  {mealItem
                    .filter((item) => item.day === "Tuesday")
                    .map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <h5 className="text-secondary pt-3">Wednesday Meal</h5>
                </Form.Label>
                <Form.Control
                  as="select"
                  value={wednesdayMeal}
                  onChange={(e) => setWednesdayMeal(e.target.value)}
                  required
                >
                  <option value="">Select your Wednesday Meal Option</option>
                  {mealItem
                    .filter((item) => item.day === "Wednesday")
                    .map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <h5 className="text-secondary pt-3">Thursday Meal</h5>
                </Form.Label>
                <Form.Control
                  as="select"
                  value={thursdayMeal}
                  onChange={(e) => setThursdayMeal(e.target.value)}
                  required
                >
                  <option value="">Select your Thursday Meal Option</option>
                  {mealItem
                    .filter((item) => item.day === "Thursday")
                    .map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <h5 className="text-secondary pt-3">Friday Meal</h5>
                </Form.Label>
                <Form.Control
                  as="select"
                  value={fridayMeal}
                  onChange={(e) => setFridayMeal(e.target.value)}
                  required
                >
                  
                  <option value="">Select your Friday Meal Option</option>
                  {mealItem
                    .filter((item) => item.day === "Friday")
                    .map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                      
                    ))}
                    
                </Form.Control>
                
              </Form.Group>
              
              
              <Button
                variant="primary"
                type="submit"
                className="rounded-pill my-3 py-2 px-5 fw-semibold"
                disabled={!currentLocation} // Disable the button if location not available
              >
                Order
              </Button>
            </Form> 
            
          </Card>
          
        </Col>
        
        
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
      </Modal>

<MealOrderMap/>
      {currentLocation?.latitude && currentLocation?.longitude && (
        <div className="current-location">
          <h4>Your Current Location:</h4>
          <p>Latitude: {currentLocation.latitude}</p>
          <p>Longitude: {currentLocation.longitude}</p>
        </div>
      )}
     

     
    </Container>
  );
};

export default MealOrder;
