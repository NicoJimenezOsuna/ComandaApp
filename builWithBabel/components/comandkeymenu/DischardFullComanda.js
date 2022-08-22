'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _trash = require('../../icons/trash.svg');

var _actions = require('../../redux/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DischardFullComanda = function DischardFullComanda() {
    var dis = {
        svg: {
            width: '2.5em',
            height: '2.5em',
            fill: '#000',
            margin: '.3em .3em .3em .6em',
            // background: '#fff',
            // border: '1px solid black',
            padding: '1px'
        },
        cont: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px',
            backgroundColor: 'rgba(153, 153, 153, 0.19)',
            borderRadius: '15px',
            marginBottom: '10px',
            marginTop: '10px',
            background: 'linear-gradient(225deg, rgb(230, 230, 230), rgb(255, 255, 255))',
            boxShadow: 'rgb(191, 191, 191) -10px 10px 20px'
        }
    };

    return _react2.default.createElement(
        'div',
        {
            style: dis.cont,
            onClick: _actions.dischardFull
        },
        _react2.default.createElement(
            'h3',
            {
                onClick: _actions.dischardFull
            },
            '¡Borrar todo!'
        ),
        _react2.default.createElement(_trash.ReactComponent, {
            style: dis.svg
        })
    );
};

exports.default = DischardFullComanda;