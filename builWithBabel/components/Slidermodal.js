"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _timesCircleRegular = require("../icons/times-circle-regular.svg");

var _Carousel = require("./Carousel");

var _Carousel2 = _interopRequireDefault(_Carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slidermodal = function Slidermodal(_ref) {
    var isVisibleSlider = _ref.isVisibleSlider,
        data = _ref.data,
        dataInicio = _ref.dataInicio,
        buttonCloseSlidermodalHandler = _ref.buttonCloseSlidermodalHandler,
        actualizaPropDataProductId = _ref.actualizaPropDataProductId,
        wordkey = _ref.wordkey;


    var slider = {
        cont_princ: {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
        },
        cont_slider: {
            position: "relative",
            minWidth: "90%",
            maxWidth: "90%",
            maxHeight: "90%",
            minHeight: "90%",
            backgroundColor: "#fff",
            border: "2px solid #000",
            borderRadius: "20px",
            padding: "10px",
            overflow: "scroll"
        }
    };

    var _useState = (0, _react.useState)([]),
        _useState2 = _slicedToArray(_useState, 2),
        dataToCar = _useState2[0],
        getDataToCar = _useState2[1];

    var _useState3 = (0, _react.useState)(0),
        _useState4 = _slicedToArray(_useState3, 2),
        dataInicioToCar = _useState4[0],
        getDataInicioToCar = _useState4[1];

    var _useState5 = (0, _react.useState)(''),
        _useState6 = _slicedToArray(_useState5, 2),
        stwordkey = _useState6[0],
        getStWordkey = _useState6[1];

    (0, _react.useEffect)(function () {
        getDataToCar(data);
        getDataInicioToCar(dataInicio);
        getStWordkey(wordkey);
    }, [data, dataInicio, wordkey]);

    return _react2.default.createElement(
        "div",
        {
            style: slider.cont_princ,
            className: !isVisibleSlider ? "displayed_none" : "displayed"
        },
        _react2.default.createElement(
            "div",
            { style: slider.cont_slider },
            _react2.default.createElement(_timesCircleRegular.ReactComponent, {
                className: "close",
                onClick: buttonCloseSlidermodalHandler
            }),
            _react2.default.createElement(_Carousel2.default, {
                datas: dataToCar,
                dataInicios: dataInicioToCar,
                actualizaPropDataProductId: actualizaPropDataProductId,
                wordkey: stwordkey
            })
        )
    );
};

exports.default = Slidermodal;