import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Cards from "./Card"
// import Container from "react-bootstrap/Container";

function Forms() {
  const [data, setData] = useState({
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    image: "",
    password: "",
  });

 
  const [value, setValue] = useState(false);
  const [showCard, setshowCard] = useState(false);
  const [escape, setEscape] = useState();
 

  const handleData = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const hadleSubmit =(e) => {
 
    e.preventDefault();
    if (Object.values(data).every((value) => value.trim() !== "")) {
      
      setshowCard(true)  
    } 
 

   
  };

  const handleButton =()=>{
    if (Object.values(data).every((value) => value.trim() !== "")) {
      setEscape(false)
    } else {
      setEscape(true)
    }
   }

  return (
    <Container className="mt-4 ">
      <h2 className="text-danger">FORMS</h2>
      <Form onSubmit={hadleSubmit} className="w-50">
        <Form.Group className="mb-3">
          <Form.Label>Email adress</Form.Label>
          <Form.Control
        
            type="email"
            placeholder="Enter email"
            onChange={handleData}
            // value={email}
            id="email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username : </Form.Label>
          <Form.Control
       
            type="text"
            placeholder="enter your username"
            // value={username}
            onChange={handleData}
            id="username"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>First name:</Form.Label>
          <Form.Control
     
            type="text"
            placeholder="First name"
            // value={firstname}
            onChange={handleData}
            id="firstname"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last name: </Form.Label>
          <Form.Control
        
            type="text"
            placeholder="Last name"
            // value={lastname}
            onChange={handleData}
            id="lastname"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image:</Form.Label>

          <Form.Control
            type="url"
            placeholder="image url"
          
            onChange={handleData}
            id="image"
            // value={image}
          />
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Label>Password:</Form.Label>
        <InputGroup className="group">
       
        <Form.Control
              type={value ? "text" : "password"} 
              placeholder="Password"
              onChange={handleData}
              id="password"
         
            />
          
          <Button
            type="button"
            onClick={() => setValue(!value)}
            variant="outline-secondary"
            className="bg-dark text-white"
          >
            Show/Hidden
          </Button>
        </InputGroup>
        <div className="text-center">
        <Button type="submit" onMouseEnter={handleButton} onMouseLeave ={()=>setEscape(false)} className={escape ? "submit" : ""}>
          Submit
        </Button>
        </div>
      </Form>
      {showCard && <Cards data={data}  />}
    </Container>
  );
}
export default Forms;
