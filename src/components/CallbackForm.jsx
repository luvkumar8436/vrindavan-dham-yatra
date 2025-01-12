import ReCAPTCHA from "react-google-recaptcha";
import styles from "./CallbackForm.module.css"
import { useRef } from "react";

export default function CallbackForm(props){

    const recaptcha = useRef(null);


    const handleLogin = (e) => {
        if(!recaptcha.current.getValue()){
            e.preventDefault();
        }
    }
    
    return (
        <div className={styles["form-container"]}>
            <h3>{props.text}</h3>
            <form action="" onSubmit={handleLogin}>
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Email" required/>
                <input type="tel" placeholder="Phone Number" required/>
                <input type="date" placeholder="Planned Date"/>
                <ReCAPTCHA className={styles["captcha"]} sitekey={process.env.REACT_APP_SITE_KEY} ref={recaptcha}/>
                <input type="submit" />
            </form>
        </div>
    )
}