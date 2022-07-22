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
    const [values, setvalues] =useState({
      user_name:"",
      user_subject: "",
      user_email: "",
      message: ""
    });

    const handleInput = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      console.log(name, value);

      setvalues({...values, [name] : value});
    }
    console.log("re rendered")
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(values.user_name && values.user_email && values.message && values.user_subject)
        {
          setDone(true)
          setTimeout(() => {
            
            setDone(false);
          }, 2000);
          emailjs.sendForm('service_z1usacm', 'template_i00ys89', formRef.current, 'khB8L42hrjBq7iULv')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
        setvalues({
          user_name:"",
          user_subject:"",
          user_email:"",
          message:"",
      });
      }
        else{
          alert("Please fill the details")
        }
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
                <b>I Will be delighted if you share your thoughts with me.</b>Fill in the details below for any Information ,suggestions related to work, projects or anything!! 
            </p>
            <form ref = {formRef} onSubmit={handleSubmit}>
                <input type="text" style={{backgroundColor: darkMode && "#333", color:darkMode && "white"}} placeholder="Name" autoComplete="off" name="user_name" value={values.user_name} onChange={handleInput} />
                <input type="text" style={{backgroundColor: darkMode && "#333", color:darkMode && "white"}} placeholder="Subject" autoComplete="off" name="user_subject" value={values.user_subject} onChange={handleInput}/>
                <input type="email" style={{backgroundColor: darkMode && "#333", color:darkMode && "white"}} placeholder="Email" autoComplete="off" name="user_email" value={values.user_email} onChange={handleInput}/>
                <textarea placeholder="message" autoComplete="off" name="message" cols="30" rows="5" style={{backgroundColor: darkMode && "#333",  color:darkMode && "white"}} value={values.message} onChange={handleInput}></textarea>
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
        <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a className="i-link" href="https://www.instagram.com/_sa_chinn/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-instagram"></i>
        </a>
        <a className="i-link" href="https://github.com/Sachin-chamoli" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github"></i>
        </a>
        <a className="i-link" href="https://www.linkedin.com/in/sachin-chamoli-b15653237" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin-in"></i>
        </a>

      </div>
    </div>
  )
}

export default Contact
