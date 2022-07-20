import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./About.css";
import aboutMe from "../../img/aboutMe.webp"
const About = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div id ="A" className="a">
      <div className="a-left">
        
        <div className="a-card" style={{boxShadow: darkMode && "0 0 20px  rgb(98, 255, 0)"}}>
            <img src={aboutMe} alt="loading" className="a-img"  />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">My Name is Sachin. I am From Delhi I have done my graduation in Bsc (hons) Computer Science from Delhi University. 
        </p>
        <p className="a-desc">
            My interest is in frontend development. Currently I am learning web development and making projects to improve my skills. As of now I am focusing on frontend development but soon I will start with backend also and will become a Fullstack Developer. Apart from this I also have interest in making Portrait (Pencil Sketch) 
        </p>
        
      </div>
    </div>
  )
}

export default About
