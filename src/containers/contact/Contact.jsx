import React from "react";
import "./contact.css";
import WidgetBot from "@widgetbot/react-embed";
function Contact() {
  return (
    <div className="step0_contact">
      <div className="step0_contact-heading">
        <h1 className="gradient__text">Contact</h1>
        <p>The easiest way to contact us is through our discord server!</p>
        <p>Or you can message us directly</p>
        <h3>Allan Huang</h3>
    <p>Discord: allaquan#5143</p>
    <p>Email: ahlilun@gmail.com</p>
    <p>Twitter: @allaquan1</p>
    <h3>Lucas Wang</h3>
    <p>Discord: lowkislucas#8270</p>
    <p>Email: lucasw1436@gmail.com</p>
      </div>
      <div className="step0_contact-content">
        <WidgetBot
          server="1019387494908842075"
          channel="1031724806611152976"
          width="400"
          height="600"
        />
      </div>
    </div>
  );
}

export default Contact;
