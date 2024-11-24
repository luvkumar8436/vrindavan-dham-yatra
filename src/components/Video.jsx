import styles from "./Video.module.css"
import ReactPlayer from 'react-player/youtube'
import { useState, useRef , useEffect } from "react";
const VIDEO_PATH = "https://youtu.be/s8xen8OJp80"

export default function Video(){
    const playerRef = useRef(null);

    const [width, setWidth] = useState(window.innerWidth);

    // console.log(width)
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className={styles["video-container"]}>
            <ReactPlayer 
                className={styles["react-player"]} 
                ref={playerRef} 
                url={VIDEO_PATH} 
                height={ width < 530 ? `${0.5062 * width }px` : `${width * 0.45}px` }
                width={ width < 530 ? `${width * 0.9}px` : `${width * 0.8}px`}
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