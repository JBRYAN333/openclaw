import { c as normalizeOptionalString } from "./string-coerce-LndEvhRk.js";
import { a as normalizeAnyChannelId } from "./registry-Bd8UHhG1.js";
import { n as getBundledChannelPlugin } from "./bundled-7gAOW5Ww.js";
import { n as getLoadedChannelPluginEntryById, r as listLoadedChannelPlugins, t as getLoadedChannelPluginById } from "./registry-loaded-dw6T05_h.js";
//#region src/channels/plugins/registry.ts
function listChannelPlugins() {
	return listLoadedChannelPlugins();
}
function getLoadedChannelPlugin(id) {
	const resolvedId = normalizeOptionalString(id) ?? "";
	if (!resolvedId) return;
	return getLoadedChannelPluginById(resolvedId);
}
function getLoadedChannelPluginOrigin(id) {
	const resolvedId = normalizeOptionalString(id) ?? "";
	if (!resolvedId) return;
	return normalizeOptionalString(getLoadedChannelPluginEntryById(resolvedId)?.origin) ?? void 0;
}
function getChannelPlugin(id) {
	const resolvedId = normalizeOptionalString(id) ?? "";
	if (!resolvedId) return;
	return getLoadedChannelPlugin(resolvedId) ?? getBundledChannelPlugin(resolvedId);
}
function normalizeChannelId(raw) {
	return normalizeAnyChannelId(raw);
}
//#endregion
export { normalizeChannelId as a, listChannelPlugins as i, getLoadedChannelPlugin as n, getLoadedChannelPluginOrigin as r, getChannelPlugin as t };
