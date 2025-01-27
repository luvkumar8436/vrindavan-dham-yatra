import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import styles from "./CallbackForm.module.css"
import { useRef } from "react";
import emailjs from '@emailjs/browser';


export default function CallbackForm(props){

    const recaptcha = useRef(null);

    const [name , setName ] = useState();
    const [email , setEmail ] = useState();
    const [number , setNumber ] = useState();
    const [date , setDate ] = useState();


    const handleLogin = (e) => {
        if(!recaptcha.current.getValue()){
            return 
        }
            // console.log("hello from captcha failed")
        e.preventDefault();
        // }else{
            
        emailjs.init({
            publicKey: "SOJAoo2L_qWZJEXej",
        });
        
        emailjs.send("service_uq7kg9d","template_n2dlvjg",{
            to_name: "Luv",
            from_name: "customer",
            message: `
            Email = ${email} 
            Number = ${number} 
            Date = ${date}
            `,
            reply_to: "luvkumar8436@gmail.com",
        });               
        
        setDate("")
        setName("")
        setEmail("")
        setNumber("")
        // console.log("hello from submit")
        // }
    }
    
    return (
        <div className={styles["form-container"]}>
            <h3>{props.text}</h3>
            <form onSubmit={handleLogin}>
                <input name="name" value={name} type="text" onChange={e => setName(e.target.value)} placeholder="Your Name" />
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required/>
                <input type="tel" value={number} onChange={e => setNumber(e.target.value)} placeholder="Phone Number" required/>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} placeholder="Planned Date"/>
                <ReCAPTCHA className={styles["captcha"]} sitekey={process.env.REACT_APP_SITE_KEY} ref={recaptcha}/>
                <input type="submit" />
            </form>
        </div>
    )
}