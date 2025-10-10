var _excluded = ["containerClassName"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import React, { useContext } from 'react';
import isEmpty from 'lodash/isEmpty';
import { useIntl, FormattedMessage } from '@edx/frontend-platform/i18n';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import { ActionRow, Container, Hyperlink } from '@openedx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import messages from './messages';
import StudioFooterLogoSlot from '../../plugin-slots/StudioFooterLogoSlot';
ensureConfig(['LMS_BASE_URL', 'MARKETING_SITE_BASE_URL', 'TERMS_OF_SERVICE_URL', 'PRIVACY_POLICY_URL', 'SUPPORT_EMAIL', 'SITE_NAME', 'STUDIO_BASE_URL', 'ENABLE_ACCESSIBILITY_PAGE'], 'Studio Footer component');
var StudioFooter = function StudioFooter(_ref) {
  var containerProps = _ref.containerProps;
  var intl = useIntl();
  var _useContext = useContext(AppContext),
    config = _useContext.config;
  var _ref2 = containerProps || {},
    containerClassName = _ref2.containerClassName,
    restContainerProps = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Container, _extends({
    size: "xl",
    className: classNames('px-4', containerClassName)
  }, restContainerProps), /*#__PURE__*/React.createElement(ActionRow, {
    className: "pt-3 m-0 x-small"
  }, "\xA9 ", new Date().getFullYear(), " ", /*#__PURE__*/React.createElement(Hyperlink, {
    destination: config.MARKETING_SITE_BASE_URL,
    target: "_blank",
    className: "ml-2"
  }, config.SITE_NAME), /*#__PURE__*/React.createElement(ActionRow.Spacer, null), !isEmpty(config.TERMS_OF_SERVICE_URL) && /*#__PURE__*/React.createElement(Hyperlink, {
    destination: config.TERMS_OF_SERVICE_URL,
    "data-testid": "termsOfService"
  }, intl.formatMessage(messages.termsOfServiceLinkLabel)), !isEmpty(config.PRIVACY_POLICY_URL) && /*#__PURE__*/React.createElement(Hyperlink, {
    destination: config.PRIVACY_POLICY_URL,
    "data-testid": "privacyPolicy"
  }, intl.formatMessage(messages.privacyPolicyLinkLabel)), config.ENABLE_ACCESSIBILITY_PAGE === 'true' && /*#__PURE__*/React.createElement(Hyperlink, {
    destination: "".concat(config.STUDIO_BASE_URL, "/accessibility"),
    "data-testid": "accessibilityRequest"
  }, intl.formatMessage(messages.accessibilityRequestLinkLabel)), /*#__PURE__*/React.createElement(Hyperlink, {
    destination: config.LMS_BASE_URL
  }, "LMS"))));
};
StudioFooter.propTypes = {
  containerProps: PropTypes.shape(Container.propTypes)
};
StudioFooter.defaultProps = {
  containerProps: {}
};
export default StudioFooter;
//# sourceMappingURL=StudioFooter.js.map