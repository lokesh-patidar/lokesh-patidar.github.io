import React from "react";
import "./Stats.css";

export const Stats = () => {

    return (
        <div className="statsBox">
            <h3>GitHub Stats</h3>
            <div>
                <div className="statsContainer">
                    <div>
                        <a href="https://github.com/lokesh-patidar">
                            <img align="left" src="https://github-readme-streak-stats.herokuapp.com/?user=lokesh-patidar&theme=neon-dark" alt="lokesh-patidar Github Stats"/>
                        </a>
                    </div>
                </div>

                <div className="stats-3">
                    <p align="center">
                        <a href="https://github.com/lokesh-patidar/github-readme-stats">
                            <img alt="lokesh-patidar Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=lokesh-patidar&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117" />
                        </a>
                    </p>
                </div>

                <div className="stats-2">
                    <p align="center">
                        <a href="https://github.com/lokesh-patidar/github-readme-stats">
                            <img alt="lokesh-patidar Github Stats"
                                src="https://github-readme-stats.vercel.app/api?username=lokesh-patidar&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1117"
                            />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}