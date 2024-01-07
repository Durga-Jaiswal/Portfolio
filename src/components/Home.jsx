import { FaRegHand } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
function Home() {

    return (
      <>
      <div
      id="home"
      className="home--section">
        <section className="section--desc">
          <h1>Durga Jaiswal</h1>
          <h2>Frontend Developer</h2>
          <h3>I'm a passionate and dedicated Frontend Developer. </h3>
          
          <div className="icon-box">
              <button className="btn">
                <a href="#contact" >
                  Say Hello <FaRegHand class="hello-icon"/>
                </a>
                
                
              </button>
                  <a 
                  href="https://www.linkedin.com/in/durga-jaiswal-54398724a/"
                  className="btn"
                  target="_blank"
                  >
                  <FaLinkedin className="icon"/>Linkedin
                  </a>
                  <a href="https://github.com/Durga-Jaiswal/"
                  className="btn"
                  target="_blank"
                  >
                    <FaGithubSquare className="icon"/>GitHub
                  </a>
            </div>        
        </section>
        <div className="portfolio--img"></div>
      </div>
  
      </>
    )
  }
  
  export default Home;
  