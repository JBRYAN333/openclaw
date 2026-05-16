import { t as createPluginRuntimeStore } from "./runtime-store-Bd-pJhiX.js";
import "./ssrf-runtime-Dth-2BO1.js";
import "./channel-message-BVwd11Yo.js";
import "./channel-pairing-Bal02rd7.js";
//#region extensions/nextcloud-talk/src/runtime.ts
const { setRuntime: setNextcloudTalkRuntime, getRuntime: getNextcloudTalkRuntime } = createPluginRuntimeStore({
	pluginId: "nextcloud-talk",
	errorMessage: "Nextcloud Talk runtime not initialized"
});
//#endregion
export { setNextcloudTalkRuntime as n, getNextcloudTalkRuntime as t };
