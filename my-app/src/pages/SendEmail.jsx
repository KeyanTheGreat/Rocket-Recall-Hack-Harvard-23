import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_78mq5j8', 'rocket_report', e.target, 'czoX5HBJbKnSemdnM')
      .then((result) => {
          window.location.reload()
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <p>Would you like to send an email to your healthcare provider?</p>
      <p>Email:</p>
      <input type="email" name="user_email" />
      <input type="submit" value="Send" />
    </form>
  );
}