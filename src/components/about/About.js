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
        <p className="a-sub">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus necessitatibus repudiandae minus a voluptatibus similique accusamus neque odit impedit hic.
        </p>
        <p className="a-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus magnam nemo voluptas asperiores mollitia delectus officia non. Hic placeat eligendi nihil consequuntur quas consequatur rem, voluptas facilis, veniam voluptatibus dolore tenetur voluptates accusantium fugit pariatur atque alias incidunt! Voluptates, eum.
        </p>
        
      </div>
    </div>
  )
}

export default About
