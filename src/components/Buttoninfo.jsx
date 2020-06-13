import React, {useState} from "react";
import {ReactComponent as YourSvg} from "../icons/search-plus-solid.svg";

const Buttoninfo = ({dataSliderHandler, dataListaFull, dataIdSelf, wordkey}) => {
    const icon = {
        search_ico: {
            width: "30px",
            color: "#404448",
            cursor: "pointer"
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
