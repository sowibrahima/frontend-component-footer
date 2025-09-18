import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { Hyperlink, Image } from '@openedx/paragon';
var StudioFooterLogoSlot = function StudioFooterLogoSlot() {
  return /*#__PURE__*/React.createElement(PluginSlot, {
    id: "org.openedx.frontend.layout.studio_footer_logo.v1",
    idAliases: ['studio_footer_logo_slot']
  }, /*#__PURE__*/React.createElement(Hyperlink, {
    destination: "https://openedx.org",
    className: "float-right"
  }, /*#__PURE__*/React.createElement(Image, {
    width: "120px",
    alt: "Powered by Open edX",
    src: "https://logos.openedx.org/open-edx-logo-tag.png"
  })));
};
export default StudioFooterLogoSlot;
//# sourceMappingURL=index.js.map