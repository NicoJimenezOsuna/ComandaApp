import React, {Fragment, useState, useEffect} from 'react';
import Labelsmenus from './Labelsmenus';
import axios from "axios";
import {fakeData1} from "../data/data";
import {protocol} from "../utils/utils";
import {CONNECT_TOKEN} from "../data/restaurante";
import Platosmenus from "./Platosmenus";
import Spinner from "./Spinner";

const Listadomenu = ({dataid, dataSliderHandler}) => {

    const [sectionsMenu, getSectionsMenu] = useState([]);
    const [seccid, getSeccid] = useState([]);

    useEffect(() => {

        getSeccid(dataid);

        // http://restaurante.comandaapp.es/api/ws/1/cLZDdvFTJcl5cWG/5
        let url = "//restaurante.comandapp.es/api/ws/1/";
        const userHeader = {
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json"
            }
        };

        const menusRequest = async (protocol, url, token, id) => {
            try {
                // Make a request
                const response = await axios.get(`${protocol}${url}${token}/${id}`, userHeader);
                const toString = JSON.stringify(response.data);
                const toObject = JSON.parse(toString);
                //to Localstorage
                // localStorage.setItem(
                //     "comandaApp",
                //     JSON.stringify(response.data)
                // );
                //to State
                // if (!toObject.data.respuesta > 0) {
                //     localStorage.setItem(
                //         "comandaApp",
                //         JSON.stringify(fakeData1)
                //     );
                //     getDatos(fakeData1.data.respuesta)
                // } else {
                await getSectionsMenu(toObject.data.respuesta);
                // }

            } catch (error) {
                // localStorage.setItem(
                //     "comandaApp",
                //     JSON.stringify(fakeData1)
                // );
                // getSectionsMenu(fakeData1.data.respuesta)
                console.log("error", error)
            }
        }
        //REQUEST
        menusRequest(protocol, url, CONNECT_TOKEN, dataid)
    }, [dataid])

    return (
        <Fragment>
            {Object.keys(sectionsMenu).length > 0 ?
                sectionsMenu.map(item => {
                    return (
                        <Fragment key={item.categoria}>
                            <Labelsmenus data={item.categoria}/>
                            <Platosmenus
                                catid={item.categoria_id}
                                seccid={seccid}
                                dataSliderHandler={dataSliderHandler}
                            />
                        </Fragment>
                    )
                })
                :
                <Spinner/>
            }
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1em',
                fontSize: '1.5em',
                border: '1px solid black',
                margin: '0 10px'

            }}
            >
                <span>Total</span>
                <span>PVP: 15 €</span>
            </div>
        </Fragment>
    )
}
export default Listadomenu;