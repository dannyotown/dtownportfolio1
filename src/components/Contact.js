import React from "react";

function ContactMe() {
  return (
    <>
      <div className="ContactDiv">
        <h1>Contact Me</h1>
        <div className="ContactUnderline"></div>
        <div className="ContactMeBlurb">
          Have a question or want to work together?
        </div>
        <form>
          <input type="text" className="regFormInput" placeholder="Name" />
          <input type="text" className="regFormInput" placeholder="Email" />
          <textarea
            type="text"
            className="difFormInput"
            placeholder="Your Message"
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
