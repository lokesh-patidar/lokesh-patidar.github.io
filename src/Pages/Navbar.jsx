import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaFolder,
  FaList,
  FaMobile,
} from "react-icons/fa";
import "../Styles//Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);


  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }

    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div id="box-1" className="navbarContainer">
        <div className="logo">
          <span>L</span>okesh
        </div>
        <div className="nav">
          <div>
            <a>
              <Link activeClass="active" smooth spy to="home" offset={-100}><FaHome /> Home </Link>
            </a>
          </div>
          <div>
            <a>
              <Link activeClass="active" smooth spy to="aboutme" duration={600} offset={-100}>
                <FaUser /> About Me
              </Link>
            </a>
          </div>
          <div>
            <a>
              <Link activeClass="active" smooth spy to="skills" duration={800} offset={-100}><FaList /> Skills</Link>
            </a>
          </div>
          <div>
            <a>
              <Link activeClass="active" smooth spy to="projects" duration={2500} offset={-100}><FaFolder /> Projects </Link>
            </a>
          </div>
          <div>
            <a>
              <Link activeClass="active" smooth spy to="contact" duration={3500} offset={-100}><FaMobile /> Contact </Link>
            </a>
          </div>
          <div>
            <a
              href="https://onedrive.live.com/?authkey=%21AC31qnyUOYIVxt4&cid=64B123E24B0D9024&id=64B123E24B0D9024%21107&parId=64B123E24B0D9024%21106&o=OneUp"
              target="_blank"
              alt="Resume"
            >
              &nbsp; Resume
            </a>
          </div>
        </div>
      </div>

      {/* -------------------------------------moddle screen--------------------------------------------  */}

      <div id="box-1second" className="navbarContainersecond">
        <div className="logosecond">
          <span>L</span>okesh
        </div>
        <div className="navsecond">
          <div>
            <a>
              {" "}
              <Link activeClass="active" smooth spy to="home" offset={-100}><span>H</span>ome</Link>
            </a>
          </div>
          <div>
            <a>
              {" "}
              <Link activeClass="active" smooth spy to="aboutme" duration={600} offset={-100}><span>A</span>bout Me </Link>
            </a>
          </div>
          <div>
            <a>
              {" "}
              <Link activeClass="active" smooth spy to="skills" duration={800} offset={-100}><span>S</span>kills</Link>
            </a>
          </div>
          <div>
            <a>
              {" "}
              <Link activeClass="active" smooth spy to="projects" duration={2500} offset={-100}><span>P</span>rojects </Link>
            </a>
          </div>
          <div>
            <a>
              {" "}
              <Link activeClass="active" smooth spy to="contact" duration={3500} offset={-100}><span>C</span>ontact </Link>
            </a>
          </div>
          <div>
            <a
              href="https://onedrive.live.com/?authkey=%21AC31qnyUOYIVxt4&cid=64B123E24B0D9024&id=64B123E24B0D9024%21107&parId=64B123E24B0D9024%21106&o=OneUp"
              target="_blank"
              alt="Resume"
            >
              &nbsp; <span>R</span>esume
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------mobile screen------------------------------------------  */}

      <div
        id="box-2"
        className="mainNavbarBox"
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="burgerNav">
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
          <div>
            <div className="navlogo">
              <span>L</span>okesh
            </div>
          </div>
        </div>

        <div id="menu-class" style={{ height: "100vh" }} className={menu_class}>
          <div className="navinside">
            <div>
              <a><Link onClick={updateMenu} activeClass="active" smooth spy to="home" offset={-100}><span>H</span>ome</Link></a>
            </div>
            <div>
              <a><Link onClick={updateMenu} activeClass="active" smooth spy to="aboutme" duration={600} offset={-100}><span>A</span>bout Me </Link></a>
            </div>
            <div>
              <a><Link onClick={updateMenu} activeClass="active" smooth spy to="skills" duration={800} offset={-100}><span>S</span>kills</Link></a>
            </div>
            <div>
              <a><Link onClick={updateMenu} activeClass="active" smooth spy to="projects" duration={2500} offset={-100}><span>P</span>rojects </Link></a>
            </div>
            <div>
              <a><Link onClick={updateMenu} activeClass="active" smooth spy to="contact" duration={3500} offset={-100}><span>C</span>ontact </Link></a>
            </div>
            <div onClick={updateMenu}>
              <a
                href="https://onedrive.live.com/?authkey=%21AC31qnyUOYIVxt4&cid=64B123E24B0D9024&id=64B123E24B0D9024%21107&parId=64B123E24B0D9024%21106&o=OneUp"
                target="_blank"
                alt="Resume"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="navinside1">
            <span>L</span>okesh &nbsp;<span>P</span>atidar
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
