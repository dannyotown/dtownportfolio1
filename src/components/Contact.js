import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function ContactMe() {
  const MySwal = withReactContent(Swal);
  const [getForm, setForm] = useState({
    email: "",
    subject: "",
    body: ""
  });
  const onChangeHandler = e => {
    e.preventDefault();
    setForm({
      ...getForm,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (getForm.email === "" || getForm.subject === "" || getForm.body === "") {
      MySwal.fire({
        icon: "error",
        iconHtml: '<i class="fas fa-bug">X</i>',
        title: "Make sure all fields are filled in!"
      });
    } else {
      axios
        .post(
          "https://portfoliobackendemailer.herokuapp.com/api/email",
          getForm
        )
        .then(() => {
          MySwal.fire({
            icon: "success",
            iconHtml: '<i class="fa fa-check">✓</i>',
            title: "Message Received!"
          });
          setForm({
            email: "",
            subject: "",
            body: ""
          });
        })
        .catch(() => {
          MySwal.fire({
            icon: "error",
            iconHtml: '<i class="fas fa-bug">X</i>',
            title: "Server Error, Please Try Again Later!"
          });
        });
    }
  };
  return (
    <>
      <div className="ContactDiv" id="ScrollToContact">
        <h1>Contact Me</h1>
        <div className="ContactUnderline"></div>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            className="regFormInput"
            placeholder="Your Email"
            value={getForm.email}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="subject"
            className="regFormInput"
            placeholder="Subject"
            value={getForm.subject}
            onChange={onChangeHandler}
          />
          <textarea
            type="text"
            name="body"
            className="difFormInput"
            placeholder="Your Message"
            value={getForm.body}
            onChange={onChangeHandler}
          />
          <button className="formButton" type="submit">
            {" "}
            Send{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactMe;
