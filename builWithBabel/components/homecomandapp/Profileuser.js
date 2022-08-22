"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Input = require("./Input");

var _Input2 = _interopRequireDefault(_Input);

var _TitleSection = require("./TitleSection");

var _TitleSection2 = _interopRequireDefault(_TitleSection);

var _ExplanationSection = require("./ExplanationSection");

var _ExplanationSection2 = _interopRequireDefault(_ExplanationSection);

var _reactRedux = require("react-redux");

var _index = require("../../redux/actions/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Profileuser = function Profileuser(_ref) {
    var clientProfile = _ref.clientProfile;

    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        errorEnvio = _useState2[0],
        getErrorEnvio = _useState2[1];

    var _useState3 = (0, _react.useState)(''),
        _useState4 = _slicedToArray(_useState3, 2),
        successfullSave = _useState4[0],
        getSuccessfullSave = _useState4[1];

    var _useState5 = (0, _react.useState)({
        telefono: clientProfile.telefono,
        nombre: clientProfile.nombre,
        direccion: clientProfile.direccion,
        cp: clientProfile.cp,
        poblacion: clientProfile.poblacion,
        email: clientProfile.email

    }),
        _useState6 = _slicedToArray(_useState5, 2),
        valuesProfile = _useState6[0],
        getValuesProfile = _useState6[1];

    var _useState7 = (0, _react.useState)({
        telefono: '',
        nombre: '',
        direccion: '',
        cp: '',
        poblacion: '',
        email: ''

    }),
        _useState8 = _slicedToArray(_useState7, 2),
        errorsProfile = _useState8[0],
        getErrorsProfile = _useState8[1];

    var handleChange = function handleChange(e) {
        e.preventDefault();

        var target = e.target;
        var name = target.name;
        var value = target.value;

        switch (name) {
            case 'telefono':
                if (value === '') {
                    getErrorsProfile(_extends({}, errorsProfile, {
                        "telefono": "El campo es requerido"
                    }));
                    return;
                }
                if (!/[0-9]/.test(value)) {
                    getErrorsProfile(_extends({}, errorsProfile, {
                        "telefono": "Sólo se admiten números"
                    }));
                    return;
                }
                if (value.length < 9 && value !== '') {
                    getErrorsProfile(_extends({}, errorsProfile, {
                        "telefono": "Tiene que ser mayor de 9 dígitos"
                    }));
                    return;
                }
                getErrorsProfile(_extends({}, errorsProfile, {
                    "telefono": ""
                }));
                break;
            case 'nombre':
                if (value === '') {
                    getErrorsProfile(_extends({}, errorsProfile, {
                        "nombre": "El campo es requerido"
                    }));
                    return;
                }
                if (/[0-9]/.test(value)) {
                    getErrorsProfile(_extends({}, errorsProfile, {
                        "nombre": "No se admiten números en nombre"
                    }));
                    return;
                }
                if (value.length < 3) {
                    getErrorsProfile(_extends({}, errorsProfile, {
                        "nombre": "Mínimo tres letras para nombre"
                    }));
                    return;
                }
                if (!/[a-zA-Z]/.test(value)) {
                    getErrorsProfile(_extends({}, errorsProfile, {
                        "nombre": "Sólo se admite texto"
                    }));
                    return;
                }
                getErrorsProfile(_extends({}, errorsProfile, {
                    "nombre": ""
                }));
                break;
            case 'direccion':
                if (value === '') {
                    getErrorsProfile(_extends({}, errorsProfile, {
                        "direccion": "El campo es requerido"
                    }));
                    return;
                }
                if (!/[A-Za-z0-9]/.test(value)) {
                    getErrorsProfile(_extends({}, errorsProfile, {
                        "direccion": "Sólo texto y números"
                    }));
                    return;
                }
                if (value.length < 5) {
                    getErrorsProfile(_extends({}, errorsProfile, {
                        "direccion": "Mínimo tres letras"
                    }));
                    return;
                }
                getErrorsProfile(_extends({}, errorsProfile, {
                    "direccion": ""
                }));
                break;
            case 'cp':
                if (value.length < 5 && value !== '') {
                    getErrorsProfile(_extends({}, errorsProfile, {
                        "cp": "Código Postal debe contener 5 dígitos "
                    }));
                    return;
                }
                if (!/[0-9]/.test(value) && value !== '') {
                    getErrorsProfile(_extends({}, errorsProfile, {
                        "cp": "Sólo se admiten números "
                    }));
                    return;
                }
                getErrorsProfile(_extends({}, errorsProfile, {
                    "cp": ""
                }));
                break;
            case 'poblacion':
                if (!/[a-zA-Z]/.test(value) && value !== '') {
                    getErrorsProfile(_extends({}, errorsProfile, {
                        "direccion": "Sólo se admite texto"
                    }));
                    return;
                }
                if (value.length < 2 && value !== '') {
                    getErrorsProfile(_extends({}, errorsProfile, {
                        "poblacion": "No es una dirección válida"
                    }));
                    return;
                }
                getErrorsProfile(_extends({}, errorsProfile, {
                    "poblacion": ""
                }));
                break;
            case 'email':
                if (!value.includes('@') && value !== '') {
                    getErrorsProfile(_extends({}, errorsProfile, {
                        "email": "Email incorrecto"
                    }));
                    return;
                }
                if (!value.includes('.') && value !== '') {
                    getErrorsProfile(_extends({}, errorsProfile, {
                        "email": "Email incorrecto"
                    }));
                    return;
                }
                getErrorsProfile(_extends({}, errorsProfile, {
                    "email": ""
                }));
                break;
            default:
                break;
        }
        getValuesProfile(_extends({}, valuesProfile, _defineProperty({}, name, value)));
    };

    var dataUser = function dataUser() {
        if (valuesProfile.telefono.length > 0 && valuesProfile.nombre.length > 0 && valuesProfile.direccion.length > 0) {
            getErrorEnvio('');
            (0, _index.addClientProfile)(valuesProfile);
            getSuccessfullSave('Guardado con éxito');
            setTimeout(function () {
                getSuccessfullSave('');
            }, 2000);
        } else {
            getErrorEnvio('¡¡Error!! Revise campos requeridos');
        }
    };

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_TitleSection2.default, { title: 'Datos de envío' }),
        _react2.default.createElement(_ExplanationSection2.default, {
            explanation: 'Aquí podrás actualizar cualquier dato relacionado con los envíos y contacto.' + ' Los datos no serán enviados hasta que realices tu primer pedido.'
        }),
        _react2.default.createElement(
            "div",
            { id: "userprofile" },
            _react2.default.createElement(_Input2.default, {
                defaultValue: clientProfile.telefono,
                pattern: "[0-9]",
                settype: "number",
                setid: "telefono",
                setplaceholder: "tel\xE9fono",
                setname: "telefono",
                icontype: 'telefono',
                textlabel: 'número de teléfono',
                bgIcon: '#B1D8E2',
                coloricon: '#707070',
                required: true,
                handleChange: handleChange,
                errorsProfile: errorsProfile
            }),
            _react2.default.createElement(_Input2.default, {
                defaultValue: clientProfile.nombre,
                pattern: "[a-zA-Z]",
                settype: "text",
                setid: "nombre",
                setplaceholder: "nombre",
                setname: "nombre",
                icontype: 'nombre',
                textlabel: 'nombre de usuario',
                bgIcon: '#B1D8E2',
                coloricon: '#707070',
                required: true,
                handleChange: handleChange,
                errorsProfile: errorsProfile
            }),
            _react2.default.createElement(_Input2.default, {
                defaultValue: clientProfile.direccion,
                pattern: "[a-zA-Z]",
                settype: "text",
                setid: "direccion",
                setplaceholder: "direcci\xF3n de entrega",
                setname: "direccion",
                icontype: 'direccion',
                textlabel: 'dirección de envío',
                bgIcon: '#B1D8E2',
                coloricon: '#707070',
                required: true,
                handleChange: handleChange,
                errorsProfile: errorsProfile
            }),
            _react2.default.createElement(_Input2.default, {
                defaultValue: clientProfile.cp,
                settype: "number",
                setid: "cp",
                setplaceholder: "c\xF3digo postal",
                setname: "cp",
                icontype: 'cpostal',
                textlabel: 'Código postal',
                bgIcon: '#B1D8E2',
                coloricon: '#707070',
                required: false,
                handleChange: handleChange,
                errorsProfile: errorsProfile
            }),
            _react2.default.createElement(_Input2.default, {
                defaultValue: clientProfile.poblacion,
                settype: "text",
                setid: "poblacion",
                setplaceholder: "poblaci\xF3n",
                setname: "poblacion",
                icontype: 'poblacion',
                textlabel: 'Población',
                bgIcon: '#B1D8E2',
                coloricon: '#707070',
                required: false,
                handleChange: handleChange,
                errorsProfile: errorsProfile
            }),
            _react2.default.createElement(_Input2.default, {
                defaultValue: clientProfile.email,
                settype: "email",
                setid: "email",
                setplaceholder: "correo electr\xF2nico",
                setname: "email",
                icontype: 'email',
                textlabel: 'correo electrònico',
                bgIcon: '#B1D8E2',
                coloricon: '#707070',
                required: false,
                handleChange: handleChange,
                errorsProfile: errorsProfile
            }),
            errorEnvio !== '' ? _react2.default.createElement(
                "p",
                { style: { textAlign: 'center', color: 'red', textDecoration: 'underline' } },
                errorEnvio
            ) : null,
            successfullSave !== '' ? _react2.default.createElement(
                "p",
                { style: { textAlign: 'center', color: 'green', textDecoration: 'underline' } },
                successfullSave
            ) : null,
            _react2.default.createElement(
                "button",
                { id: "submit_login",
                    onClick: dataUser
                },
                "Guardar"
            )
        )
    );
};

function mapStateToProps(state) {
    return {
        clientProfile: state.ClientProfile.clientProfile
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Profileuser);