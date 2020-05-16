import React, { Fragment } from "react";
import Spinner from '../components/Spinner';
// import Socialpymes from '../components/Socialpymes';

const Launcher = () => {

    return (
        <Fragment>
            <div id="Pantalla_de_carga">
                <div id="Grupo_2">
                    <svg class="Elipse_1">
                        <ellipse fill="rgba(255,255,255,1)" stroke="rgba(112,112,112,1)" stroke-width="1px" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" shape-rendering="auto" id="Elipse_1" rx="150" ry="150" cx="150" cy="150">
                        </ellipse>
                    </svg>
                    <svg class="Elipse_2">
                        <ellipse fill="rgba(255,255,255,1)" stroke="rgba(112,112,112,0.259)" stroke-width="1px" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" shape-rendering="auto" id="Elipse_2" rx="110" ry="110" cx="110" cy="110">
                        </ellipse>
                    </svg>
                    <div id="Grupo_1">
                        <div id="C">
                            <span>C</span>
                        </div>
                        <div id="A">
                            <span>A</span>
                        </div>
                    </div>
                </div>
                <div id="ComandApp">
                    <span>ComandApp</span>
                </div>
                <div id="Tu_carta_digital">
                    <span>Tu carta digital</span>
                </div>
                <Spinner />
                {/* <Socialpymes/> */}
            </div>
        </Fragment>
    )
};

export default Launcher;