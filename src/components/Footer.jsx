import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {

    return (
      <>
      <div className="footer">
            <h2 className="nav--logo">Durga.</h2>
            <div className="icon-box">
                <a 
                href="https://www.linkedin.com/in/durga-jaiswal-54398724a/"
                target="_blank">
                <FaLinkedin className="icon-footer"/>
                </a>
               <a
                href="https://github.com/Durga-Jaiswal"
               target="_blank"
               >
                <FaGithubSquare className="icon-footer"/>
               </a>
                
            </div>
            <p>&#xa9; Durga. All rights reserved.</p>
      </div>
      


      </>
    )
  }
  
  export default Footer;
  