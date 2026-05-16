import { n as ChannelOutboundAdapter } from "../../outbound.types-Rnmk_sma.js";
import { y as ChannelMessageActionAdapter } from "../../types.core-CMfrqeLH.js";
import { n as ChannelPlugin } from "../../types.public-CDyR0ChV.js";
//#region extensions/imessage/src/imessage.test-plugin.d.ts
declare const createIMessageTestPlugin: (params?: {
  outbound?: ChannelOutboundAdapter;
  actions?: ChannelMessageActionAdapter;
}) => ChannelPlugin;
//#endregion
export { createIMessageTestPlugin };