import React from "react";
import emailjs from "emailjs-com";
import "./SendEmail.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_78mq5j8",
        "rocket_report",
        e.target,
        "czoX5HBJbKnSemdnM"
      )
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="containerE" style={{ display: 'flex', flexDirection: 'column' }}>
    <form className="contact-form" onSubmit={sendEmail}>
      <p className={"p1"}>Would you like to send an email to your healthcare provider?</p>
      <p className={"p2"}> Email:</p>
      <input type="email" name="user_email" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
}
