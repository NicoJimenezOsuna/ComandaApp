"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _timesCircleRegular = require("../../icons/times-circle-regular.svg");

var _Input = require("./Input");

var _Input2 = _interopRequireDefault(_Input);

var _Buttonsubmit = require("./Buttonsubmit");

var _Buttonsubmit2 = _interopRequireDefault(_Buttonsubmit);

var _reactRedux = require("react-redux");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _connect_data_restaurantes = require("../../data/connect_data_restaurantes");

var _index = require("../../redux/actions/index");

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login(_ref) {
    var closeloginmodal = _ref.closeloginmodal,
        reduxToken = _ref.reduxToken;


    var login = {
        cont_form: {
            width: '100%',
            height: 'auto',
            position: 'relative'
        },
        cont_img: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        },
        img: {
            width: '10em',
            height: '5em'
        },
        error: {
            position: 'absolute',
            textAlign: 'center',
            width: '80%',
            color: 'white',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '.5em 0',
            background: '#fe4949',
            borderRadius: '10px',
            marginBottom: '30px'
        }
    };

    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        messageErrorConection = _useState2[0],
        getMessageErrorConection = _useState2[1];

    var _useState3 = (0, _react.useState)(''),
        _useState4 = _slicedToArray(_useState3, 2),
        phone = _useState4[0],
        getPhone = _useState4[1];

    var _useState5 = (0, _react.useState)({
        telefono: ''
    }),
        _useState6 = _slicedToArray(_useState5, 2),
        errorsProfile = _useState6[0],
        getErrorsProfile = _useState6[1];

    var _useState7 = (0, _react.useState)(false),
        _useState8 = _slicedToArray(_useState7, 2),
        inputok = _useState8[0],
        getInputOk = _useState8[1];

    var _useState9 = (0, _react.useState)(false),
        _useState10 = _slicedToArray(_useState9, 2),
        redirectAppHomeView = _useState10[0],
        getRedirectAppHomeView = _useState10[1];

    var handleSubmit = function handleSubmit(e) {
        e.preventDefault();
        var numphone = phone;
        var token = reduxToken;
        if (inputok) {
            var datos = void 0;
            // http://restaurante.comandapp.es/api/ws/5/cLZDdvFTJcl5cWG/666666666
            _axios2.default.get("" + _connect_data_restaurantes.HTTP_PROTOCOL + _connect_data_restaurantes.URL_MAIN + _connect_data_restaurantes.PATH_API + "5/" + token + "/" + numphone, _connect_data_restaurantes.USER_HEADERS).then(function (response) {
                if (response.data.data.mensaje === 'OK') {
                    datos = response.data.data.respuesta[0];
                    datos = _extends({}, datos, { telefono: numphone });
                    (0, _index.addClientProfile)(datos);
                } else {
                    (0, _index.addClientProfile)({ telefono: numphone });
                }
                getRedirectAppHomeView(true);
            }).catch(function (error) {
                getMessageErrorConection('¡¡Error!!. Imposible conectar con el servidor.');
                setTimeout(function () {
                    getMessageErrorConection('');
                }, 2000);
                console.log('error en login', error);
            });
        }
    };

    var handleChange = function handleChange(e) {
        var value = e.target.value;
        if (value === '') {
            getErrorsProfile(_extends({}, errorsProfile, {
                "telefono": "El campo es requerido"
            }));
            getInputOk(false);
            return;
        }
        if (!/[0-9]/.test(value)) {
            getErrorsProfile(_extends({}, errorsProfile, {
                "telefono": "Sólo se admiten números"
            }));
            getInputOk(false);
            return;
        }
        if (value.length !== 9 && value !== '') {
            getErrorsProfile(_extends({}, errorsProfile, {
                "telefono": "Introduce un número válido"
            }));
            getInputOk(false);
            return;
        }
        getErrorsProfile(_extends({}, errorsProfile, {
            "telefono": ""
        }));
        getPhone(value);
        getInputOk(true);
    };

    if (redirectAppHomeView) {
        return _react2.default.createElement(_reactRouter.Redirect, { to: "/comandappHome" });
    }

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_timesCircleRegular.ReactComponent, {
            style: { color: 'rgba(0,0,0,.4', width: '3em', margin: '-5px 0px 0px -20px' },
            onClick: closeloginmodal
        }),
        _react2.default.createElement(
            "div",
            { style: login.cont_img },
            _react2.default.createElement("img", { id: "img_boton_comanda",
                style: login.img,
                src: "./assets/img/homecomanda/comandapp_home_300.png", alt: "logo comandahome socialpymes" })
        ),
        _react2.default.createElement(
            "form",
            { id: "form_login_home",
                onSubmit: handleSubmit,
                style: login.cont_form },
            messageErrorConection !== '' ? _react2.default.createElement(
                "p",
                {
                    style: login.error
                },
                messageErrorConection
            ) : null,
            _react2.default.createElement(_Input2.default, {
                settype: "number",
                setid: "telefono",
                setplaceholder: "tel\xE9fono",
                setname: "telefono",
                icontype: 'telefono'
                // textlabel={null}
                , bgIcon: null,
                textlabel: 'Introduce tu teléfono:',
                handleChange: handleChange,
                errorsProfile: errorsProfile,
                login: true
            }),
            _react2.default.createElement(_Buttonsubmit2.default, null)
        )
    );
};

function mapStateToProps(state) {
    return {
        reduxToken: state.Token.token
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Login);