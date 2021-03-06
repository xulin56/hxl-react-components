'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../helpers');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _coreDecorators = require('core-decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioItem = (0, _coreDecorators.autobind)(_class = (_temp = _class2 = function (_Component) {
    _inherits(RadioItem, _Component);

    function RadioItem() {
        _classCallCheck(this, RadioItem);

        return _possibleConstructorReturn(this, (RadioItem.__proto__ || Object.getPrototypeOf(RadioItem)).apply(this, arguments));
    }

    _createClass(RadioItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                checked = _props.checked,
                click = _props.click,
                data = _props.data;
            var label = data.label,
                value = data.value,
                disabled = data.disabled,
                errorInfo = data.errorInfo;

            return _react2.default.createElement(
                'div',
                { className: "radio-item " + (checked ? " checked" : "") + (disabled ? " disabled" : ''), onClick: function onClick(_) {
                        !disabled && click && click(value);
                    } },
                disabled ? _react2.default.createElement(
                    'span',
                    { style: { position: 'relative' }, className: 'radio-disabled' },
                    _react2.default.createElement(
                        'span',
                        { className: 'radio-label' },
                        label
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: { position: 'absolute', top: '.5rem', right: '.4rem', display: 'inlineblock', width: '3rem' }, className: 'radio-error' },
                        errorInfo
                    )
                ) : label
            );
        }
    }]);

    return RadioItem;
}(_react.Component), _class2.props = {
    data: _propTypes2.default.object,
    click: _propTypes2.default.func,
    checked: _propTypes2.default.bool
}, _temp)) || _class;

exports.default = (0, _helpers.composeTheme)(RadioItem);