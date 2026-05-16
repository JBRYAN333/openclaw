import "./file-lock-BSRE6G0K.js";
import { t as createPluginRuntimeStore } from "./runtime-store-Bd-pJhiX.js";
import "./channel-policy-D3hKUEkW.js";
import "./inbound-reply-dispatch-syZZXVTp.js";
import "./outbound-media-vEQfhH09.js";
import "./ssrf-runtime-Dth-2BO1.js";
import "./media-runtime-TWRGvE0c.js";
import "./text-chunking-CzdY9jpk.js";
import "./channel-status-BlTHLps2.js";
import "./channel-lifecycle-DeAJEsUx.js";
import "./channel-message-BVwd11Yo.js";
import "./channel-pairing-Bal02rd7.js";
import "./channel-targets-B7mugAOq.js";
import "./webhook-ingress-Dr2ZCclG.js";
//#region extensions/msteams/src/runtime.ts
const { setRuntime: setMSTeamsRuntime, getRuntime: getMSTeamsRuntime, tryGetRuntime: getOptionalMSTeamsRuntime } = createPluginRuntimeStore({
	pluginId: "msteams",
	errorMessage: "MSTeams runtime not initialized"
});
//#endregion
export { getOptionalMSTeamsRuntime as n, setMSTeamsRuntime as r, getMSTeamsRuntime as t };
