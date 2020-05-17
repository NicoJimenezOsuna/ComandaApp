import React from 'react';



const Categorias = () => {

    const categorias = {
        cat_cont : {
            position: 'relative',
            width: `223px`,
            height: `223px`,
            // left: `482px`,
            // top: `278px`,
            overflow: 'visible',
            // --web-animation: 'fadein 0.4s ease-out',
            // --web-action-type: 'page',
            // --web-action-target: 'Arroces.html',
            cursor: 'pointer',
            
        },
        plato_img : {
            opacity: `0.5`,
            position: 'absolute',
            width: `223px`,
            height: `223px`,
            left: `0px`,
            top: `0px`,
            overflow: 'visible',
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

    const [categorias, getCategorias] = useState('Categorias');

    useEffect(() => {
        getCategorias(JSON.parse(localStorage.getItem('comandaApp')).app.categorias);
    },[categorias])

    return (

        <div id={item.id} style={categorias.cat_cont}>
            <img style={categorias.plato_img} src={item.imagenURL} />
                <div style={categorias.platos}>
                    <span style={categorias.nom_cat}>
                        {/* { categorias } */}
                        { item.nombre }
                    </span>
                </div>
        </div>

  )
}

export default Categorias;