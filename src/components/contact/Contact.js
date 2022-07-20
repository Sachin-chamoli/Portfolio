import "./Contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context"

const Contact = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_z1usacm', 'template_i00ys89', formRef.current, 'khB8L42hrjBq7iULv')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });

    }
  return (
    <div id="C" className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
               <div className="c-info-item">
                    <img src={Phone} alt="" className="c-icon" />
                    +91 8130644825 
               </div> 
               <div className="c-info-item">
                    <img src={Email} alt="" className="c-icon" />
                    sachinchamoli200@gmail.com 
               </div> 
               <div className="c-info-item">
                    <img src={Address} alt="" className="c-icon" />
                    House no= 187 Dda Flats Dakshin Puri Ambedkar Nagar New Delhi 110062 
               </div> 
            </div>
        </div>
        <div className="c-right">
            <p className="c-desc">
                <b>Lorem ipsum dolor sit amet consectetur.</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus culpa numquam recusandae.
            </p>
            <form ref = {formRef} onSubmit={handleSubmit}>
                <input type="text" style={{backgroundColor: darkMode && "#333", color:darkMode && "white"}} placeholder="Name" name="user_name" />
                <input type="text" style={{backgroundColor: darkMode && "#333", color:darkMode && "white"}} placeholder="Subject" name="user_subject" />
                <input type="text" style={{backgroundColor: darkMode && "#333", color:darkMode && "white"}} placeholder="Email" name="user_email" />
                <textarea placeholder="Message" name="message"cols="30" rows="5" style={{backgroundColor: darkMode && "#333",  color:darkMode && "white"}}></textarea>
                <button>Submit</button>
                <span className="thanks">
                {done && "Thank You..."}
                </span>
            </form>
        </div>
      </div>
        <div className="social">Connect on -</div>
      <div className="centerdiv">
        <a className="i-link" href="https://www.facebook.com/sachinchamoli200" target="_blank" rel="noreferrer">
        <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a className="i-link" href="https://www.instagram.com/_sa_chinn/" target="_blank" rel="noreferrer">
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a className="i-link" href="https://github.com/Sachin-chamoli" target="_blank" rel="noreferrer">
        <i class="fa-brands fa-github"></i>
        </a>
        <a className="i-link" href="https://www.linkedin.com/in/sachin-chamoli-b15653237" target="_blank" rel="noreferrer">
        <i class="fa-brands fa-linkedin-in"></i>
        </a>

      </div>
    </div>
  )
}

export default Contact
