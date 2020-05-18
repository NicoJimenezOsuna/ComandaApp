import React, {Fragment, useEffect, useState} from "react";
/*
* IMPORT COMPONENTS
 */
import Spinner from '../components/Spinner';
import Socialpymes from '../components/Socialpymes';
import Launch from '../components/Launch';

//fake data
// const datas = {
//     "app": {
//         "nombre_restaurante": "Mi restaurante"
//     },
//     "categorias": [
//         {
//             "id": 1,
//             "nombre": "arroces",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 2,
//             "nombre": "carnes",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 3,
//             "nombre": "pescados",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 4,
//             "nombre": "ensaladas",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 5,
//             "nombre": "bebidas",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 6,
//             "nombre": "postres",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         }
//     ],
//     "menu 2": [
//         {
//             "id": 1,
//             "nombre": "paella",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 2,
//             "nombre": "osubuco",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 3,
//             "nombre": "rabiolis",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 4,
//             "nombre": "lentejas",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 5,
//             "nombre": "pizza",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         },
//         {
//             "id": 6,
//             "nombre": "pescado",
//             "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
//         }
//     ]
// }

const datas = {
    "data": {
        "codigo": 'Mi restaurante',
        "mensaje": "OK",
        "respuesta": [
            {
                "orden": 1,
                "categoria_id": 6,
                "categoria": "Tapas",
                "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
            },
            {
                "orden": 4,
                "categoria_id": 2,
                "categoria": "Entremeses",
                "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
            },
            {
                "orden": 3,
                "categoria_id": 1,
                "categoria": "Carnes",
                "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
            },
            {
                "orden": 2,
                "categoria_id": 5,
                "categoria": "Pescados",
                "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1ahkkBoD15Hz_w4i77ox6AA_tvLjFJaQgzndxwX408wILg3Ik&usqp=CAU"
            }
        ]
    }
}

const Launcher = () => {

    const launcher = {
        Elipse_1 : {
            filter: 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161))',
            position: 'absolute',
            overflow: 'visible',
            width: `318px`,
            height: `318px`,
            left: `0px`,
            top: `0px`
        },
        Elipse_2 : {
            position: 'absolute',
            overflow: 'visible',
            width: `220px`,
            height: `220px`,
            left: `40px`,
            top: `40px`
        },
        A : {
            position: 'absolute',
            left: `85px`,
            top: ' 62px',
            overflow: 'visible',
            width: `69px`,
            whiteSpace: 'nowrap',
            textAlign: 'left',
            fontFamily: 'Papyrus',
            fontStyle: 'normal',
            fonteWight: 'normal',
            fontSize: `70px`,
            color: 'rgba(112,112,112,1)'
        },
        C : {
            position: 'absolute',
            left: `0px`,
            top: `0px`,
            overflow: 'visible',
            width: `131px`,
            whiteSpace: 'nowrap',
            textAlign: 'left',
            fontFamily: 'Papyrus',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: `130px`,
            color: 'rgba(112,112,112,1)'
        },
        ComandApp : {
            position: 'absolute',
            left: `153px`,
            top: `466px`,
            overflow: 'visible',
            width: `415px`,
            whiteSpace: 'nowrap',
            textAlign: 'left',
            fontFamily: 'Papyrus',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: `70px`,
            color: 'rgba(112,112,112,1)'
        },
        Tu_carta_digital : {
            position: 'absolute',
            left: `368px`,
            top: `577px`,
            overflow: 'visible',
            width: `200px`,
            whiteSpace: 'nowrap',
            textAlign: 'left',
            fontFamily: 'Papyrus',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: `30px`,
            color: 'rgba(112,112,112,1)'
        }
    }



    const [datos, getDatos] = useState({})

    useEffect(()=>{
           let call =  setTimeout(function(){
                localStorage.setItem('comandaApp',  JSON.stringify(datas));
                getDatos(JSON.parse(localStorage.getItem('comandaApp')))
            }, 5000);
            console.log('una y otra vez')
    }, [datos]);

    return (
        <Fragment>
            {!localStorage.getItem('comandaApp') ?
              <div id="Pantalla_de_carga">
                  <div id="Grupo_2">
                      <svg style={launcher.Elipse_1}>
                          <ellipse fill="rgba(255,255,255,1)" stroke="rgba(112,112,112,1)" stroke-width="1px"
                                   stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4"
                                   shape-rendering="auto" id="Elipse_1" rx="150" ry="150" cx="150" cy="150">
                          </ellipse>
                      </svg>
                      <svg style={launcher.Elipse_2}>
                          <ellipse fill="rgba(255,255,255,1)" stroke="rgba(112,112,112,0.259)" stroke-width="1px"
                                   stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4"
                                   shape-rendering="auto" id="Elipse_2" rx="110" ry="110" cx="110" cy="110">
                          </ellipse>
                      </svg>
                      <div id="Grupo_1">
                          <div style={launcher.C}>
                              <span>C</span>
                          </div>
                          <div style={launcher.A}>
                              <span>A</span>
                          </div>
                      </div>
                  </div>
                  <div style={launcher.ComandApp}>
                      <span>ComandApp</span>
                  </div>
                  <div style={launcher.Tu_carta_digital}>
                      <span>Tu carta digital</span>
                  </div>
                  <Spinner/>
                  <Socialpymes/>
              </div>
              :
              <Launch/>
            }
        </Fragment>
    )
};

export default Launcher;
