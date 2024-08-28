import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Donation.css";

const Donation = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, mobile, email, message } = formData;
    if (name && mobile && email && message) {
      toast.success("Form submitted successfully!");
      setFormData({ name: "", mobile: "", email: "", message: "" });
    } else {
      toast.error("Please fill out all fields.");
    }
  };

  return (
    <>
      <Header />
      <div className="home-mother">
        <div className="container" style={{ padding: "30px" }}>
          <h3 className="entry-title motherhouse">
            <a href="/donation">Donations</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp; </Link>
            <span className="pagename">Donations</span>
          </div>
        </div>
      </div>
      <Container className="prayer-form-container mt-5 mb-5">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className="form-card">
              <h4 className="form-title">Donations</h4>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label>
                        Name{" "}
                        <span className="text-danger font-weight-bold">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formMobile">
                      <Form.Label>
                        Mobile{" "}
                        <span className="text-danger font-weight-bold">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your mobile number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <br />
                <Form.Group controlId="formEmail">
                  <Form.Label>
                    Email{" "}
                    <span className="text-danger font-weight-bold">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="formMessage">
                  <Form.Label>
                    Message{" "}
                    <span className="text-danger font-weight-bold">*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message request"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Form.Group>
                <br />
                <Button
                  variant="success"
                  type="submit"
                  className="submit-button"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Donation;
