"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactBootstrap = require("react-bootstrap");








var _propTypes = _interopRequireDefault(require("prop-types"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _createSuper(Derived) {return function () {var Super = _getPrototypeOf(Derived),result;if (_isNativeReflectConstruct()) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var instanceCount = 0;var

CalendarHeader = /*#__PURE__*/function (_React$Component) {_inherits(CalendarHeader, _React$Component);var _super = _createSuper(CalendarHeader);function CalendarHeader() {var _this;_classCallCheck(this, CalendarHeader);for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _super.call.apply(_super, [this].concat(args));_defineProperty(_assertThisInitialized(_this), "displayingMinMonth",
















    function () {
      if (!_this.props.minDate) return false;

      var displayDate = new Date(_this.props.displayDate);
      var minDate = new Date(_this.props.minDate);
      return (
        minDate.getFullYear() == displayDate.getFullYear() &&
        minDate.getMonth() == displayDate.getMonth());

    });_defineProperty(_assertThisInitialized(_this), "displayingMaxMonth",

    function () {
      if (!_this.props.maxDate) return false;

      var displayDate = new Date(_this.props.displayDate);
      var maxDate = new Date(_this.props.maxDate);
      return (
        maxDate.getFullYear() == displayDate.getFullYear() &&
        maxDate.getMonth() == displayDate.getMonth());

    });_defineProperty(_assertThisInitialized(_this), "handleClickPrevious",

    function () {
      var newDisplayDate = new Date(_this.props.displayDate);
      newDisplayDate.setDate(1);
      newDisplayDate.setMonth(newDisplayDate.getMonth() - 1);
      _this.props.onChange(newDisplayDate);
    });_defineProperty(_assertThisInitialized(_this), "handleClickNext",

    function () {
      var newDisplayDate = new Date(_this.props.displayDate);
      newDisplayDate.setDate(1);
      newDisplayDate.setMonth(newDisplayDate.getMonth() + 1);
      _this.props.onChange(newDisplayDate);
    });return _this;}_createClass(CalendarHeader, [{ key: "render", value: function render()

    {
      return /*#__PURE__*/(
        _react.default.createElement("div", { className: "text-center" }, /*#__PURE__*/
        _react.default.createElement("div", {
          className: "text-muted float-sm-left datepicker-previous-wrapper",
          onClick: this.handleClickPrevious,
          style: { cursor: 'pointer', userSelect: 'none' } },

        this.displayingMinMonth() ? null : this.props.previousButtonElement), /*#__PURE__*/

        _react.default.createElement("span", null,
        this.props.monthLabels[this.props.displayDate.getMonth()], ' ',
        this.props.displayDate.getFullYear()), /*#__PURE__*/

        _react.default.createElement("div", {
          className: "text-muted float-sm-right datepicker-next-wrapper",
          onClick: this.handleClickNext,
          style: { cursor: 'pointer', userSelect: 'none' } },

        this.displayingMaxMonth() ? null : this.props.nextButtonElement)));



    } }]);return CalendarHeader;}(_react.default.Component);_defineProperty(CalendarHeader, "displayName", 'DatePickerHeader');_defineProperty(CalendarHeader, "propTypes", { displayDate: _propTypes.default.object.isRequired, minDate: _propTypes.default.string, maxDate: _propTypes.default.string, onChange: _propTypes.default.func.isRequired, monthLabels: _propTypes.default.array.isRequired, previousButtonElement: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired, nextButtonElement: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired });


var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];var

Calendar = /*#__PURE__*/function (_React$Component2) {_inherits(Calendar, _React$Component2);var _super2 = _createSuper(Calendar);function Calendar() {var _this2;_classCallCheck(this, Calendar);for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}_this2 = _super2.call.apply(_super2, [this].concat(args));_defineProperty(_assertThisInitialized(_this2), "handleClick",

















    function (e) {
      var day = e.currentTarget.getAttribute('data-day');
      var newSelectedDate = _this2.setTimeToNoon(new Date(_this2.props.displayDate));
      newSelectedDate.setDate(day);
      _this2.props.onChange(newSelectedDate);
    });_defineProperty(_assertThisInitialized(_this2), "handleClickToday",

    function () {
      var newSelectedDate = _this2.setTimeToNoon(new Date());
      _this2.props.onChange(newSelectedDate);
    });_defineProperty(_assertThisInitialized(_this2), "setTimeToNoon",

    function (date) {
      date.setHours(12);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
      return date;
    });_defineProperty(_assertThisInitialized(_this2), "getWeekNumber",

    function (date) {
      var target = new Date(date.valueOf());
      var dayNr = (date.getDay() + 6) % 7;
      target.setDate(target.getDate() - dayNr + 3);
      var firstThursday = target.valueOf();
      target.setMonth(0, 1);
      if (target.getDay() !== 4) {
        target.setMonth(0, 1 + (4 - target.getDay() + 7) % 7);
      }
      return 1 + Math.ceil((firstThursday - target) / 604800000);
    });return _this2;}_createClass(Calendar, [{ key: "render", value: function render()

    {var _this3 = this;
      var currentDate = this.setTimeToNoon(new Date());
      var selectedDate = this.props.selectedDate ?
      this.setTimeToNoon(new Date(this.props.selectedDate)) :
      null;
      var minDate = this.props.minDate ?
      this.setTimeToNoon(new Date(this.props.minDate)) :
      null;
      var maxDate = this.props.maxDate ?
      this.setTimeToNoon(new Date(this.props.maxDate)) :
      null;
      var year = this.props.displayDate.getFullYear();
      var month = this.props.displayDate.getMonth();
      var firstDay = new Date(year, month, 1);
      var startingDay =
      this.props.weekStartsOn > 1 ?
      firstDay.getDay() - this.props.weekStartsOn + 7 :
      this.props.weekStartsOn === 1 ?
      firstDay.getDay() === 0 ?
      6 :
      firstDay.getDay() - 1 :
      firstDay.getDay();
      var showWeeks = this.props.showWeeks;

      var monthLength = daysInMonth[month];
      if (month == 1) {
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
          monthLength = 29;
        }
      }

      var weeks = [];
      var day = 1;
      for (var i = 0; i < 9; i++) {
        var week = [];
        for (var j = 0; j <= 6; j++) {
          if (day <= monthLength && (i > 0 || j >= startingDay)) {
            var className = null;
            var date = new Date(year, month, day, 12, 0, 0, 0).toISOString();
            var beforeMinDate =
            minDate && Date.parse(date) < Date.parse(minDate);
            var afterMinDate = maxDate && Date.parse(date) > Date.parse(maxDate);
            var clickHandler = this.handleClick;
            var style = {
              userSelect: 'none',
              cursor: 'pointer',
              padding: this.props.cellPadding,
              borderRadius: this.props.roundedCorners ? '.25rem' : 0 };


            if (beforeMinDate || afterMinDate) {
              className = 'text-muted';
              clickHandler = null;
              style.cursor = 'default';
            } else if (Date.parse(date) === Date.parse(selectedDate)) {
              className = 'bg-primary text-white';
            } else if (Date.parse(date) === Date.parse(currentDate)) {
              className = 'text-primary';
            }

            week.push( /*#__PURE__*/
            _react.default.createElement("td", {
              key: j,
              "data-day": day,
              onClick: clickHandler,
              style: style,
              className: className },

            day));


            day++;
          } else {
            week.push( /*#__PURE__*/_react.default.createElement("td", { key: j }));
          }
        }

        if (showWeeks) {
          var weekNum = this.getWeekNumber(
          new Date(year, month, day - 1, 12, 0, 0, 0));

          week.unshift( /*#__PURE__*/
          _react.default.createElement("td", {
            key: 7,
            style: {
              padding: this.props.cellPadding,
              fontSize: '0.8em',
              color: 'darkgrey' },

            className: "text-muted" },

          weekNum));


        }

        weeks.push( /*#__PURE__*/_react.default.createElement("tr", { key: i }, week));
        if (day > monthLength) {
          break;
        }
      }

      var weekColumn = showWeeks ? /*#__PURE__*/
      _react.default.createElement("td", {
        className: "text-muted current-week",
        style: { padding: this.props.cellPadding } }) :

      null;

      return /*#__PURE__*/(
        _react.default.createElement("table", { className: "text-center" }, /*#__PURE__*/
        _react.default.createElement("thead", null, /*#__PURE__*/
        _react.default.createElement("tr", null,
        weekColumn,
        this.props.dayLabels.map(function (label, index) {
          return /*#__PURE__*/(
            _react.default.createElement("td", {
              key: index,
              className: "text-muted",
              style: { padding: _this3.props.cellPadding } }, /*#__PURE__*/

            _react.default.createElement("small", null, label)));


        }))), /*#__PURE__*/


        _react.default.createElement("tbody", null, weeks),
        this.props.showTodayButton && /*#__PURE__*/
        _react.default.createElement("tfoot", null, /*#__PURE__*/
        _react.default.createElement("tr", null, /*#__PURE__*/
        _react.default.createElement("td", {
          colSpan: this.props.dayLabels.length,
          style: { paddingTop: '9px' } }, /*#__PURE__*/

        _react.default.createElement(_reactBootstrap.Button, {
          block: true,
          size: "xs",
          className: "u-today-button",
          onClick: this.handleClickToday },

        this.props.todayButtonLabel))))));







    } }]);return Calendar;}(_react.default.Component);_defineProperty(Calendar, "displayName", 'DatePickerCalendar');_defineProperty(Calendar, "propTypes", { selectedDate: _propTypes.default.object, displayDate: _propTypes.default.object.isRequired, minDate: _propTypes.default.string, maxDate: _propTypes.default.string, onChange: _propTypes.default.func.isRequired, dayLabels: _propTypes.default.array.isRequired, cellPadding: _propTypes.default.string.isRequired, weekStartsOn: _propTypes.default.number, showTodayButton: _propTypes.default.bool, todayButtonLabel: _propTypes.default.string, roundedCorners: _propTypes.default.bool, showWeeks: _propTypes.default.bool });


var language =
typeof window !== 'undefined' && window.navigator ?
(
window.navigator.userLanguage ||
window.navigator.language ||
'').
toLowerCase() :
'';
var dateFormat =
!language || language === 'en-us' ? 'MM/DD/YYYY' : 'DD/MM/YYYY';var

DatePicker = /*#__PURE__*/function (_React$Component3) {_inherits(DatePicker, _React$Component3);var _super3 = _createSuper(DatePicker);



































































































  function DatePicker(props) {var _this4;_classCallCheck(this, DatePicker);
    _this4 = _super3.call(this, props);_defineProperty(_assertThisInitialized(_this4), "makeDateValues",


























    function (isoString) {
      var displayDate;
      var selectedDate = isoString ?
      new Date("".concat(isoString.slice(0, 10), "T12:00:00.000Z")) :
      null;
      var minDate = _this4.props.minDate ?
      new Date("".concat(_this4.props.minDate.slice(0, 10), "T12:00:00.000Z")) :
      null;
      var maxDate = _this4.props.maxDate ?
      new Date("".concat(_this4.props.maxDate.slice(0, 10), "T12:00:00.000Z")) :
      null;

      var inputValue = isoString ?
      _this4.makeInputValueString(selectedDate) :
      null;
      if (selectedDate) {
        displayDate = new Date(selectedDate);
      } else {
        var today = new Date("".concat(
        new Date().toISOString().slice(0, 10), "T12:00:00.000Z"));

        if (minDate && Date.parse(minDate) >= Date.parse(today)) {
          displayDate = minDate;
        } else if (maxDate && Date.parse(maxDate) <= Date.parse(today)) {
          displayDate = maxDate;
        } else {
          displayDate = today;
        }
      }

      return {
        value: selectedDate ? selectedDate.toISOString() : null,
        displayDate: displayDate,
        selectedDate: selectedDate,
        inputValue: inputValue };

    });_defineProperty(_assertThisInitialized(_this4), "clear",

    function () {
      if (_this4.props.onClear) {
        _this4.props.onClear();
      } else {
        _this4.setState(_this4.makeDateValues(null));
      }

      if (_this4.props.onChange) {
        _this4.props.onChange(null, null);
      }
    });_defineProperty(_assertThisInitialized(_this4), "handleHide",

    function () {
      if (_this4.state.inputFocused) {
        return;
      }
      _this4.setState({
        focused: false });

      if (_this4.props.onBlur) {
        var event = document.createEvent('CustomEvent');
        event.initEvent('Change Date', true, false);
        _reactDom.default.findDOMNode(_this4.hiddenInput).dispatchEvent(event);
        _this4.props.onBlur(event);
      }
    });_defineProperty(_assertThisInitialized(_this4), "handleKeyDown",

    function (e) {
      if (e.which === 9 && _this4.state.inputFocused) {
        _this4.setState({
          focused: false });


        if (_this4.props.onBlur) {
          var event = document.createEvent('CustomEvent');
          event.initEvent('Change Date', true, false);
          _reactDom.default.findDOMNode(_this4.hiddenInput).dispatchEvent(event);
          _this4.props.onBlur(event);
        }
      }
    });_defineProperty(_assertThisInitialized(_this4), "handleFocus",

    function () {
      if (_this4.state.focused === true) {
        return;
      }

      var placement = _this4.getCalendarPlacement();

      _this4.setState({
        inputFocused: true,
        focused: true,
        calendarPlacement: placement });


      if (_this4.props.onFocus) {
        var event = document.createEvent('CustomEvent');
        event.initEvent('Change Date', true, false);
        _reactDom.default.findDOMNode(_this4.hiddenInput).dispatchEvent(event);
        _this4.props.onFocus(event);
      }
    });_defineProperty(_assertThisInitialized(_this4), "handleBlur",

    function () {
      _this4.setState({
        inputFocused: false });

    });_defineProperty(_assertThisInitialized(_this4), "getValue",







    function () {
      return _this4.state.selectedDate ?
      _this4.state.selectedDate.toISOString() :
      null;
    });_defineProperty(_assertThisInitialized(_this4), "getFormattedValue",

    function () {
      return _this4.state.displayDate ? _this4.state.inputValue : null;
    });_defineProperty(_assertThisInitialized(_this4), "getCalendarPlacement",

    function () {
      var tag = Object.prototype.toString.call(_this4.props.calendarPlacement);
      var isFunction =
      tag === '[object AsyncFunction]' ||
      tag === '[object Function]' ||
      tag === '[object GeneratorFunction]' ||
      tag === '[object Proxy]';
      if (isFunction) {
        return _this4.props.calendarPlacement();
      } else {
        return _this4.props.calendarPlacement;
      }
    });_defineProperty(_assertThisInitialized(_this4), "makeInputValueString",

    function (date) {
      var month = date.getMonth() + 1;
      var day = date.getDate();

      //this method is executed during intialState setup... handle a missing state properly
      var separator = _this4.state ?
      _this4.state.separator :
      _this4.props.dateFormat.match(/[^A-Z]/)[0];
      if (_this4.props.dateFormat.match(/MM.DD.YYYY/)) {
        return (
          (month > 9 ? month : "0".concat(month)) +
          separator + (
          day > 9 ? day : "0".concat(day)) +
          separator +
          date.getFullYear());

      } else if (_this4.props.dateFormat.match(/DD.MM.YYYY/)) {
        return (
          (day > 9 ? day : "0".concat(day)) +
          separator + (
          month > 9 ? month : "0".concat(month)) +
          separator +
          date.getFullYear());

      } else {
        return (
          date.getFullYear() +
          separator + (
          month > 9 ? month : "0".concat(month)) +
          separator + (
          day > 9 ? day : "0".concat(day)));

      }
    });_defineProperty(_assertThisInitialized(_this4), "handleBadInput",

    function (originalValue) {
      var parts = originalValue.
      replace(new RegExp("[^0-9".concat(_this4.state.separator, "]")), '').
      split(_this4.state.separator);
      if (
      _this4.props.dateFormat.match(/MM.DD.YYYY/) ||
      _this4.props.dateFormat.match(/DD.MM.YYYY/))
      {
        if (parts[0] && parts[0].length > 2) {
          parts[1] = parts[0].slice(2) + (parts[1] || '');
          parts[0] = parts[0].slice(0, 2);
        }
        if (parts[1] && parts[1].length > 2) {
          parts[2] = parts[1].slice(2) + (parts[2] || '');
          parts[1] = parts[1].slice(0, 2);
        }
        if (parts[2]) {
          parts[2] = parts[2].slice(0, 4);
        }
      } else {
        if (parts[0] && parts[0].length > 4) {
          parts[1] = parts[0].slice(4) + (parts[1] || '');
          parts[0] = parts[0].slice(0, 4);
        }
        if (parts[1] && parts[1].length > 2) {
          parts[2] = parts[1].slice(2) + (parts[2] || '');
          parts[1] = parts[1].slice(0, 2);
        }
        if (parts[2]) {
          parts[2] = parts[2].slice(0, 2);
        }
      }
      _this4.setState({
        inputValue: parts.join(_this4.state.separator) });

    });_defineProperty(_assertThisInitialized(_this4), "handleInputChange",

    function () {
      var originalValue = _reactDom.default.findDOMNode(_this4.input).value;
      var inputValue = originalValue.
      replace(/(-|\/\/)/g, _this4.state.separator).
      slice(0, 10);

      if (!inputValue) {
        _this4.clear();
        return;
      }

      var month, day, year;
      if (_this4.props.dateFormat.match(/MM.DD.YYYY/)) {
        if (!inputValue.match(/[0-1][0-9].[0-3][0-9].[1-2][0-9][0-9][0-9]/)) {
          return _this4.handleBadInput(originalValue);
        }

        month = inputValue.slice(0, 2).replace(/[^0-9]/g, '');
        day = inputValue.slice(3, 5).replace(/[^0-9]/g, '');
        year = inputValue.slice(6, 10).replace(/[^0-9]/g, '');
      } else if (_this4.props.dateFormat.match(/DD.MM.YYYY/)) {
        if (!inputValue.match(/[0-3][0-9].[0-1][0-9].[1-2][0-9][0-9][0-9]/)) {
          return _this4.handleBadInput(originalValue);
        }

        day = inputValue.slice(0, 2).replace(/[^0-9]/g, '');
        month = inputValue.slice(3, 5).replace(/[^0-9]/g, '');
        year = inputValue.slice(6, 10).replace(/[^0-9]/g, '');
      } else {
        if (!inputValue.match(/[1-2][0-9][0-9][0-9].[0-1][0-9].[0-3][0-9]/)) {
          return _this4.handleBadInput(originalValue);
        }

        year = inputValue.slice(0, 4).replace(/[^0-9]/g, '');
        month = inputValue.slice(5, 7).replace(/[^0-9]/g, '');
        day = inputValue.slice(8, 10).replace(/[^0-9]/g, '');
      }

      var monthInteger = parseInt(month, 10);
      var dayInteger = parseInt(day, 10);
      var yearInteger = parseInt(year, 10);
      if (monthInteger > 12 || dayInteger > 31) {
        return _this4.handleBadInput(originalValue);
      }

      if (
      !isNaN(monthInteger) &&
      !isNaN(dayInteger) &&
      !isNaN(yearInteger) &&
      monthInteger <= 12 &&
      dayInteger <= 31 &&
      yearInteger > 999)
      {
        var selectedDate = new Date(
        yearInteger,
        monthInteger - 1,
        dayInteger,
        12,
        0,
        0,
        0);

        _this4.setState({
          selectedDate: selectedDate,
          displayDate: selectedDate,
          value: selectedDate.toISOString() });


        if (_this4.props.onChange) {
          _this4.props.onChange(selectedDate.toISOString(), inputValue);
        }
      }

      _this4.setState({
        inputValue: inputValue });

    });_defineProperty(_assertThisInitialized(_this4), "onChangeMonth",

    function (newDisplayDate) {
      _this4.setState({
        displayDate: newDisplayDate });

    });_defineProperty(_assertThisInitialized(_this4), "onChangeDate",

    function (newSelectedDate) {
      var inputValue = _this4.makeInputValueString(newSelectedDate);
      _this4.setState({
        inputValue: inputValue,
        selectedDate: newSelectedDate,
        displayDate: newSelectedDate,
        value: newSelectedDate.toISOString(),
        focused: false });


      if (_this4.props.onBlur) {
        var event = document.createEvent('CustomEvent');
        event.initEvent('Change Date', true, false);
        _reactDom.default.findDOMNode(_this4.hiddenInput).dispatchEvent(event);
        _this4.props.onBlur(event);
      }

      if (_this4.props.onChange) {
        _this4.props.onChange(newSelectedDate.toISOString(), inputValue);
      }
    });if (props.value && props.defaultValue) {throw new Error('Conflicting DatePicker properties \'value\' and \'defaultValue\'');}var state = _this4.makeDateValues(props.value || props.defaultValue);if (props.weekStartsOn > 1) {state.dayLabels = props.dayLabels.slice(props.weekStartsOn).concat(props.dayLabels.slice(0, props.weekStartsOn));} else if (props.weekStartsOn === 1) {state.dayLabels = props.dayLabels.slice(1).concat(props.dayLabels.slice(0, 1));} else {state.dayLabels = props.dayLabels;}state.focused = false;state.inputFocused = false;state.placeholder = props.placeholder || props.dateFormat;state.separator = props.dateFormat.match(/[^A-Z]/)[0];_this4.state = _objectSpread({}, state);return _this4;}_createClass(DatePicker, [{ key: "shouldComponentUpdate", value: function shouldComponentUpdate(nextProps, nextState) {return !(this.state.inputFocused === true && nextState.inputFocused === false);} }, { key: "componentDidUpdate", value: function componentDidUpdate(

    prevProps) {
      var value = this.props.value;
      if (this.getValue() !== value && this.props !== prevProps) {
        this.setState(this.makeDateValues(value));
      }
    } }, { key: "render", value: function render()

    {var _this5 = this;
      var control = this.props.customControl ?
      _react.default.cloneElement(this.props.customControl, {
        onKeyDown: this.handleKeyDown,
        value: this.state.inputValue || '',
        required: this.props.required,
        placeholder: this.state.focused ?
        this.props.dateFormat :
        this.state.placeholder,
        ref: 'input',
        disabled: this.props.disabled,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onChange: this.handleInputChange,
        className: this.props.className,
        style: this.props.style,
        autoComplete: this.props.autoComplete,
        onInvalid: this.props.onInvalid,
        noValidate: this.props.noValidate }) : /*#__PURE__*/


      _react.default.createElement(_reactBootstrap.Form.Control, {
        onKeyDown: this.handleKeyDown,
        value: this.state.inputValue || '',
        required: this.props.required,
        ref: function ref(r) {
          _this5.input = r;
        },
        type: "text",
        className: this.props.className,
        style: this.props.style,
        autoFocus: this.props.autoFocus,
        disabled: this.props.disabled,
        placeholder:
        this.state.focused ? this.props.dateFormat : this.state.placeholder,

        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onChange: this.handleInputChange,
        autoComplete: this.props.autoComplete,
        onInvalid: this.props.onInvalid,
        noValidate: this.props.noValidate,
        isValid: this.props.isValid,
        isInvalid: this.props.isInvalid });



      return /*#__PURE__*/(
        _react.default.createElement(_reactBootstrap.OverlayTrigger, {
          trigger: "click",
          key: 'bottom',
          placement: 'bottom',
          onHide: this.handleHide,
          rootClose: true,
          delay: { show: 250, hide: 100 },
          disabled: this.props.disabled,
          overlay: /*#__PURE__*/
          _react.default.createElement(_reactBootstrap.Popover, {
            id: "date-picker-popover-".concat(this.props.instanceCount),
            className: "date-picker-popover" }, /*#__PURE__*/

          _react.default.createElement(_reactBootstrap.Popover.Title, null, /*#__PURE__*/
          _react.default.createElement(CalendarHeader, {
            previousButtonElement: this.props.previousButtonElement,
            nextButtonElement: this.props.nextButtonElement,
            displayDate: this.state.displayDate,
            minDate: this.props.minDate,
            maxDate: this.props.maxDate,
            onChange: this.onChangeMonth,
            monthLabels: this.props.monthLabels,
            dateFormat: this.props.dateFormat })), /*#__PURE__*/


          _react.default.createElement(_reactBootstrap.Popover.Content, null, /*#__PURE__*/
          _react.default.createElement(Calendar, {
            cellPadding: this.props.cellPadding,
            selectedDate: this.state.selectedDate,
            displayDate: this.state.displayDate,
            onChange: this.onChangeDate,
            dayLabels: this.state.dayLabels,
            weekStartsOn: this.props.weekStartsOn,
            showTodayButton: this.props.showTodayButton,
            todayButtonLabel: this.props.todayButtonLabel,
            minDate: this.props.minDate,
            maxDate: this.props.maxDate,
            roundedCorners: this.props.roundedCorners,
            showWeeks: this.props.showWeeks }))) }, /*#__PURE__*/





        _react.default.createElement(_reactBootstrap.InputGroup, {
          ref: function ref(r) {
            _this5.inputGroup = r;
          },
          bsPrefix: this.props.showClearButton ? this.props.bsPrefix : '',
          size: this.props.size,
          id: this.props.id ? "".concat(this.props.id, "_group") : null },

        control,
        this.props.showClearButton && !this.props.customControl && /*#__PURE__*/
        _react.default.createElement(_reactBootstrap.InputGroup.Append, {
          onClick: this.props.disabled ? null : this.clear,
          style: {
            cursor:
            this.state.inputValue && !this.props.disabled ?
            'pointer' :
            'not-allowed' } }, /*#__PURE__*/


        _react.default.createElement(_reactBootstrap.InputGroup.Text, null, /*#__PURE__*/
        _react.default.createElement("div", {
          style: {
            opacity:
            this.state.inputValue && !this.props.disabled ? 1 : 0.5 } },


        this.props.clearButtonElement))),




        this.props.feedback && /*#__PURE__*/
        _react.default.createElement(_reactBootstrap.Form.Control.Feedback, { type: this.props.isInvalid ? 'invalid' : this.props.isValid ? 'valid' : null },
        this.props.feedback))));





    } }]);return DatePicker;}(_react.default.Component);exports.default = DatePicker;_defineProperty(DatePicker, "propTypes", { defaultValue: _propTypes.default.string, value: _propTypes.default.string, required: _propTypes.default.bool, className: _propTypes.default.string, style: _propTypes.default.object, minDate: _propTypes.default.string, maxDate: _propTypes.default.string, cellPadding: _propTypes.default.string, autoComplete: _propTypes.default.string, placeholder: _propTypes.default.string, dayLabels: _propTypes.default.array, monthLabels: _propTypes.default.array, onChange: _propTypes.default.func, onClear: _propTypes.default.func, onBlur: _propTypes.default.func, onFocus: _propTypes.default.func, autoFocus: _propTypes.default.bool, disabled: _propTypes.default.bool, weekStartsOnMonday: function weekStartsOnMonday(props, propName, componentName) {if (props[propName]) {return new Error("Prop '".concat(propName, "' supplied to '").concat(componentName, "' is obsolete. Use 'weekStartsOn' instead."));}}, weekStartsOn: _propTypes.default.number, clearButtonElement: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]), showClearButton: _propTypes.default.bool, previousButtonElement: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]), nextButtonElement: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]), calendarPlacement: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]), dateFormat: _propTypes.default.string, // 'MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/MM/DD', 'DD-MM-YYYY'
  bsPrefix: _propTypes.default.string, size: _propTypes.default.string, calendarContainer: _propTypes.default.object, id: _propTypes.default.string, name: _propTypes.default.string, showTodayButton: _propTypes.default.bool, todayButtonLabel: _propTypes.default.string, instanceCount: _propTypes.default.number, customControl: _propTypes.default.object, roundedCorners: _propTypes.default.bool, showWeeks: _propTypes.default.bool, children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]), onInvalid: _propTypes.default.func, noValidate: _propTypes.default.bool, isValid: _propTypes.default.bool, isInvalid: _propTypes.default.bool, feedback: _propTypes.default.string });_defineProperty(DatePicker, "defaultProps", { cellPadding: '5px', dayLabels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], monthLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], clearButtonElement: '×', previousButtonElement: '<', nextButtonElement: '>', calendarPlacement: 'bottom', dateFormat: dateFormat, showClearButton: true, autoFocus: false, disabled: false, showTodayButton: false, todayButtonLabel: 'Today', autoComplete: 'on', showWeeks: false, instanceCount: instanceCount++, style: {}, roundedCorners: false, noValidate: false });module.exports = exports.default;
