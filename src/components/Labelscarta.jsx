import React, { useState, useEffect } from "react";

const Labelscarta = ({ data }) => {
  const label = {
    cont_princ: {
      width: "100%",
      margin: "20px 7.5px",
      borderTop: "2px solid rgb(112, 112, 112)",
      borderBottom: "2px solid rgb(112, 112, 112)",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      paddingTop: "5px",
      paddingBottom: "5px",
      fontSize: "20px",
      padding: "20px 0"
    },
    cont_name: {
      width: "60%",
      textAlign: "center"
    },
    cont_price: {
      width: "20%",
      textAlign: "center"
    },
    cont_button: {
      width: "20%",
      textAlign: "center"
    }
  };

  const [titles, getTitles] = useState({});

  useEffect(() => {
    if (JSON.stringify(titles) !== JSON.stringify(data)) {
      getTitles(data);
    }
  }, [titles, data]);

  return (
    <div style={label.cont_princ}>
      <div style={label.cont_name}>
        <span>{titles.product}</span>
      </div>
      <div style={label.cont_price}>
        <span>{titles.price}</span>
      </div>
      <div style={label.cont_button}>
        <span>{titles.info}</span>
      </div>
    </div>
  );
};
export default Labelscarta;
