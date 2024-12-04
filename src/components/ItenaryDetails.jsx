
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
                                            <ul className={style['location-details']}>{
                                            typeof locationsData[Object.keys(locationsData)[0]] === 'string' ?
                                                locationsData[Object.keys(locationsData)[0]] : 
                                                locationsData[Object.keys(locationsData)[0]].map(item => <li>{item}</li>)
                                            }</ul>
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