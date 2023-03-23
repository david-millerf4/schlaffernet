import * as React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { StaticImage } from "gatsby-plugin-image"
import "./layout.scss"

const TemplateWrapper = ({ children }) => {
  return (
    <div className="container-fluid" style={{maxWidth: "1024px"}}>
        <div className="row logo"><StaticImage src="../img/karina-schlaffer-schrift.jpg" alt="logo" width={444} height={48}/></div>
        <div className="row">
            <Navbar />
        </div>
        <div>{children}</div>
        <Footer />
    </div>
  );
};

export default TemplateWrapper;
