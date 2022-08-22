'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _observaciones = require('../../icons/homecomanda/observaciones.svg');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Textarea = function Textarea(_ref) {
    var textlabel = _ref.textlabel,
        bgIcon = _ref.bgIcon,
        setid = _ref.setid,
        setplaceholder = _ref.setplaceholder,
        setname = _ref.setname,
        icontype = _ref.icontype,
        coloricon = _ref.coloricon,
        required = _ref.required,
        maxlength = _ref.maxlength,
        valueText = _ref.valueText,
        errormessage = _ref.errormessage;

    var renderIconInput = function renderIconInput() {
        switch (icontype) {
            case 'observaciones':
                return _react2.default.createElement(_observaciones.ReactComponent, { style: input.icon });
            default:
                return _react2.default.createElement(_observaciones.ReactComponent, { style: input.icon });
        }
    };

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
        parrafo: {
            fontSize: '80%',
            fontWeight: '400',
            color: 'cornflowerblue',
            opacity: '.7',
            zIndex: '-1'
        }
    };

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
            'label',
            { style: input.label, htmlFor: setname },
            textlabel !== null ? textlabel : null
        ),
        _react2.default.createElement(
            'div',
            { style: input.cont_input },
            _react2.default.createElement(
                'div',
                { className: 'alturatextarea' },
                renderIconInput()
            ),
            _react2.default.createElement('textarea', { className: 'alturatextarea',
                style: input.input,
                id: setid,
                placeholder: setplaceholder,
                name: setname,
                maxLength: maxlength,
                autoComplete: 'off',
                onKeyUp: function onKeyUp(e) {
                    return valueText(e);
                }
            }),
            _react2.default.createElement(
                'p',
                { style: {
                        color: 'red',
                        fontSize: '.9rem',
                        textAlign: 'center',
                        width: '60%',
                        lineBreak: 'normal'
                    },
                    className: errormessage.length === 0 ? 'hidden' : null
                },
                errormessage
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'smallrequired', style: required ? null : { marginBottom: '15px' } },
            _react2.default.createElement(
                'p',
                { style: input.parrafo },
                required ? 'requerido' : null
            )
        )
    );
};
exports.default = Textarea;