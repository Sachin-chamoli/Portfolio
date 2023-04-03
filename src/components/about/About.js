import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context";
import "./About.css";
import aboutMe from "../../img/aboutMe.webp"
import Aos from "aos";
import 'aos/dist/aos.css';

const About = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  useEffect(()=>{
    Aos.init({
      duration: 1400, 
    });
  },[])
  return (
    <div id ="A" className="a">
      <div className="a-left" data-aos="fade-right">
        
        <div className="a-card" style={{boxShadow: darkMode && "0 0 20px  rgb(98, 255, 0)"}}>
            <img src={aboutMe} alt="loading" className="a-img"  />
        </div>
      </div>
      <div className="a-right" data-aos="fade-left">
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
