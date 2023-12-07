import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// import Container from "react-bootstrap/Container";

function Forms() {
  const [data, setData] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    image: "",
    password: "",
  });

  const { username, password, email, firstName, lastName, image } = data;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`  
username: ${username}
email: ${email},
password: ${password},
firstName: ${firstName},
lastName: ${lastName},
image: ${image},

`);

    setData({
      username: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      image: "",
    });
  };

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOut = (e) => {
    e.target.classList.remove("escape");
  };
  const handleShow = (e) => {
    if (e.target.previousSibling.type === "password") {
      e.target.previousSibling.type = "text";
    } else if(e.target.previousSibling.type === "text") {
      e.target.previousSibling.type = "password";
    }
  };

  const handleButton = (e) => {
    if (!username || !password || (!email || !email.includes("@")) || !firstName || !lastName) {
      e.target.classList.add("escape");
    } else {
      e.target.classList.remove("escape");
    }
  };

  return (
    <Container className="mt-4 ">
      <h2 className="text-danger">FORMS</h2>
      <Form onSubmit={handleFormSubmit} className="w-50">
        <Form.Group className="mb-3">
          <Form.Label>Email adress</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter email"
            onChange={handleData}
            value={email}
            name="email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username : {username}</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="enter your username"
            value={username}
            onChange={handleData}
            name="username"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
            value={firstName}
            onChange={handleData}
            name="firstName"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last name: </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
            onChange={handleData}
            value={lastName}
            name="lastName"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image:</Form.Label>

          <Form.Control
            type="url"
            placeholder="Username"
            aria-describedby="inputGroupPrepend"
            required
            onChange={handleData}
            name="password"
            value={password}
          />
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
        </Form.Group>

        <InputGroup>
          <Form.Control
            placeholder="Password"
            type="password"
            aria-label="Recipient's username with two button addons"
          />
          <Button
           type="button"
            onClick={handleShow}
            variant="outline-secondary"
            className="bg-dark text-white"
          >
            Show/Hidden
          </Button>
        </InputGroup>
        <div className="text-center">
          <Button
            onMouseOver={handleButton}
            onMouseOut={handleOut}
            className="bg-gray border mt-4 border-primary d-inline-block m-auto"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Forms;
