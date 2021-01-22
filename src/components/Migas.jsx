import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ReactComponent as IconFlecha} from "../icons/flecha.svg";
import {capitalizeString} from '../utils/utils';

const Migas = ({data}) => {
    const mig = {
        Grupo_364: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "10px",
            fontSize: "17px",
            fontFamily: "Papyrus",
            fontWeight: "bolder",
            flex: '0 0 auto'
        },
        around: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            fontFamily: "Papyrus",
            fontWeight: "bolder",
            fontSize: "17px"
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
            {/*<div style={mig.around}>*/}
            <Link to="/categoria" style={{display: 'flex', alignItems: 'center', flex: 'auto'}} className="migas_a">
                <div style={{
                    background: 'linear-gradient(225deg, rgb(230, 230, 230), rgb(255, 255, 255))',
                    boxShadow: 'rgb(191, 191, 191) -5px 5px 9px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: '7em',
                    borderRadius: '10px',
                    padding: '.5em 1em'

                }}>
                    <IconFlecha style={{marginRight: '.4em', flex: '0 0 25%'}}/>
                    <span style={{paddingRight: '.5em'}}>Categorías</span>
                </div>
            </Link>
            <p style={{padding: " 0 10px"}}>>></p>
            <p style={{
                fontSize: '1.2em',
                color: 'dimgray',
                padding: '0 1em',
                background: '#B1D8E2',
                borderBottom: '1px solid black',
                borderRight: '1px solid black',
                bordrRadius: '50px'
            }}>{migas ? capitalizeString(migas) : null}</p>
        </div>
    );
}

export default Migas;
