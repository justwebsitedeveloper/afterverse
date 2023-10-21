import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import "./PartnerShip.css";
import PrimaryButton from "components/PrimaryButton";


function PartnerShip() {

  return (
    <>
      <div className="container partnership">
        <Row className="partnership_container">
          <Col lg={5}>
            <h2  >PLATFORM</h2>
            <h3  >PartnerShip</h3>
            <h3  >&amp; Collaboration</h3>
            <p  >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col lg={5}>
            <Form>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail"  >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="email" placeholder="" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail"  >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="email" placeholder="" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail"  >
                    <Form.Label>Email ID</Form.Label>
                    <Form.Control type="email" placeholder="" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail"  >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="email" placeholder="" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"  
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={8} />
              </Form.Group>
              <div  >
              <PrimaryButton>Submit</PrimaryButton>
              </div>
            
              {/* <Button variant="primary" type="submit">
                Submit
              </Button> */}
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PartnerShip;
