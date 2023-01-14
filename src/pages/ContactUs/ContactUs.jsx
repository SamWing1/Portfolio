import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'

export const ContactUs = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('ervice_oxnge84', 'template_rooyh2f', form.current, 'HW8pM2ifxM8FoYVMV')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setStatusMessage('Sent!');
      }, (error) => {
          console.log(error.text);
          setStatusMessage(`whoops, something went wrong`);
      });
  };

  return (
    <>
    <div id='form'>
      <form ref={form} onSubmit={sendEmail}>
      <h1 id='emailme'>Shoot Me an Email</h1>
        <div id='formname'>
          <label>Your Name</label>
          <br />
          <input class='input' type="text" name="user_name" />
        </div>
        <div id='formemail'>
          <label>Your Email</label>
          <br />
          <input class='input' type="email" name="user_email" />
        </div>
        <div id='formmessage'>
          <label id='msglabel'>Message</label>
          <br />
          <textarea class='messageinput' name="message" />
        </div>
        <div>
        <div id='formsubmit'>
          <input type="submit" value="Send" />
        </div>
      <p id='status'>{statusMessage}</p>
        </div>
      </form>
      </div>
    </>
  );
};