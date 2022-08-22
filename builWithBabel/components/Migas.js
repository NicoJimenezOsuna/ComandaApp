"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _flecha = require("../icons/flecha.svg");

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Migas = function Migas(_ref) {
    var data = _ref.data;

    var mig = {
        Grupo_364: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "10px",
            fontSize: "17px",
            fontFamily: "Papyrus",
            fontWeight: "bolder",
            flex: '0 0 auto'
        },
        around: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            fontFamily: "Papyrus",
            fontWeight: "bolder",
            fontSize: "17px"
        }
    };

    var _useState = (0, _react.useState)("uno"),
        _useState2 = _slicedToArray(_useState, 2),
        migas = _useState2[0],
        getMigas = _useState2[1];

    (0, _react.useEffect)(function () {
        if (migas !== data) {
            getMigas(data);
        }
    }, [migas, data]);

    return _react2.default.createElement(
        "div",
        { style: mig.Grupo_364 },
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/categoria", style: { display: 'flex', alignItems: 'center', flex: 'auto' }, className: "migas_a" },
            _react2.default.createElement(
                "div",
                { style: {
                        background: 'linear-gradient(225deg, rgb(230, 230, 230), rgb(255, 255, 255))',
                        boxShadow: 'rgb(191, 191, 191) -5px 5px 9px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minWidth: '7em',
                        borderRadius: '10px',
                        padding: '.5em 1em'

                    } },
                _react2.default.createElement(_flecha.ReactComponent, { style: { marginRight: '.4em', flex: '0 0 25%' } }),
                _react2.default.createElement(
                    "span",
                    { style: { paddingRight: '.5em' } },
                    "Categor\xEDas"
                )
            )
        ),
        _react2.default.createElement(
            "p",
            { style: { padding: " 0 10px" } },
            ">>"
        ),
        _react2.default.createElement(
            "p",
            { style: {
                    fontSize: '1.2em',
                    color: 'dimgray',
                    padding: '0 1em',
                    background: '#B1D8E2',
                    borderBottom: '1px solid black',
                    borderRight: '1px solid black',
                    bordrRadius: '50px'
                } },
            migas ? (0, _utils.capitalizeString)(migas) : null
        )
    );
};

exports.default = Migas;