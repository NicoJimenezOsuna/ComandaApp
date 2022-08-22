"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Labelscarta = function Labelscarta(_ref) {
  var data = _ref.data,
      restauranteData = _ref.restauranteData;

  var label = {
    cont_princ: {
      width: "100%",
      margin: '0 7.5px 20px 7.5px',
      borderTop: "2px solid rgb(112, 112, 112)",
      borderBottom: "2px solid rgb(112, 112, 112)",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      paddingTop: "5px",
      paddingBottom: "5px",
      fontSize: "20px",
      padding: "20px 0"
    },
    cont_name: {
      width: "60%",
      textAlign: "center"
    },
    cont_price: {
      width: "20%",
      textAlign: "center"
    },
    cont_button: {
      width: "20%",
      textAlign: "center"
    }
  };

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      titles = _useState2[0],
      getTitles = _useState2[1];

  (0, _react.useEffect)(function () {
    if (JSON.stringify(titles) !== JSON.stringify(data)) {
      getTitles(data);
    }
  }, [titles, data]);

  return _react2.default.createElement(
    "div",
    { style: label.cont_princ, className: "label_carta-menu" },
    _react2.default.createElement(
      "div",
      { style: label.cont_name },
      _react2.default.createElement(
        "span",
        null,
        titles.product
      )
    ),
    _react2.default.createElement(
      "div",
      { style: label.cont_price },
      _react2.default.createElement(
        "span",
        null,
        titles.price
      )
    ),
    restauranteData[0].tpsuscrip === 1 || restauranteData[0].tpsuscrip === 6 ? _react2.default.createElement(
      "div",
      { style: label.cont_button },
      _react2.default.createElement(
        "span",
        null,
        titles.info
      )
    ) : null
  );
};

function mapStateToProps(state) {
  return {
    restauranteData: state.RestauranteData.RestauranteProfile
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Labelscarta);