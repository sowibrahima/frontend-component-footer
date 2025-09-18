import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import PropTypes from 'prop-types';
import { Container } from '@openedx/paragon';
import HelpSection from '../../components/studio-footer/help-components/HelpSection';
var StudioFooterHelpSectionSlot = function StudioFooterHelpSectionSlot(_ref) {
  var containerProps = _ref.containerProps;
  return /*#__PURE__*/React.createElement(PluginSlot, {
    id: "org.openedx.frontend.layout.studio_footer_help_section.v1"
  }, /*#__PURE__*/React.createElement(HelpSection, {
    containerProps: containerProps
  }));
};
StudioFooterHelpSectionSlot.propTypes = {
  containerProps: PropTypes.shape(Container.propTypes)
};
export default StudioFooterHelpSectionSlot;
//# sourceMappingURL=index.js.map