import '../Styles/Home.css';
import {
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";
import Typical from "react-typical";
import Lokesh_Patidar_Resume from "../download/Lokesh_Patidar_Resume.pdf";
import lokesh from "../assets/lokesh-pic.jpg";


const HomePage = () => {
    return (
        <div id='Home'>
            <div className="container">
                <div>
                    <div className="description">
                        <div className="profile-details">
                            <div className="colz">
                                <div className="colz-icon">
                                    <a
                                        href={lokesh}
                                        target="_blank"
                                        alt="linked in"
                                    >
                                        <i className="">
                                            <FaLinkedinIn className='icon-ease-out' />
                                        </i>
                                    </a>
                                    <a
                                        href="https://github.com/lokesh-patidar"
                                        target="_blank"
                                        alt="github"
                                    >
                                        <i className="">
                                            <FaGithub className='icon-ease-out' />
                                        </i>
                                    </a>
                                </div>
                            </div>

                            <div className="profile-details-role">
                                <h6>
                                    Hello, I'm
                                    <span className="highlighted-text">
                                        &nbsp;{" Lokesh Patidar "}
                                    </span>
                                </h6>
                                <span className="primary-text">
                                    <>
                                        <Typical
                                            loop={Infinity}
                                            steps={[
                                                "Enthusiastic Developer",
                                                2000,
                                                "Full Stack Developer",
                                                2000,
                                                "Mern Stack Developer",
                                                2000,
                                                "React-Redux Developer",
                                                2000,
                                            ]}
                                        />
                                    </>
                                </span>
                                <span className="profile-tag-line">
                                    Aspiring MERN-Stack (MongoDB, Express, React, Node), Aspiring Full Stack Web Development at Masai School Bangaluru , KARNATAKA
                                </span>
                            </div>

                            <div>
                                <a href='#contactSection'><button className="btn primary-btn"> Hire Me </button></a>
                                <a
                                    href={Lokesh_Patidar_Resume}
                                    download>
                                    <button className="btn highlighted-btn">
                                        Get Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="imagebox">
                        <div className="profile-picture">
                            <div className="profile-picture-background">
                                <img
                                    src="https://avatars.githubusercontent.com/u/105616033?v=4"
                                    alt="lokesh-patidar"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr color='black' id='aboutMePageSection' />
        </div>
    );
}

export default HomePage;