import styles from "./ContactBar.module.css"
import phone from "./images/phone.svg"

const ContactBar = () => {

    return (
        <div className={styles["container"]} >
            <div className={styles["number"]}><a href="tel:+917689961477"><img src={phone} alt="gmail icon" />Call us at : +917689961477, +919760844192</a></div>
        </div>
    )
}

export default ContactBar;