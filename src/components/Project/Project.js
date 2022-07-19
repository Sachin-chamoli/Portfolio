import "./Project.css"

const Project = (props) => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={props.link} target="_blank" rel="noreferrer" >
        <img src={props.img} alt="Loading" className="p-img" />
      </a>
      <p className="p-desc">{props.desc}</p>
    </div>
  )
}

export default Project
