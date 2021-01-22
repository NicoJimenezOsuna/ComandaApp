import React, {useState} from "react";
import {ReactComponent as YourSvg} from "../icons/navutils/informacion.svg";

const Buttoninfo = ({dataSliderHandler, dataListaFull, dataIdSelf, wordkey}) => {
    const icon = {
        search_ico: {
            width: "30px",
            height: '30px',
            fill: 'rgb(110, 104, 104)'
        }
    };

    const [stwordkey, getStWordkey] = useState('')
    const [datalista, getDatalista] = useState([])
    const [datalidself, getDatalidself] = useState([])

    useState(()=>{
        getStWordkey(wordkey);
        getDatalista(dataListaFull)
        getDatalidself(dataIdSelf)
    },[wordkey, dataListaFull, dataIdSelf])

    return (
        <YourSvg
            style={icon.search_ico}
            onClick={() => dataSliderHandler(datalista, datalidself, stwordkey)}
        />
    );
};

export default Buttoninfo;
