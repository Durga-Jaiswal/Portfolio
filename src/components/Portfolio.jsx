import Project from './Project'
import { PiShareNetworkBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";


function Portfolio() {

    return (
    
    <div 
    id="portfolio"
    className="portfolio--section">
        
            <h2>Projects</h2>
            <h3>Most Recent Work</h3>
            <div>
                <div className="filter">
                    <p>All</p>
                    <p>ReactJS</p>
                    <p>JavaScript</p>
                    <p>HTML/CSS</p>
                    <p>Firebase</p>
                    <p>Chorme-Extension</p>
                    <p>With API's</p>
                </div>
                <div className = "project-container">
                    <Project/>
                   
                </div>
    
               
            </div>
             
        
    </div>
    
    )
  }
  
  export default Portfolio
  