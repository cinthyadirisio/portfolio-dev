import React from "react";
import Socials from "../components/Socials";
import ScrollToTop from "../components/ScrollToTop";
import ImgProfile from "../components/ImgProfile";
import Nav from "../components/Nav";
import HeartSVG from "../components/svg/HeartSVG";

function Layout({children}) {
  return (
    <>
      <header id="top">
        <ImgProfile />
        <Nav />
      </header>

      <main>{children}</main>

      <footer>
        <div className="mainFooterText">
          <p>
            Hecho con
            <HeartSVG/>
            (y React) por Cinthya Di Risio
          </p>
        </div>
        <ScrollToTop />
        <Socials />
      </footer>
    </>
  );
}

export default Layout;
