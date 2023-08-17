import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import mealService from "../service/MealService";
const MenuComponent = () => {
  const [mealItem, setMealItem] = useState([]);
  const mondayMenuItems = mealItem.filter((item) => item.day === "Monday");
  const tuesdayMenuItems = mealItem.filter((item) => item.day === "Tuesday");
  const wednesdayMenuItems = mealItem.filter((item) => item.day === "Wednesday");
  const thursdayMenuItems = mealItem.filter((item) => item.day === "Thursday");
  const fridayMenuItems = mealItem.filter((item) => item.day === "Friday");
  const menuData = () => {
    mealService.getMealItems().then((response) => {
      setMealItem(response.data);
    });
  };
  useEffect(() => {
    menuData();
  }, []);

  return (  
    <Container>
      <h1 className="mt-3 py-3">MEAL MENU</h1>
      <Row className="justify-content-center">
        <Table bordered striped className="table table-rounded mb-5">
          <tbody>
            <tr>
              <td>
                <h4 className="p-5">Monday</h4>
              </td>
              {mondayMenuItems.map((item) => (
              <td className="pt-5">
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </td>
            ))}
            </tr>
            <tr>
              <td>
                <h4 className="p-5">Tuesday</h4>
              </td>
              {tuesdayMenuItems.map((item) => (
              <td className="pt-5">
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </td>
            ))}
            </tr>
            <tr>
              <td>
                <h4 className="p-5">Wednesday</h4>
              </td>
              {wednesdayMenuItems.map((item) => (
              <td className="pt-5">
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </td>
            ))}
            </tr>
            <tr>
              <td>
                <h4 className="p-5">Thursday</h4>
              </td>
              {thursdayMenuItems.map((item) => (
              <td className="pt-5">
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </td>
            ))}
            </tr>
            <tr>
              <td>
                <h4 className="p-5">Friday</h4>
              </td>
              {fridayMenuItems.map((item) => (
              <td className="pt-5">
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </td>
            ))}
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default MenuComponent;
