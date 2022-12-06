import React, {useState} from "react";
import {
  FaHome,
  FaUser,
  FaIdCard,
  FaFolder,
  FaList,
  FaMobile,
} from "react-icons/fa";
import './Navbar.css';

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
            <a href="#Home"><FaHome /> Home</a>
          </div>
          <div>
            <a href="#aboutMePageSection"><FaUser /> About Me</a>
          </div>
          <div>
            <a href="#skillsPageSection"><FaList /> Skills</a>
          </div>
          <div>
            <a href="#projectsPageSection"><FaFolder /> Projects</a>
          </div>
          <div>
            <a href="#contactPageSection"><FaMobile /> Contact</a>
          </div>
          <div>
            <a
              href="https://1drv.ms/b/s!AiSQDUviI7Fkay31qnyUOYIVxt4?e=kX6eyv"
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
            <a href="#Home"> <span>H</span>ome</a>
          </div>
          <div>
            <a href="#aboutMePageSection"> <span>A</span>bout Me</a>
          </div>
          <div>
            <a href="#skillsPageSection"> <span>S</span>kills</a>
          </div>
          <div>
            <a href="#projectsPageSection"> <span>P</span>rojects</a>
          </div>
          <div>
            <a href="#contactPageSection"> <span>C</span>ontact</a>
          </div>
          <div>
            <a
              href="https://1drv.ms/b/s!AiSQDUviI7Fkay31qnyUOYIVxt4?e=kX6eyv"
              target="_blank"
              alt="Resume"
            >
              &nbsp; <span>R</span>esume
            </a>
          </div>
        </div>
      </div>



{/* ---------------------------------------mobile screen------------------------------------------  */}


      <div id="box-2" className="mainNavbarBox" style={{ width: "100%", height: "100vh" }}>
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

        <div id="menu-class" style={{height: "100vh"}} className={menu_class}>
          
          <div className="navinside">
            <div onClick={updateMenu}>
              <a href="#Home">
                Home
              </a>
            </div>
            <div onClick={updateMenu}>
              <a href="#aboutMePageSection">
                About Me
              </a>
            </div>
            <div onClick={updateMenu}>
              <a href="#skillsPageSection">
                Skills
              </a>
            </div>
            <div onClick={updateMenu}>
              <a href="#projectsPageSection">
                Projects
              </a>
            </div>
            <div onClick={updateMenu}>
              <a href="#contactPageSection">
                Contact
              </a>
            </div>
            <div onClick={updateMenu}>
              <a
                href="https://1drv.ms/b/s!AiSQDUviI7Fkay31qnyUOYIVxt4?e=kX6eyv"
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
}

export default Navbar;