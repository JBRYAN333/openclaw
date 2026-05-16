import { t as createPluginRuntimeStore } from "./runtime-store-Bd-pJhiX.js";
import "./outbound-media-vEQfhH09.js";
import "./ssrf-runtime-Dth-2BO1.js";
import "./media-runtime-TWRGvE0c.js";
import "./text-chunking-CzdY9jpk.js";
import "./channel-status-BlTHLps2.js";
import "./bundled-channel-config-schema-DPKbsGeZ.js";
import "./channel-config-primitives-75fS9uAX.js";
import "./channel-actions-gLPQ3dRT.js";
import "./channel-feedback-Dvn9gyAw.js";
import "./channel-inbound-l7TYRxD_.js";
import "./channel-lifecycle-DeAJEsUx.js";
import "./channel-message-BVwd11Yo.js";
import "./channel-pairing-Bal02rd7.js";
import "./webhook-ingress-Dr2ZCclG.js";
import "./webhook-request-guards-vUieGQJI.js";
import "./webhook-targets-LOfFrzii.js";
//#region extensions/googlechat/src/runtime.ts
const { setRuntime: setGoogleChatRuntime, getRuntime: getGoogleChatRuntime } = createPluginRuntimeStore({
	pluginId: "googlechat",
	errorMessage: "Google Chat runtime not initialized"
});
//#endregion
export { setGoogleChatRuntime as n, getGoogleChatRuntime as t };
