import React from "react";
import DownArrow from "./svg/DownArrow";
import Socials from "./Socials";

function Landing() {
  return (
    <section className="landing">
      <h1 id="mainTitle">
        ¡Hola! Soy Cinthya Di Risio, <br />
        Desarrolladora Full-Stack
      </h1>
      <Socials />
      <div className="calltoAction">
        <DownArrow />
      </div>
    </section>
  );
}

export default Landing;
