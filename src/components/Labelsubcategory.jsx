import React, { Fragment, useState, useEffect } from "react";

const Labelsubcategory = ({data}) => {
    const label = {
        cont_principal: {
            width: "100%",
            margin: "20px 7.5px",
            borderTop: "2px solid rgb(112, 112, 112)",
            borderBottom: "2px solid rgb(112, 112, 112)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: "5px",
            paddingBottom: "5px",
            fontSize: '20px',
            padding: '20px 0'
        }
    };
    
    const [titles, getTitles] = useState({});
    
    useEffect(()=>{
        if(titles !== data){
           getTitles(data) 
        }
    });

    return (
        <div style={label.cont_principal}>
            <span>{titles.product}</span>
            <span>{titles.price}</span>
            <span>{titles.info}</span>
        </div>
    );
};
export default Labelsubcategory;
