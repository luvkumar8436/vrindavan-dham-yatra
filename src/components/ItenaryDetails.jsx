
import style from './ItenaryDetails.module.css'

export default function ItenaryDetails({data}){
    return(
        <ul>
            {
                Object.keys(data).map((headline) => {
                    return (
                        <>
                            <div className={style["tour-heading"]}>
                                {headline}
                            </div>
                            {
                                data[headline].map((locationsData) =>  (
                                        <>
                                            <li className={style['location-heading']} >{Object.keys(locationsData)[0]}</li>
                                            <p className={style['location-details']} >{locationsData[Object.keys(locationsData)[0]]}</p>
                                        </>

                                ))
                            }
                        </>
                    )
                } ) 
            }
           
        </ul>
    )
}