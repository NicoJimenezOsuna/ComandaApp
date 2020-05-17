import React, {Fragment, useEffect, useState} from 'react';
import {Link} from "react-router-dom";



const Categorias = () => {

    const cat = {
        padre : {
            display : 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            width: `720px`,
            padding: `30px 7.5px`
        },
        cat_cont : {
            flexGrow: `1`,
            position: 'relative',
            margin: `3.6px`,
            width: `30%`,
            height: `223px`,
            // left: `482px`,
            // top: `278px`,
            overflow: 'visible',
            // --web-animation: 'fadein 0.4s ease-out',
            // --web-action-type: 'page',
            // --web-action-target: 'Arroces.html',
            cursor: 'pointer',
            border: '2px solid black'

            
        },
        plato_img : {
            opacity: `0.5`,
            position: 'relative',
            width: `100%`,
            // height: `223px`,
            left: `0px`,
            top: `0px`,
            overflow: 'visible'
        },
        platos : {
            // transform: 'translate(-249px, -499px) matrix(1,0,0,1,269.2774,570.7774) rotate(-45deg)',

            // position: 'rela',
            // left: `0`,
            // right : `0`,
            // top: `0`,
            // bottom: `0`,
            // margin : 'auto',
            overflow: 'visible',
            width: '100%',
            height: '100%',
            
        },
        nom_cat : {
            transform: 'rotate(-45deg)',
            transformOrigin: 'center',
            position: 'absolute',
            top: `50%`,
            left: `50%`,
            height: `50%`,
            width: `50%`,
            margin: `-15% 0 0 -25%`,
            display : 'block',
            whiteSpace: 'nowrap',
            textAlign: 'left',
            fontFamily: 'Papyrus',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: `50px`,
            color: 'rgba(0,0,0,1)',
        }
    }

    const [categorias, getCategorias] = useState([]);

    useEffect(() => {
        getCategorias(JSON.parse(localStorage.getItem('comandaApp')).categorias);
    },[])

    return (
        <Fragment>
            <Link to = "/subcategoria">
                <div style={cat.padre}>
                    {categorias ? (
                    categorias.map(item =>{
                        return (
                            <div 
                            id={item.id} 
                            style={cat.cat_cont} key={item.id}
                            data-id={item.id}
                            data-name={item.nombre}
                            data-objectKey="categorias"
                            >
                            <img style={cat.plato_img} src={item.imagenUrl} />
                                <div style={cat.platos}>
                                    <span style={cat.nom_cat}>
                                        { item.nombre }
                                    </span>
                                </div>
                        </div>
                        )
                    })

                    ):
                    <div>
                        <img src="./assets/img/logo192.png" alt="algo"/>
                    </div>
                    }
                </div>
            </Link>
        </Fragment>

  )
}

export default Categorias;