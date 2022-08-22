'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modalmenuselected = function Modalmenuselected(_ref) {
    var modaltable = _ref.modaltable,
        modalid = _ref.modalid,
        ident = _ref.ident,
        items = _ref.items,
        item = _ref.item;


    var menusel = {
        cont_princ: {
            position: 'absolute',
            width: 'auto',
            height: 'auto',
            // bottom: '-10em',
            // right: '-10em',
            zIndex: 1,
            display: 'flex'
        },
        ul: {
            padding: '.5em 1.5em',
            background: '#fff',
            border: '1.5px solid darkorange',
            borderRadius: '5px'
        }
    };

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
                'div',
                {
                    className: modaltable && modalid === ident ? 'pos-abs-selectmenu displayed' : 'pos-abs-selectmenu displayed_none',
                    style: menusel.cont_princ
                },
                _react2.default.createElement('div', { className: 'triangulo_menu' }),
                _react2.default.createElement(
                    'ul',
                    { style: menusel.ul,
                        key: Math.random() },
                    items.map(function (prop, index) {
                        if (item[prop] !== item['internalID']) {
                            return _react2.default.createElement(
                                'li',
                                { key: index,
                                    style: { listStyle: 'square', fontWeight: 'bolder' }
                                },
                                item[prop].split('?')[0]
                            );
                        }
                    })
                )
            )
        )
    );
};
exports.default = Modalmenuselected;