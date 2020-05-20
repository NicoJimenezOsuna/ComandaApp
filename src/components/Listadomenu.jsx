import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
/*
* IMPORT SUPPORT FUNCIONS
*/
import {dosDecim} from '../utils/utils'

const Listadomenu = ({ dataid }) => {
    const listmenu = {
        cont_princ: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "5px",
            paddingBottom: "5px",
            fontSize: "20px",
            padding: "10px 10px"
        },
        cont_item : {
            width: '100%',  
        },
        cont_name : {
            width: '60%',
            textAlign: 'left'
        },
        cont_price : {
            width: '20%',
            textAlign: 'center'
        },
        cont_button : {
            width: '20%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        font : {
            fontFamily: 'Papyrus'
        }
    };

    let protocol = "http://";
    let url = "restaurante.comandaapp.es/api/ws/1/";
    let token = "cLzDdvFTJcl5cWg";
    //    http://restaurante.comandaapp.es/api/ws/1/cLzDdvFTJcl5cWg/6

    const [products, getProducts] = useState({});

    useEffect(() => {
        
        const userHeader = {
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json"
            }
        };

        const catIdtRequest = async (protocol, url, token, dataid) => {
            try {
                // Make a request
                const response = await axios.get(
                    `${protocol}${url}${token}/${dataid}`,
                    userHeader
                );
                const toString = JSON.stringify(response.data);
                const toObject = JSON.parse(toString);
                console.log("toObject", toObject.data.respuesta);
                await getProducts(toObject.data.respuesta);
            } catch (error) {
                console.log("error", error);
            }
        };
        catIdtRequest(protocol, url, token, dataid);
    }, [dataid, protocol, url, token]);

    return (
        <Fragment>
            {products.length > 0 ?
                products.map(item => {
                return (
                    <div style={listmenu.cont_princ}
                            key={item.nombreplato}>      
                        <div style={listmenu.cont_name}>
                            <p>{item.nombreplato}</p>
                        </div>
                        <div style={listmenu.cont_price}>
                            <p>{dosDecim(item.precio, 2)} <span style={listmenu.font}>€</span></p>
                        </div>
                        <div style={listmenu.cont_button}>
                            <button type="button">info</button>
                        </div>
                    </div>
                )
            })
                : ("null")}
        </Fragment>
    );
};
export default Listadomenu;
