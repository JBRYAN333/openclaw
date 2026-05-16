import { n as PluginRuntime } from "../../types-lks7QeRY.js";
import { t as synologyChatPlugin } from "../../channel-iawfsdi7.js";
import { t as collectSynologyChatSecurityAuditFindings } from "../../security-audit-DdTHOwLl.js";

//#region extensions/synology-chat/src/runtime.d.ts
declare const setSynologyRuntime: (next: PluginRuntime) => void, getSynologyRuntime: () => PluginRuntime;
//#endregion
export { collectSynologyChatSecurityAuditFindings, setSynologyRuntime, synologyChatPlugin };