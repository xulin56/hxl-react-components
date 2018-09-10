'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

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

var Input = (0, _coreDecorators.autobind)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(Input, _Component);

    function Input() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Input);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.inputText = null, _temp), _possibleConstructorReturn(_this, _ret);
    }

    //默认value为空


    _createClass(Input, [{
        key: 'onChange',
        value: function onChange(e) {
            var value = e.target.value;
            var _props = this.props,
                name = _props.name,
                change = _props.change,
                maxlength = _props.maxlength;

            if (maxlength && value.length > maxlength) {
                var valStr = value.slice(0, maxlength);
                this.inputText.value = valStr;
                change(name, value);
            } else {
                change(name, value);
            }
        }

        //监听value变化 判断初始值是否为空
        // componentWillReceiveProps(nextProps) {
        //     const {value} = this.props;
        //     if (nextProps.value != this.props.value) {
        //         if (value) {
        //             this.refs.input.value = value;
        //         } else {
        //             this.refs.input.value = '';
        //         }
        //     }
        // }

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                type = _props2.type,
                value = _props2.value,
                maxlength = _props2.maxlength,
                placeholder = _props2.placeholder,
                min = _props2.min,
                unit = _props2.unit,
                formatter = _props2.formatter;

            var newValue = value;
            if (formatter) {
                newValue = formatter(value);
            }
            return _react2.default.createElement(
                'div',
                { style: {
                        position: 'relative'
                    } },
                _react2.default.createElement('input', { type: type || "text", value: newValue, ref: function ref(input) {
                        _this2.inputText = input;
                    }, className: 'form-control',
                    onBlur: this.onChange, maxLength: maxlength || 999, onChange: this.onChange,
                    placeholder: placeholder, step: 'any', min: min }),
                _react2.default.createElement(
                    'span',
                    { style: {
                            position: 'absolute',
                            right: '.25rem',
                            top: '.4rem'
                        } },
                    unit || ''
                )
            );
        }
    }]);

    return Input;
}(_react.Component), _class2.props = {
    name: _propTypes2.default.string,
    value: _propTypes2.default.string,
    change: _propTypes2.default.func,
    placeholder: _propTypes2.default.string,
    maxlength: _propTypes2.default.number,
    unit: _propTypes2.default.string,
    type: _propTypes2.default.string,
    formatter: _propTypes2.default.func,
    min: _propTypes2.default.number
}, _class2.defaultProps = {
    value: ''
}, _temp2)) || _class;

exports.default = (0, _helpers.composeTheme)(Input);