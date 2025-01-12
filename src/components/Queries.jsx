import styles from "./Queries.module.css"

export default function Query(){
    return (
        <div className={styles["container"]} >
            <div className={styles["sub-container"]} >
                <h2>Still have Queries</h2>
                <p>If you need help or have questions, call the number mentioned for assistance.</p>
                <a href="tel:+917689961477"><button>Call +76 89961477</button></a>
            </div>
        
        </div>
    )
}