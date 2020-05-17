import React, {Fragment, useEffect, useState} from 'react';



const Subcategorias = () =>{

    const [subcategorias, getSubcategorias] = useState([]);

    useEffect(() => {
        getSubcategorias(JSON.parse(localStorage.getItem('comandaApp')).categorias);
    },[])

    return (
        <h1>hola</h1>
    )


}


export default Subcategorias;