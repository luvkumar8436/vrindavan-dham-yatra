import styles from "./Video.module.css"
import ReactPlayer from 'react-player/youtube'
import { useRef } from "react";
const VIDEO_PATH = "https://youtu.be/s8xen8OJp80"

export default function Video(){
    const playerRef = useRef(null);
    return (
        <div className={styles["video-container"]}>
            <ReactPlayer 
                className={styles["react-player"]} 
                ref={playerRef} 
                url={VIDEO_PATH} 
                height={"39.375vw"}
                width={"70vw"}
                light={true}
            />
            <div className={styles["text-container"]}>
                <p> <span>40+</span> Total Destination</p>
                <p><span>80+</span> Total Packages</p>
                <p><span>5k+</span> Total Travelers</p>
                <p><span>4k+</span> Total Reviews</p>
            </div>
        </div>
    )
}