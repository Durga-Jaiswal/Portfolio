
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { HiTerminal } from "react-icons/hi";




function App() {

    return (
      <>
      <section 
      id="skills"
      className="skills--section">
        <div>
            <h2>Skills</h2>
            <h3>My Technical Level</h3>
        </div>
        <div className="skills--sub-section">
            <section className="skill">
                
                    <p><FaReact className="skill-icon" />
                        ReactJS</p>

                    <p><RiJavascriptFill className="skill-icon"/>
                        JavaScript</p>
                    
                    <p><FaCss3Alt className="skill-icon"/>
                        CSS</p>
                
                    <p><FaHtml5 className="skill-icon"/>
                        HTML</p>
                    
                    <p><FaGithub className="skill-icon"/>
                        Git/GitHub</p>
                        
                    <p><HiTerminal className="skill-icon"/>
                        Command Line</p>
                
            </section>
        </div>
      </section>
      </>
    )
  }
  
  export default App
  