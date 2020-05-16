import React from 'react';
import {Link} from 'react-router-dom'
/*
*
*  IMPORT COMPONENTS
*
* */
import Socialpymes from "./Socialpymes";

const Launch = () => {


  return (
    <div id="Pantalla_de_Inicio">
      <div id="Grupo_5">
        <div id="Grupo_4">
          <div id="ComandApp">
            <span>ComandApp</span>
          </div>
          <div id="Tu_carta_digital">
            <span>Tu carta digital</span>
          </div>
        </div>
        <div id="Grupo_3">
          <svg className="Elipse_1">
            <ellipse fill="rgba(255,255,255,1)" stroke="rgba(112,112,112,1)" stroke-width="1px" stroke-linejoin="miter"
                     stroke-linecap="butt" stroke-miterlimit="4" shape-rendering="auto" id="Elipse_1" rx="65" ry="65"
                     cx="65" cy="65">
            </ellipse>
          </svg>
          <svg className="Elipse_2">
            <ellipse fill="rgba(255,255,255,1)" stroke="rgba(112,112,112,0.259)" stroke-width="1px"
                     stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" shape-rendering="auto"
                     id="Elipse_2" rx="45" ry="45" cx="45" cy="45">
            </ellipse>
          </svg>
          <div id="A">
            <span>A</span>
          </div>
          <div id="C">
            <span>C</span>
          </div>
        </div>
      </div>
      <Link to='/' id="Grupo_6">
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
      <img id="restaurant_691397_1280" src="./assets/img/restaurant_691397_1280.png"/>
        <Socialpymes/>
    </div>
  )
};

export default Launch;

