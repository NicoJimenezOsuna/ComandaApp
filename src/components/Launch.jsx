import React from 'react';
import {Link} from 'react-router-dom'
/*
*
*  IMPORT COMPONENTS
*
* */
import Socialpymes from "./Socialpymes";
import Binicio from "./Binicio";

const Launch = () => {

  const styles = {
    Elipse_1 : {
      filter: 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161))',
      position: 'absolute',
      overflow: 'visible',
      width: `130px`,
      height: `130px`,
      left: `0px`,
      top: `0px`
    },
    Grupo_4 : {
        position: 'relative',
        width: `236px`,
        height: `87px`,
        left: `130px`,
        top: `87px`,
        overflow: 'visible'
    },
    Grupo_5 : {
        position: 'relative',
        width: `366px`,
        height: `174px`,
        left: `177px`,
        top: `75px`,
        overflow: 'visible'
    },
    ComandApp : {
      position: 'absolute',
      left: `0px`,
      top: `0px`,
      overflow: 'visible',
      width: `237px`,
      whiteSpace: 'nowrap',
      textAlign: 'left',
      fontFamily: 'Papyrus',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: `40px`,
      color: 'rgba(112,112,112,1)'
    },
      Tu_carta_digital : {
      position: 'absolute',
      left: `137px`,
      top: `63px`,
      overflow: 'visible',
      width: `100px`,
      whiteSpace: 'nowrap',
      textAlign: 'left',
      fontFamily: 'Papyrus',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: `15px`,
      color: 'rgba(112,112,112,1)'
    },
      restaurant_691397_1280 : {
      filter: `drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.361))`,
      position: 'absolute',
      width: `795px`,
      height: `529.5px`,
      left: `-37px`,
      top: `364px`,
      overflow: 'visible'
    }

  }

  return (
    <div>
      <div style={styles.Grupo_5}>
        <div style={styles.Grupo_4}>
          <div style={styles.ComandApp}>
            <span>ComandApp</span>
          </div>
          <div style={styles.Tu_carta_digital}>
            <span>Tu carta digital</span>
          </div>
        </div>
        <img style={styles.Elipse_1} src="./assets/img/logo.svg" />  
      </div>
      <img style={styles.restaurant_691397_1280} src="./assets/img/restaurant_691397_1280.png"/>
      <Link to='/categoria' id="Grupo_6">
        <Binicio />
      </Link>
      <Socialpymes/>
    </div>
  )
};

export default Launch;

