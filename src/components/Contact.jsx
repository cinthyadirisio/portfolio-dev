import React from "react";
import MailSVG from "./svg/MailSVG";
import HeartSVG from "./svg/HeartSVG";

function Contact() {
  return (
    <section className="contact">
      <h3>¡Mandame un mail!</h3>
      <p>
        Mi correo esta abierto tanto a propuestas de trabajo o colaboración{" "}
        <br />
        como a feedback sobre mi portfolio <HeartSVG />
      </p>
      <a target="_blank" href="mailto:cindy.fdb@hotmail.com">
        <MailSVG />
      </a>
    </section>
  );
}

export default Contact;
