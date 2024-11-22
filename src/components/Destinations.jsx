import styles from "./Destinations.module.css"
import DestinationCard from "./DestinationCard"
const details = [
    {
        destination: "Delhi",
        url: "https://lh5.googleusercontent.com/proxy/Wjn-MZbtcTiGNoeguVIHalSW8ACnEK8aQKGeg47MacSlJHLitMkIsyGghAR1ZNlh1A8mKYcOhhd51ZFwzU8EBxqByuIiGNoBLC4DFR68wHOhye6SHpXywLUZUtZzPQVScZwaSu2jHRvwdko0o6m66RxcstOFQG8=w540-h312-n-k-no"
    },
    {
        destination: "Mathura",
        url: "https://lh5.googleusercontent.com/p/AF1QipMnuIZE7-S5L4uQccNywtQEgll7nPeucoIZ7qB3=w540-h312-n-k-no"
    },
    {
        destination: "Agra",
        url: "https://lh5.googleusercontent.com/p/AF1QipOwcynxRpNebAQYvogATP7Bg7j0k45R21LWYlCN=w540-h312-n-k-no"
    },
    {
        destination: "Jaipur",
        url: "https://lh5.googleusercontent.com/p/AF1QipNNCNn4A9ujrP0drFeNWF0ewQJllcIA7CuLUEmT=w540-h312-n-k-no"
    },
    {
        destination: "Jodhpur",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Mehrangarh_Fort_sanhita.jpg/1200px-Mehrangarh_Fort_sanhita.jpg"
    },
    {
        destination: "Ayodhya",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ram_Janmbhoomi_Mandir%2C_Ayodhya_Dham.jpg"
    },
    {
        destination: "Varanasi",
        url: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSuB7CCpNJLXa1wsJOQMjNED7iPJK7l7_bSd1t34_NTmzV2YUQYruDVWS8hTxKtwFlR7SiWdNF4S2AdKiEQ8P44VLYVEcVNASUlqnoEHA"
    },
    {
        destination: "Manali",
        url: "https://lh5.googleusercontent.com/p/AF1QipPAu8Z80NzJDiIT0WvvcRCkcWIW7YfWca7FOcb_=w540-h312-n-k-no"
    },
    
]

export default function Destinations(){
    return (
        <div className={styles["container"]}>
            <h2>Top Destinations</h2>
            <div className={styles['destination-container']} >
                {details.map( (detail, i) => 
                    <DestinationCard
                    destination={detail.destination}
                    url={detail.url}
                    key={detail.destination}
                    />
                )}
            </div>
        </div>
        
    )
}