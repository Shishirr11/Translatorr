import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import image from "../images/login.jpg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const history = useNavigate();
  var bg = {
    backgroundImage: `url(${image})`,
    
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [inpval, setInpval] = useState({
  //   email: "",
  //   password: "",
  // });
  // console.log(inpval);

  // const getdata = (e) => {
  //   // console.log(e.target.value);
  //   const { value, name } = e.target;
  //   // console.log(value,name);
  //   setInpval(() => {
  //     return {
  //       ...inpval,
  //       [name]: value,
  //     };
  //   });
  // };

  const validate = (e) => {
    e.preventDefault();
    // const { email, password } = inpval;
    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("please enter a valid email address");
    } else if (password === "") {
      alert("enter a password");
    } else {
      handlesubmit();
      // history("/firstpage");
    }
  };
  const handlesubmit=(e)=>{
    fetch("http://localhost:8000/signin", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email:email,
        pass:password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data);
        if(data==="Login successfull"){
          history("/firstpage");
        }
      });
      console.log(email,password);
  }

  return (
    <>
      <div
        className="image"
        style={{
          ...bg,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="mx-4">
          <h3 className="text-center" style={{ color: "white" }}>
            Sign In
          </h3>
          <Form onSubmit={handlesubmit}> 
            <Form.Group className="mx-4 my-3">
              <Form.Control
                type="email"
                name="email"
                // onChange={(e) => getdata(e)}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
              />
            </Form.Group>
            <Form.Group className="mx-4 my-3">
              <Form.Control
                type="password"
                name="password"
                // onChange={(e) => getdata(e)}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
              />
            </Form.Group>
            <div style={{display: "flex", justifyContent: "center"}}>
              <Button
                variant="success"
                className="mx-4"
                onClick={validate}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
          <p className="mt-3 mx-5" style={{ color: "white" }}>
            Don't have an account ?{" "}
            <span>
              <NavLink style={{ color: "red" }} to="/signup">
                Sign Up
              </NavLink>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
