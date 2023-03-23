import * as React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/newnavbar";
import { StaticImage } from "gatsby-plugin-image"

import "./layout.scss"

const TemplateWrapper = ({ children }) => {
  return (
    <div className="container-fluid" style={{ border: "1px solid orange", maxWidth: "1024px"}}>
        <div className="row logo" style={{border: "1px solid blue"}}><StaticImage src="../img/karina-schlaffer-schrift.jpg" alt="logo" width={444} height={48}/></div>
        <div className="row jumbotronic"><StaticImage src="../img/portrait-muenchen.jpg" alt="background" height={467} /></div>
        <div className="row menu">
            <Navbar />
        </div>
        <div className="row" style={{border: "1px solid red"}}>{children}</div>
        <Footer />
    </div>
  );
};

export default TemplateWrapper;