var _excluded = ["containerClassName"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React from 'react';
import { Container, TransitionReplace } from '@openedx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import StudioFooterHelpButtonSlot from '../../../plugin-slots/StudioFooterHelpButtonSlot';
import StudioFooterHelpContentlot from '../../../plugin-slots/StudioFooterHelpContentSlot';
var HelpSection = function HelpSection(_ref) {
  var containerProps = _ref.containerProps;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isOpen = _React$useState2[0],
    setIsOpen = _React$useState2[1];
  var _ref2 = containerProps || {},
    containerClassName = _ref2.containerClassName,
    restContainerProps = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "m-0 mt-6 row align-items-center justify-content-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col border-top mr-2"
  }), /*#__PURE__*/React.createElement(StudioFooterHelpButtonSlot, {
    setIsOpen: setIsOpen,
    isOpen: isOpen
  }), /*#__PURE__*/React.createElement("div", {
    className: "col border-top ml-2"
  })), /*#__PURE__*/React.createElement(Container, _extends({
    size: "xl",
    className: classNames('px-4', containerClassName)
  }, restContainerProps), isOpen && /*#__PURE__*/React.createElement(TransitionReplace, null, /*#__PURE__*/React.createElement(StudioFooterHelpContentlot, null))));
};
HelpSection.propTypes = {
  containerProps: PropTypes.shape(Container.propTypes)
};
HelpSection.defaultProps = {
  containerProps: {}
};
export default HelpSection;
//# sourceMappingURL=HelpSection.js.map