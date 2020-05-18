import React, {Fragment, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";


const Categorias = () => {

  const history = useHistory();

  const cat = {
    padre: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      width: `720px`,
      padding: `30px 7.5px`
    },
    cat_cont: {
      position: 'relative',
      margin: `3.6px`,
      // width: `32%`,
        flex:' 0 3 32%',
      height: `223px`,
      // left: `482px`,
      // top: `278px`,
      overflow: 'visible',
      // --web-animation: 'fadein 0.4s ease-out',
      // --web-action-type: 'page',
      // --web-action-target: 'Arroces.html',
      cursor: 'pointer',
      border: '2px solid black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    plato_img: {
      opacity: `0.5`,
      position: 'absolute',
      width: `100%`,
      height: `100%`,
      left: `0px`,
      top: `0px`,
      overflow: 'visible'
    },
    platos: {
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
    nom_cat: {
      transform: 'rotate(-45deg)',
      // transformOrigin: 'center',
      position: 'absolute',
      // top: `50%`,
      // left: `50%`,
      // height: `50%`,
      // width: `50%`,
      // margin: `-15% 0 0 -25%`,
      // display : 'block',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      fontFamily: 'Papyrus',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: `40px`,
      color: 'rgba(0,0,0,1)',
    }
  }

  const [categorias, getCategorias] = useState([]);

  useEffect(() => {
    getCategorias(JSON.parse(localStorage.getItem('comandaApp')).data.respuesta);
  }, [])


  const sendCategory = (item1, item2) => {
    localStorage.setItem('categorySelected', JSON.stringify({id: item1, nombre: item2}));
    history.push("/subcategoria");
  };

  return (
    <Fragment>
      <div style={cat.padre}>
        {categorias ? (
            categorias.map(item => {
              return (
                <div
                  onClick={() => sendCategory(item.categoria_id, item.categoria)}
                  id={item.categoria}
                  style={cat.cat_cont} key={item.id}
                  key={item.categoria}
                >
                  <img style={cat.plato_img} src={item.imagen} alt={`Imagen de categoría ${item.categoria}`}/>
                  {/*<div style={cat.platos}>*/}
                  <p style={cat.nom_cat}>
                    {item.categoria}
                  </p>
                  {/*</div>*/}
                </div>
              )
            })

          ) :
          <div>
            <img src="./assets/img/logo192.png" alt="algo"/>
          </div>
        }
      </div>
    </Fragment>

  )
}

export default Categorias;
