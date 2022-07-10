import "./About.css";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src="https://images.pexels.com/photos/3497183/pexels-photo-3497183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="a-img" />
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
