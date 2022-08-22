"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _llamada = require("../../icons/homecomanda/llamada.svg");

var _entregaADomicilio = require("../../icons/homecomanda/entrega-a-domicilio.svg");

var _nombre = require("../../icons/homecomanda/nombre.svg");

var _cpostal = require("../../icons/homecomanda/cpostal.svg");

var _correoElectronico = require("../../icons/homecomanda/correo-electronico.svg");

var _pueblo = require("../../icons/homecomanda/pueblo.svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(_ref) {
    var textlabel = _ref.textlabel,
        bgIcon = _ref.bgIcon,
        settype = _ref.settype,
        setid = _ref.setid,
        setplaceholder = _ref.setplaceholder,
        setname = _ref.setname,
        icontype = _ref.icontype,
        coloricon = _ref.coloricon,
        required = _ref.required,
        handleChange = _ref.handleChange,
        errorsProfile = _ref.errorsProfile,
        defaultValue = _ref.defaultValue,
        login = _ref.login;


    var renderIconInput = function renderIconInput() {
        switch (icontype) {
            case 'telefono':
                return _react2.default.createElement(_llamada.ReactComponent, { style: input.icon });
            case 'direccion':
                return _react2.default.createElement(_entregaADomicilio.ReactComponent, { style: input.icon });
            case 'nombre':
                return _react2.default.createElement(_nombre.ReactComponent, { style: input.icon });
            case 'cpostal':
                return _react2.default.createElement(_cpostal.ReactComponent, { style: input.icon });
            case 'poblacion':
                return _react2.default.createElement(_pueblo.ReactComponent, { style: input.icon });
            case 'email':
                return _react2.default.createElement(_correoElectronico.ReactComponent, { style: input.icon });
            default:
                return _react2.default.createElement(_llamada.ReactComponent, { style: input.icon });
        }
    };
    if (errorsProfile) {
        console.log(errorsProfile);
    }

    var input = {
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
            fill: coloricon !== null ? coloricon : 'black'
        },
        input: {
            fontSize: '1.4em',
            textIndent: '.3em',
            borderRadius: '0 10px 10px 0'
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
        parrafo_required: {
            fontSize: '80%',
            fontWeight: '400',
            color: 'cornflowerblue',
            opacity: '.7',
            zIndex: '-1',
            alignSelf: 'flex-end'
        }
    };

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
            "label",
            { style: input.label, htmlFor: setid },
            textlabel !== null ? textlabel : null
        ),
        _react2.default.createElement(
            "div",
            { style: input.cont_input },
            renderIconInput(),
            _react2.default.createElement("input", { style: input.input,
                defaultValue: defaultValue,
                type: settype,
                id: setid,
                placeholder: setplaceholder,
                name: setname,
                onBlur: function onBlur(e) {
                    return handleChange(e);
                }
            })
        ),
        _react2.default.createElement(
            "div",
            { className: "smallrequired", style: required ? null : { marginBottom: '15px' } },
            errorsProfile ? errorsProfile[setname].length > 0 ? _react2.default.createElement(
                "p",
                { className: errorsProfile[setname].length > 0 ? 'displayed' : 'displayed_none',
                    style: {
                        color: 'red',
                        textAlign: login ? 'center' : 'inherit'
                    }
                },
                errorsProfile[setname].length > 0 ? errorsProfile[setname] : null
            ) : _react2.default.createElement(
                "p",
                { style: input.parrafo_required },
                required ? 'requerido' : null
            ) : null
        )
    );
};

exports.default = Input;