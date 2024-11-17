import styles from "./DestinationCard.module.css"


export default function DestinationCard({destination, url}){
    return(
        <div className={styles["container"]}>
            
        <img 
        src={url}
        alt="destination" 
        />
        <span>{destination}</span>
        </div>
    )
}