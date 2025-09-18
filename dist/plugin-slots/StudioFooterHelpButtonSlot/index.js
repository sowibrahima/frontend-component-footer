import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import PropTypes from 'prop-types';
import HelpButton from '../../components/studio-footer/help-components/HelpButton';
var StudioFooterHelpButtonSlot = function StudioFooterHelpButtonSlot(_ref) {
  var isOpen = _ref.isOpen,
    setIsOpen = _ref.setIsOpen;
  return /*#__PURE__*/React.createElement(PluginSlot, {
    id: "org.openedx.frontend.layout.studio_footer_help_button.v1",
    pluginProps: {
      isOpen: isOpen,
      setIsOpen: setIsOpen
    }
  }, /*#__PURE__*/React.createElement(HelpButton, {
    isOpen: isOpen,
    setIsOpen: setIsOpen
  }));
};
StudioFooterHelpButtonSlot.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};
export default StudioFooterHelpButtonSlot;
//# sourceMappingURL=index.js.map