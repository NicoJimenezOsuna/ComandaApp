import React, {Fragment, useEffect, useState} from 'react';


const Subcategorias = ({categoryData}) => {

  const [subcategorias, getSubcategorias] = useState({});

  useEffect(() => {
    getSubcategorias(JSON.parse(localStorage.getItem('categorySelected')));
  }, [subcategorias])

  return (
    <Fragment>
      <h1>hola</h1>
      {
        <p>{`Viene desde categoría ${subcategorias.id} y ${subcategorias.nombre}`}</p>
      }
    </Fragment>
  )


}


export default Subcategorias;
