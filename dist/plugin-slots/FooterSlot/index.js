import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import Footer from '../../components/Footer';
var FooterSlot = function FooterSlot() {
  return /*#__PURE__*/React.createElement(PluginSlot, {
    id: "org.openedx.frontend.layout.footer.v1",
    idAliases: ['footer_slot', 'footer_plugin_slot']
  }, /*#__PURE__*/React.createElement(Footer, null));
};
export default FooterSlot;
//# sourceMappingURL=index.js.map