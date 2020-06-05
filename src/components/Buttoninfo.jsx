import React, {useState} from "react";
import {ReactComponent as YourSvg} from "../icons/search-plus-solid.svg";

const Buttoninfo = ({dataSliderHandler, dataListaFull, dataIdSelf, noprice}) => {
    const icon = {
        search_ico: {
            width: "30px",
            color: "#404448",
            cursor: "pointer"
        }
    };

    const [nonprice, getNonprice] = useState(false)

    useState(()=>{
        getNonprice(noprice);
    },[noprice])

    return (
        <YourSvg
            style={icon.search_ico}
            onClick={() => dataSliderHandler(dataListaFull, dataIdSelf, nonprice)}
        />
    );
};

export default Buttoninfo;
