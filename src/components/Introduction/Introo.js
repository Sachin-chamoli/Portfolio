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
                <div className="i-title-item">Student</div>
                <div className="i-title-item">Photographer</div>
                <div className="i-title-item">Teacher</div>
              </div>
            </div>
            <p className="i-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nostrum veritatis velit. Minus deserunt ab nostrum ea voluptas neque odio, blanditiis quibusdam iure laboriosam sapiente maiores adipisci ullam esse expedita!
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