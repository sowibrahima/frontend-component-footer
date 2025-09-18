import React, { useContext } from 'react';
import { AppContext } from '@edx/frontend-platform/react';
import isEmpty from 'lodash/isEmpty';
import { ensureConfig } from '@edx/frontend-platform';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { ActionRow, Button } from '@openedx/paragon';
import messages from '../messages';
ensureConfig(['SUPPORT_EMAIL'], 'Studio Footer Help Content component');
var BUTTONS = [{
  as: 'a',
  href: 'https://docs.openedx.org/en/latest/educators/quickstarts/build_a_course.html',
  size: 'sm',
  message: messages.educatorsDocsButtonLabel,
  dataTestid: null
}, {
  as: 'a',
  href: 'https://sandbox.openedx.org/courses/course-v1:OpenedX+01-2024+2024-1/about',
  size: 'sm',
  message: messages.openEdxDemoCourseButtonLabel,
  dataTestid: 'openEdXDemoCourseButton'
}];
var HelpContent = function HelpContent() {
  var _useContext = useContext(AppContext),
    config = _useContext.config;
  return /*#__PURE__*/React.createElement(ActionRow, {
    key: "help-link-button-row",
    className: "py-4",
    "data-testid": "helpButtonRow"
  }, /*#__PURE__*/React.createElement(ActionRow.Spacer, null), BUTTONS.map(function (_ref) {
    var as = _ref.as,
      href = _ref.href,
      size = _ref.size,
      message = _ref.message,
      dataTestid = _ref.dataTestid;
    return /*#__PURE__*/React.createElement(Button, {
      as: as,
      href: href,
      size: size,
      key: message.id,
      "data-testid": dataTestid
    }, /*#__PURE__*/React.createElement(FormattedMessage, message));
  }), !isEmpty(config.SUPPORT_EMAIL) && /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "mailto:".concat(config.SUPPORT_EMAIL),
    size: "sm",
    "data-testid": "contactUsButton"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.contactUsButtonLabel)), /*#__PURE__*/React.createElement(ActionRow.Spacer, null));
};
export default HelpContent;
//# sourceMappingURL=HelpContent.js.map