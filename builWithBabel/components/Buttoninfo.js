"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _informacion = require("../icons/navutils/informacion.svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Buttoninfo = function Buttoninfo(_ref) {
    var dataSliderHandler = _ref.dataSliderHandler,
        dataListaFull = _ref.dataListaFull,
        dataIdSelf = _ref.dataIdSelf,
        wordkey = _ref.wordkey;

    var icon = {
        search_ico: {
            width: "30px",
            height: '30px',
            fill: 'rgb(110, 104, 104)'
        }
    };

    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        stwordkey = _useState2[0],
        getStWordkey = _useState2[1];

    var _useState3 = (0, _react.useState)([]),
        _useState4 = _slicedToArray(_useState3, 2),
        datalista = _useState4[0],
        getDatalista = _useState4[1];

    var _useState5 = (0, _react.useState)([]),
        _useState6 = _slicedToArray(_useState5, 2),
        datalidself = _useState6[0],
        getDatalidself = _useState6[1];

    (0, _react.useState)(function () {
        getStWordkey(wordkey);
        getDatalista(dataListaFull);
        getDatalidself(dataIdSelf);
    }, [wordkey, dataListaFull, dataIdSelf]);

    return _react2.default.createElement(_informacion.ReactComponent, {
        style: icon.search_ico,
        onClick: function onClick() {
            return dataSliderHandler(datalista, datalidself, stwordkey);
        }
    });
};

exports.default = Buttoninfo;