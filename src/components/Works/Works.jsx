import React, { useContext } from "react";
import "./Works.css";
import git from "../../img/git.png";
import vscode from "../../img/vscode.png";
import javascript from "../../img/javascript.png";
import androidstudio from "../../img/androidstudio.png";
import figma from "../../img/figma.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            T O O L S
          </span>
          <span>Brands & Clients</span>
          <spane>
            Visual Studio Code
            <br />
            Figma
            <br />
            Android Studio
            <br />
            Github
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={git} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={vscode} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={javascript} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={androidstudio} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={figma} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
