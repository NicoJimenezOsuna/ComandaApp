import React, {Fragment} from 'react';
import {ReactComponent as Observaciones} from "../../icons/homecomanda/observaciones.svg";

const Textarea = ({
                      textlabel,
                      bgIcon,
                      setid,
                      setplaceholder,
                      setname,
                      icontype,
                      coloricon,
                      required,
                      maxlength,
                      valueText,
                      errormessage
                  }) => {
    const renderIconInput = () => {
        switch (icontype) {
            case 'observaciones':
                return <Observaciones style={input.icon}/>
            default:
                return <Observaciones style={input.icon}/>
        }

    }

    const input = {
        cont_input: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            // marginBottom: '15px',
            flexWrap: 'wrap',
            paddingRight: '1em',
            paddingLeft: '1em'
        },
        icon: {
            padding: '10px',
            background: bgIcon === null ? 'dodgerblue' : bgIcon,
            width: '3em',
            height: '3em',
            textAlign: 'center',
            borderRadius: '10px 0 0 10px',
            fill: coloricon !== null ? coloricon : 'black',
        },
        input: {
            fontSize: '1.4em',
            textIndent: '.3em',
            borderRadius: '0 10px 10px 0',
        },
        label: {
            display: 'block',
            width: '60%',
            textAlign: 'left',
            marginLeft: '20%'
        },
        smallrequired: {
            marginBottom: '15px',
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            paddingRight: '1em',
            paddingLeft: '1em'
        },
        parrafo: {
            fontSize: '80%',
            fontWeight: '400',
            color: 'cornflowerblue',
            opacity: '.7',
            zIndex: '-1'
        }
    }

    return (
        <Fragment>
            <label style={input.label} htmlFor={setname}>{textlabel !== null ? textlabel : null}</label>
            <div style={input.cont_input}>
                <div className="alturatextarea">
                    {renderIconInput()}
                </div>
                <textarea className="alturatextarea"
                          style={input.input}
                          id={setid}
                          placeholder={setplaceholder}
                          name={setname}
                          maxLength={maxlength}
                          autoComplete="off"
                          onKeyUp={(e) => valueText(e)}
                />
                <p style={{
                    color: 'red',
                    fontSize: '.9rem',
                    textAlign: 'center',
                    width: '60%',
                    lineBreak: 'normal'
                }}
                   className={errormessage.length === 0 ? 'hidden' : null}
                >
                    {errormessage}
                </p>
            </div>
            <div className="smallrequired" style={required ? null : {marginBottom: '15px'}}>
                <p style={input.parrafo}>{required ? 'requerido' : null}</p>
            </div>
        </Fragment>
    )

}
export default Textarea;