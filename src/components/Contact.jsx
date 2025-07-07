// Contact section
import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <form className="contact-form"
        action="mailto:youremail@example.com"
        method="post"
        encType="text/plain"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows={5} placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
      <div className="contact-links">
        <a href="mailto:wholesomm@gmail.com">Email</a> |{" "}
        <a href="https://www.linkedin.com/in/devmanushh/" target="_blank" rel="https://www.linkedin.com/in/devmanushh/">LinkedIn</a>
      </div>
    </section>
  );
}