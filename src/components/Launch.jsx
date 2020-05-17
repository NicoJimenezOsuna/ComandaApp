import React from 'react';
import {Link} from 'react-router-dom'
/*
*
*  IMPORT COMPONENTS
*
* */
import Socialpymes from "./Socialpymes";

const Launch = () => {

  const styles = {
    Elipse_1 : {
      filter: 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161))',
      position: 'absolute',
      overflow: 'visible',
      width: `148px`,
      height: `148px`,
      left: `0px`,
      top: `0px`
    },
    Elipse_2 : {
      position: 'absolute',
      overflow: 'visible',
      width: `90px`,
      height: `90px`,
      left: `20px`,
      top: `20px`
    },
    A : {
      position: 'absolute',
      left: `65px`,
      top: ' 51px',
      overflow: 'visible',
      width: `30px`,
      whiteSpace: 'nowrap',
      textAlign: 'left',
      fontFamily: 'Papyrus',
      fontStyle: 'normal',
      fonteWight: 'normal',
      fontSize: `30px`,
      color: 'rgba(112,112,112,1)'
    },
    C : {
      position: 'absolute',
      left: `34px`,
      top: `31px`,
      overflow: 'visible',
      width: `51px`,
      whiteSpace: 'nowrap',
      textAlign: 'left',
      fontFamily: 'Papyrus',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: `50px`,
      color: 'rgba(112,112,112,1)'
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
    <div id="Pantalla_de_Inicio">
      <div id="Grupo_5">
        <div id="Grupo_4">
          <div style={styles.ComandApp}>
            <span>ComandApp</span>
          </div>
          <div style={styles.Tu_carta_digital}>
            <span>Tu carta digital</span>
          </div>
        </div>
        <div id="Grupo_3">
          <svg style={styles.Elipse_1}>
            <ellipse fill="rgba(255,255,255,1)" stroke="rgba(112,112,112,1)" stroke-width="1px" stroke-linejoin="miter"
                     stroke-linecap="butt" stroke-miterlimit="4" shape-rendering="auto" id="Elipse_1" rx="65" ry="65"
                     cx="65" cy="65">
            </ellipse>
          </svg>
          <svg style={styles.Elipse_2}>
            <ellipse fill="rgba(255,255,255,1)" stroke="rgba(112,112,112,0.259)" stroke-width="1px"
                     stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" shape-rendering="auto"
                     id="Elipse_2" rx="45" ry="45" cx="45" cy="45">
            </ellipse>
          </svg>
          <div style={styles.A}>
            <span>A</span>
          </div>
          <div style={styles.C}>
            <span>C</span>
          </div>
        </div>
      </div>
      <Link to='/categoria' id="Grupo_6">
        <svg className="Rect_ngulo_3">
          <rect fill="rgba(255,255,255,1)" stroke="rgba(112,112,112,1)" stroke-width="3px" stroke-linejoin="miter"
                stroke-linecap="butt" stroke-miterlimit="4" shape-rendering="auto" id="Rect_ngulo_3" rx="38" ry="38"
                x="0" y="0" width="295" height="76">
          </rect>
        </svg>
        <div id="INICIO">
          <span>INICIO</span>
        </div>
      </Link>
      <img style={styles.restaurant_691397_1280} src="./assets/img/restaurant_691397_1280.png"/>
        <Socialpymes/>
    </div>
  )
};

export default Launch;

