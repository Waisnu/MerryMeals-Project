import { useState, useEffect } from "react";
import LoadingSpinner from "./Loading";
import { Container, Col, Row, Form, Card, Button } from "react-bootstrap";
import mealService from "../service/MealService";
import orderService from "../service/OrderService";
import { toast } from "react-toastify";

const MealOrder = (props) => {
  const [mealItem, setMealItem] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [memberOrder, setMemberOrder] = useState();
  const mondayMenuItems = mealItem.filter((item) => item.day === "Monday");
  const tuesdayMenuItems = mealItem.filter((item) => item.day === "Tuesday");
  const wednesdayMenuItems = mealItem.filter(
    (item) => item.day === "Wednesday"
  );
  const thursdayMenuItems = mealItem.filter((item) => item.day === "Thursday");
  const fridayMenuItems = mealItem.filter((item) => item.day === "Friday");
  const [mondayMeal, setMondayMeal] = useState([]);
  const [tuesdayMeal, setTuesdayMeal] = useState([]);
  const [wednesdayMeal, setWednesdayMeal] = useState([]);
  const [thursdayMeal, setThursdayMeal] = useState([]);
  const [fridayMeal, setFridayMeal] = useState([]);

  useEffect(() => {
    menuData();
    setCurrentUser(props.currentUser.member);
  }, [props.currentUser]);

  const menuData = () => {
    mealService.getMealItems().then((response) => {
      setMealItem(response.data);
    });
  };

  const handleMondayMealChange = (event) => {
    setMondayMeal(event.target.value);
  };

  const handleTuesdayMealChange = (event) => {
    setTuesdayMeal(event.target.value);
  };

  const handleWednesdayMealChange = (event) => {
    setWednesdayMeal(event.target.value);
  };

  const handleThursdayMealChange = (event) => {
    setThursdayMeal(event.target.value);
  };

  const handleFridayMealChange = (event) => {
    setFridayMeal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentMember = currentUser.memberId;
    const mealData = {
      currentMember,
      mondayMeal,
      tuesdayMeal,
      wednesdayMeal,
      thursdayMeal,
      fridayMeal,
    };
    orderService
      .saveOrder(mealData)
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.error(
          error.message || "Oops! Something went wrong. Please try again!"
        );
      });
  };

  if (!currentUser) {
    return <LoadingSpinner></LoadingSpinner>;
  }
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
                  onChange={handleMondayMealChange}
                  required
                >
                  <option value="">Select your Monday Meal Option</option>
                  {mondayMenuItems.map((item) => (
                    <option value={item.name}>{item.name}</option>
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
                  onChange={handleTuesdayMealChange}
                  required
                >
                  <option value="">Select you Tuesday Meal Option</option>
                  {tuesdayMenuItems.map((item) => (
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
                  onChange={handleWednesdayMealChange}
                  required
                >
                  <option value="">Select you Wednesday Meal Option</option>
                  {wednesdayMenuItems.map((item) => (
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
                  onChange={handleThursdayMealChange}
                  required
                >
                  <option value="">Select you Thursday Meal Option</option>
                  {thursdayMenuItems.map((item) => (
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
                  onChange={handleFridayMealChange}
                  required
                >
                  <option value="">Select you Friday Meal Option</option>
                  {fridayMenuItems.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="rounded-pill my-3 py-2 px-5 fw-semibold "
              >
                Order
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MealOrder;
