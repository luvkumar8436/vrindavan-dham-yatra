import React from "react";
import { useParams } from 'react-router-dom';

const PackagePage = () => {
    let {packageName} = useParams();
    return (
        <div>
            {packageName}
        </div>
    )
}


export default PackagePage;