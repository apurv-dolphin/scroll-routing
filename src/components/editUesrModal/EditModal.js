import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { getEditUser, getUser } from "../../services/userFetch";
import "./editmodal.css";
import Swal from "sweetalert2";

export default function EditModal(props) {
  const { singleuser, onHide } = props;
  const [userData, setUserData] = useState({
    name: singleuser?.name,
    username: singleuser?.username,
    email: singleuser?.email,
    phone: singleuser?.phone,
    city: singleuser?.address.city,
    zipcode: singleuser?.address.zipcode,
    website: singleuser?.website,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const submitData = () => {
    onHide();
    Swal.fire({
      title: "Do you want to update the user information?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        const data = await getEditUser(userData);
        console.log(data);
        await getUser();
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            User Data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Form>
            <Container>
              <Row>
                <Col xs={6} md={6}>
                  <Form.Group className="mb-3" controlId="name.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={userData?.name || ""}
                      placeholder="enter your name"
                      autoFocus
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={6} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="username.ControlInput3"
                  >
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={userData?.username || ""}
                      placeholder="username"
                      autoFocus
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="email.ControlInput3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={userData?.email || ""}
                      placeholder="name@example.com"
                      autoFocus
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="phone.ControlInput1">
                    <Form.Label>Phone-Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={userData?.phone || ""}
                      placeholder="enter Phone-number"
                      autoFocus
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={11} md={7}>
                  <Form.Group className="mb-3" controlId="city.ControlInput1">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={userData?.city || ""}
                      placeholder="enter city name"
                      autoFocus
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={7} md={5}>
                  <Form.Group className="mb-3" controlId="zip.ControlInput3">
                    <Form.Label>ZIP-code</Form.Label>
                    <Form.Control
                      type="text"
                      name="zipcode"
                      value={userData?.zipcode || ""}
                      placeholder="enter Zip-code"
                      autoFocus
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="website.ControlInput1"
                  >
                    <Form.Label>WebSite</Form.Label>
                    <Form.Control
                      type="text"
                      name="website"
                      value={userData?.website || ""}
                      placeholder="enter your site url"
                      autoFocus
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>

          <Button variant="success" onClick={submitData}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
