
import DownloadButton from "./DownloadButton"
function About() {

    return (
      <>
      <div 
      id="about"
      className="about--section">
        <h2>About Me</h2>
        <h3>My Introduction</h3>
        <div className="about--sub-section">
            <img src="/assets/Durga Jaiswal.jpg" className="img"></img>
            <div className="intro-section">
                <p>As a self-taught learner, I have honed my skills in ReactJS, JavaScript, HTML, and CSS through hands-on experience and project-based learning. My journey into web development has been marked by a commitment to continuous improvement, evident in my exploration of Command Line, Git, and GitHub UI/UX design principles. </p>
                
                <DownloadButton />
            </div>
        </div>
      </div>
      </>
    )
  }
  
  export default About;