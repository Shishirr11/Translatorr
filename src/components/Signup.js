import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import image from "../images/login.jpg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Login() {
  var bg = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const history = useNavigate();

  // const [inpval, setInpval] = useState({
  //   Firstname: "",
  //   Lastname: "",
  //   date: "",
  //   email: "",
  //   password: "",
  // });
  // console.log(inpval);

  // const getdata = (e) => {
  //   // console.log(e.target.value);
  //   const { value, name} = e.target;
  //   setInpval(() => {
  //     return {
  //       ...inpval,
  //       [name]: value,
  //     };
  //   });
  // };
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [Firstname, setFirstName] = useState('');
  const [Lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');


  const validate = (e) => {
    e.preventDefault();
    // const { Firstname,Lastname, date, email, password } = inpval;
    if (Firstname === "") {
      alert("name field is required");
    }
    else if (Lastname === "") {
      alert("name field is required");
    }
    else if (date === "") {
      alert("dob field is required");
    } else if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("please enter a valid email address");
    } else if (password === "") {
      alert("enter a password");
    } else {
      // alert("Login sucessful");
      handlesubmit();
    }
  };

  const handlesubmit = (e) => {
    // e.preventDefault();
    fetch("http://localhost:8000/signup",{
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
            fname:Firstname,
            lname:Lastname,
            dob:date,
            email:email,
            pass:password,
        }),
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        alert(data);
        if(data==="Registration successfull"){
          history("/firstpage");
        }
    });
    // console.log(`The username you entered in sign up  was: ${Firstname}`);
    console.log(Firstname,Lastname,date,email,password);
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
            Sign Up
          </h3>
          <Form onSubmit={handlesubmit}>
            <Form.Group className="mx-4 my-3">
              <Form.Control
                type="text"
                name="Firstname"
                // onChange={(e) => getdata(e)}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Firstname"
              />
            </Form.Group>
            <Form.Group className="mx-4 my-3">
              <Form.Control
                type="text"
                name="Lastname"
                // onChange={e => getdata(e)}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Lastname"
              />
            </Form.Group>
            <Form.Group className="mx-4 my-3">
              <Form.Control type="date" name="date" onChange={(e) => setDate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mx-4 my-3">
              <Form.Control
                type="email"
                name="email"
                // onChange={getdata}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" Your Email"
              />
            </Form.Group>
            <Form.Group className="mx-4 my-3">
              <Form.Control
                type="password"
                name="password"
                // onChange={getdata}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" Your Password"
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
            Already have an account ?
            <span>
              <NavLink style={{ color: "red" }} to="/signin">
                Sign In
              </NavLink>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
