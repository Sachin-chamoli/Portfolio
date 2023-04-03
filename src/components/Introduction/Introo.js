import "./Intro.css"
import Me from "../../img/me.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Introo = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1300,
    });
  },[])

  useEffect(()=>{
    const text = document.querySelector(".sec-text");
 const textLoad = () =>{
    setTimeout(() => {
      text.textContent = "Frontend Development";
      console.log("check")
    }, 0);
    setTimeout(() => {
      text.textContent = "Book Reading";
    }, 7000);
    setTimeout(() => {
      text.textContent = "Pencil Sketching";
    }, 14000);
  }
  textLoad()
  setInterval(textLoad, 21000);

  },[])
  // const textLoad = () =>{
  //   setTimeout(() => {
  //     text.textContent = "Frontend Development";
  //     console.log("check")
  //   }, 0);
  //   setTimeout(() => {
  //     text.textContent = "Book Reading";
  //   }, 6000);
  //   setTimeout(() => {
  //     text.textContent = "Pencil Sketching";
  //   }, 12000);
  // }
  // textLoad()
  // setInterval(textLoad, 18000);

  
  return (
    <div id="I" className='i'>
      <div data-aos="fade-up" className="i-left">
        <div className="i-left-wrapper">
            <h2 className='i-intro'>Hello, My name is</h2>
            <h1 className='i-name'>Sachin Chamoli</h1>
            {/* <div className="i-title"> */}
              {/* <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">Sketch Artist</div>
                <div className="i-title-item">Photographer</div>
                <div className="i-title-item">Teacher</div>
              </div> */}
              <div className="i-title">
                <span className="text first-text">Interested in : </span>
                <span className="text sec-text">Frontend Developer</span>
              </div>
            {/* </div> */}
            <p className="i-desc">
              This is my portfolio that represent what I learn What I do and some of my recent projects .
            </p>
        </div>
      </div>
      <div className="i-right">
        <div  className="i-bg">
        <img src={Me} alt="" className="i-img"  />
        </div>
      </div>
    </div>
  )
}

export default Introo