import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Migas = ({ data, visible }) => {
  const mig = {
    Grupo_364: {
      width: "100%",
      left: "497px",
      top: "169px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px"
    },
    around: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      fontFamily: "Papyrus",
      fontWeight: "bolder",
      fontSize: "30px"
    }
  };

  const [migas, getMigas] = useState("uno");

  useEffect(() => {
    if (migas !== data) {
      getMigas(data);
    }
  }, [migas, data]);

  return (
    <div style={mig.Grupo_364}>
      <div style={mig.around}>
        <Link to="/categoria">Categorías</Link>
        <p style={{ padding: " 0 10px" }}>>></p>
        <p>{migas}</p>
      </div>
      <span
        onClick={visible}
        style={{
          border: "2px solid black",
          borderRadius: "50px",
          padding: "20px",
          cursor: "pointer",
          background: "rgba(156, 255, 242, 0.68)"
        }}
      >
        ALERGENOS
      </span>
    </div>
  );
};

export default Migas;
