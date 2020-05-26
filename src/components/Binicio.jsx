import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
// import {Link} from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

const Binicio = () => {

const styles = {
  boton : {
    filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161))',
    // position: 'relative',
    overflow: 'visible',
    // width: `313px`,
    // height: `94px`,
    // left: `0px`,
    // top: `0px`,
    textAlign: 'center',
    fontFamily: 'Tahoma',
    // fontSize: `40px`,
    color: 'rgba(112, 112, 112, 1)',
    borderRadius: `50px`,
    border: `2px rgba(112, 112, 112, 1) solid`,
    backgroundColor: 'white',
    width: '150px',
    padding: '1em',
    marginBottom: '2em'
  }

}
  return ( 
    <Fragment>
        <Link to='/categoria' style={styles.boton}>INICIO</Link>
     </Fragment>
  )
}

export default Binicio;