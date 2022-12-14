import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

function Contact() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    phone:"",
    message:"",
  });
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({...userData, [name]: value});
  }



//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

  const submitData = async (e) => {
    e.preventDefault();
    const {firstName, lastName, email, phone, message} = userData;
    setButtonText('Sending...');
    if(firstName && lastName && email && phone && message){

    let response = await fetch('https://production-portfolio-1adc3-default-rtdb.firebaseio.com/contactRecords.json',{
        method: "POST",
        headers:{
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            firstName, lastName, email, phone, message,
        }),
    });
    setButtonText("Send");
    // let result = await response.json();
    setUserData({
        firstName: "",
        email:"",
        lastName: "",
        message:"",
        phone:"",
    });

    if(response){
        setStatus({success: true, message: "Message Sent Successfully"});
    }else{
        setStatus({success: false, message:"Something went wrong, please try again later."})
    }

    // if(result.code === 200){
    //     setStatus({success: true, message: "Message Sent Successfully"});
    // }else{
    //     setStatus({success: false, message:"Something went wrong, please try again later."})
    // }
    }
        else{
            setStatus({success: false, message:"Please fill form data."})
        }

  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={submitData}> 
                {/* onSubmit={handleSubmit} */}
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    placeholder="First Name"
                    onChange={postUserData}
                                      />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    placeholder="Last Name"
                    onChange={postUserData}
                                     />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    placeholder="Email Address"
                    onChange={postUserData}
                                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    name="phone"
                    value={userData.phone}
                    placeholder="Phone Number"
                    onChange={postUserData}
                                  />
                </Col>

                <Col>
                  <textarea
                    row="6"
                    name="message"
                    value={userData.message}
                    placeholder="Message"
                    onChange={postUserData}
                                    />
                  <button type="submit" >
                  {/* onClick={submitData} */}
                    <span>{buttonText}</span>
                  </button>
                </Col>

                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}{" "}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
