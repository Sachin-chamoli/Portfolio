import "./Intro.css"
import Me from "../../img/me.png"

const Introo = () => {
  return (
    <div id="I" className='i'>
      <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className='i-intro'>Hello, My name is</h2>
            <h1 className='i-name'>Sachin Chamoli</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">Sketch Artist</div>
                <div className="i-title-item">Photographer</div>
                <div className="i-title-item">Teacher</div>
              </div>
            </div>
            <p className="i-desc">
              This is my portfolio that represent what I learn What I do and some of my recent projects .
            </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">
        <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </div>
  )
}

export default Introo