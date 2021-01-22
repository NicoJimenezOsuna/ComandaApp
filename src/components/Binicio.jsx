import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const Binicio = () => {

const styles = {
  boton : {
    overflow: 'visible',
    textAlign: 'center',
    fontFamily: 'Tahoma',
    fontSize: `1.5em`,
    color: 'rgba(112, 112, 112, 1)',
    borderRadius: `50px`,
    backgroundColor: 'white',
    width: '250px',
    padding: '1em',
    marginBottom: '2em',
    boxShadow:  '-10px 10px 20px #bfbfbf, 10px -10px 20px #ffffff',
  }

}
  return ( 
    <Fragment>
        <Link to='/categoria' style={styles.boton}>INICIO</Link>
     </Fragment>
  )
}

export default Binicio;