import "./ProjectsList.css"
import Project from "../Project/Project"
import {products} from "../../data"

const ProjectsList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Here are some of the Projects</h1>
            <p className="pl-desc">
                Hope You like the projects and any recommendations are heartly invited
            </p>
        </div>
        <div className="pl-list">
          {products.map(item =>(
            <Project key = {item.id} img = {item.img} link ={item.link}/>
          ))}
        </div>

    </div>
  )
}

export default ProjectsList
