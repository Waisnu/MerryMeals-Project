import React from "react";
import "../css/DonationComponent.css";
import {
  Form,
  Tabs,
  Tab,
  Row,
  Button,
  Col,
  Container,
  Stack,
} from "react-bootstrap";
import { useState } from "react";
import PaymentComponent from './PaymentComponent';


const DonationComponent = () => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const [frequency, setFrequency] = useState("One Time");
  const [amount, setAmount] = useState("100");
  const [otherAmount, setOtherAmount] = useState("");
  const [showOtherInput, setShowOtherInput] = useState(false);

  const submitButton = (e) => {
    e.preventDefault();
  };

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setAmount(selectedValue);

    if (selectedValue === "other") {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
  };


  return (
    <Container id="custom-container1">
      <Row>
        <Col id="custom-column1">
          <Tabs activeKey={currentTab} id="controlled-tab-example">
            <Tab eventKey={0} title="DONATION" disabled={currentTab !== 0}>
              <form onSubmit={submitButton}>
                <h4 class="mt-4 mb-4">HOW WOULD YOU LIKE TO DONATE?</h4>
                <Row className="mb-3">
                  <Form.Group
                    controlId="formGridFrequency"
                    className="col col-sm-6"
                  >
                    <Form.Label>Frequency</Form.Label>
                    <Form.Select
                      defaultValue="One Time"
                      className="form-control"
                      id="frequency"
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      required
                    >
                      <option value="One Time">One Time</option>
                      <option value="Monthly">Monthly</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    controlId="formGridAmount"
                    className="col col-sm-6"
                  >
                    <Form.Label>Amount</Form.Label>
                    <Form.Select
                      defaultValue="100"
                      className="form-control"
                      id="amount"
                      value={amount}
                      onChange={handleDropdownChange}
                      required
                    >
                      <option value="25">$25</option>
                      <option value="50">$50</option>
                      <option value="100">$100</option>
                      <option value="250">$250</option>
                      <option value="500">$500</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  {showOtherInput && (
                    <Form.Group
                      controlId="formGridOther"
                      className="col col-sm-6"
                    >
                      <Form.Label>Other Amount</Form.Label>
                      <Form.Control
                        type="number"
                        id="otherAmount"
                        value={otherAmount}
                        onChange={(e) => setOtherAmount(e.target.value)}
                        className="form-control"
                        required
                      />
                    </Form.Group>
                  )}
                </Row>
                <Button
                  type="submit"
                  className="success mb-3"
                  disabled={currentTab === 3}
                  onClick={() => setCurrentTab((prev) => prev + 1)}
                >
                  Next
                </Button>
              </form>
            </Tab>
            <Tab eventKey={1} title="CONFIRMATION" disabled={currentTab !== 1}>
              <h4 class="mt-4 mb-3">TODAY'S DONATION </h4>
              <h4 class="mb-4 text-secondary">${amount}</h4>
              <h4 class="mb-4">FREQUENCY</h4>
              <h4 class="mb-4 text-secondary">{frequency}</h4>
              <Button
                style={{ width: "8rem" }}
                className="success me-4"
                disabled={currentTab === 0}
                onClick={() => setCurrentTab((prev) => prev - 1)}
              >
                Prev
              </Button>
              <Button
                style={{ width: "8rem" }}
                className="success"
                disabled={currentTab === 3}
                onClick={() => setCurrentTab((prev) => prev + 1)}
              >
                Next
              </Button>
            </Tab>
              
            <Tab eventKey={2} title="PAYMENT" disabled={currentTab !== 2}>
              <PaymentComponent/>

              <Button
                className="success"
                disabled={currentTab === 0}
                onClick={() => setCurrentTab((prev) => prev - 1)}
              >
                Prev
              </Button>
            </Tab>
          </Tabs>
        </Col>
      </Row>
      <Stack
        gap={2}
        direction="horizontal"
        className="mt-3 justify-content-center"
      ></Stack>
    </Container>
  );
};

export default DonationComponent;
