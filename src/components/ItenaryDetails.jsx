
import style from './ItenaryDetails.module.css'

export default function ItenaryDetails(){
    return(
        <ul>
            <div className={style["tour-heading"]}>
            Day 1 of Mathura Vrindavan Tour starts from Mathura    
            </div> 
            <li className={style['location-heading']} >Location 1: Krishna Janambhoomi</li>
            <p className={style['location-details']} > Krishna Janambhoomi Mandir, one of India’s most revered temples, is thought to be the location of Lord Krishna’s birth. The temple is significant not just from a religious standpoint but also historically since King Kans, Lord Krishna’s maternal uncle, was imprisoned there in a cell. King Kans’ brutality toward the parents of Lord Krishna is symbolised by the stone-walled cell. When visiting the temple, which is a popular pilgrimage destination in India, pilgrims are advised to dress modestly.</p> 
            <li  className={style['location-heading']} >Location 2: Dwarkadhish Temple</li>
            <p className={style['location-details']}>One of the oldest and most well-known Hindu sanctuaries in Mathura is Shri Dwarkadhish Temple, which is situated near the northern boundary. The shrine is devoted to Lord Dwarkanath, a manifestation of Lord Krishna who reigned over Dwarka (hence the name Dwarkadheesh). The black marble idol has been expertly sculpted. Seth Gokuldas Parikh, the wealthy Gwalior province treasurer, built the shrine in 1815. The temple, one of the most revered locations in the city, is also a work of art in architecture, with huge pillars and vibrant floral patterns. While visiting the shrine, devotees are advised to dress modestly.</p>
        </ul>
    )
}