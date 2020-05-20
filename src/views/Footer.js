import React, {Fragment} from 'react';

const Footer = () => {

  const styles = {

    Contenedor : {
      // position: 'relative',
      // border: '2px solid rgba(112,112,112,1)',
      backgroundColor: `rgba(230,230,230,1)`,
      borderRadius: `100px`,
      position: 'absolute',
      top:'1116px',
      left: `40px`,
      height: `105px`,
      width: `639px`,
      margin: 'auto',
      display: 'flex'

    },
    Boton: {
      position: 'relative',
      height: `105px`,
      width: `105px`,
      margin: 'auto',
    }

  }

  return (
    <Fragment>
      <div style={styles.Contenedor}>
        <img style={styles.Boton} src="./assets/img/footer/ico-back.svg" alt="imagen de footer"/>
        <img style={styles.Boton} src="./assets/img/footer/ico-tel.svg" alt="imagen de footer"/>
        <img style={styles.Boton} src="./assets/img/footer/ico-gps.svg" alt="imagen de footer"/>
        <img style={styles.Boton} src="./assets/img/footer/ico-mail.svg" alt="imagen de footer"/>
      </div>
    </Fragment>
  )
}
export default Footer;
