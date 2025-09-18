import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button } from '@openedx/paragon';
import { ExpandLess, ExpandMore, Help } from '@openedx/paragon/icons';
import PropTypes from 'prop-types';
import messages from '../messages';
var HelpButton = function HelpButton(_ref) {
  var isOpen = _ref.isOpen,
    setIsOpen = _ref.setIsOpen;
  var intl = useIntl();
  return /*#__PURE__*/React.createElement(Button, {
    "data-testid": "helpToggleButton",
    variant: "outline-primary",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    iconBefore: Help,
    iconAfter: isOpen ? ExpandLess : ExpandMore,
    size: "sm"
  }, isOpen ? intl.formatMessage(messages.closeHelpButtonLabel) : intl.formatMessage(messages.openHelpButtonLabel));
};
HelpButton.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};
export default HelpButton;
//# sourceMappingURL=HelpButton.js.map