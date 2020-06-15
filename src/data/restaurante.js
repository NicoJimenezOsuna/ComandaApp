//Profile data connecct and configuration
import axios from "axios";
//IMPORT ACTION REDUX
import {addProfile} from "../redux/actions";

export const CONNECT_TOKEN = "cLzDdvFTJcl5cWG";
//URL CONNECTION
export const URL = "//restaurante.comandapp.es/api/ws/0/";
/*
*
* FIRST CONNECT API FUNCTION
*
* */
// http://restaurante.comandapp.es/api/ws/0/cLZDdvFTJcl5cWG


export const firstRequest = async (
    protocol,
    url,
    token,
    getMensaje,
    getDatos,
    getNoconnection
) => {
    try {
        // let url = "//restaurante.comandapp.es/api/ws/0/";
        const userHeader = {
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json"
            }
        };
        // Make a request
        const response = await axios.get(`${protocol}${url}${token}`, userHeader);
        const toString = JSON.stringify(response.data);
        const toObject = JSON.parse(toString);
        //to Localstorage
        if (toObject.data.mensaje !== 'OK') {
            getMensaje(toObject.data.mensaje)
        } else {
            addProfile(toObject.data)
            // localStorage.setItem(
            //     "comandaApp",
            //     JSON.stringify(response.data)
            // );
        }


        //to State
        // if (!toObject.data.respuesta > 0) {
        //     localStorage.setItem(
        //         "comandaApp",
        //         JSON.stringify(fakeData1)
        //     );
        //     getDatos(fakeData1.data.respuesta)
        // } else {
        await getDatos(toObject);
        // }
        // getNoconnection(false)
    } catch (error) {
        // localStorage.setItem(
        //     "comandaApp",
        //     JSON.stringify(fakeData1)
        // );
        // getDatos(fakeData1.data.respuesta)
        // getNoconnection(true)
        console.log("error", error);
    }
};


