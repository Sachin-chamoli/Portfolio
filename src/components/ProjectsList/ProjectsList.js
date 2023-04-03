import "./ProjectsList.css"
import Project from "../Project/Project"
import {products} from "../../data"
import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css';

const ProjectsList = () => {
  useEffect(()=>{
    Aos.init({
      duration: 1300,
    });
  },[])
  return (
    <div id="P" className="pl">
        <div className="pl-texts" data-aos="fade-up">
            <h1 className="pl-title">Here are some of the Projects</h1>
            <p className="pl-desc">
                Hope You like the projects and any recommendations are heartly invited
            </p>
        </div>
        <div className="pl-list" data-aos="zoom-in">
            {products.map(item =>(
            <Project key = {item.id} img = {item.img} link ={item.link} desc={item.desc}/>
          ))}
          
        </div>

    </div>
  )
}

export default ProjectsList
