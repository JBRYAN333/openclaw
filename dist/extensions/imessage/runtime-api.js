import { t as DEFAULT_ACCOUNT_ID } from "../../account-id-CwBWagLE.js";
import { r as buildChannelConfigSchema } from "../../config-schema-SCiVDjbS.js";
import { p as formatTrimmedAllowFromEntries } from "../../channel-config-helpers-CMLfaMrn.js";
import { c as getChatChannelMeta } from "../../core-B8QH4qMk.js";
import { t as createPluginRuntimeStore } from "../../runtime-store-Bd-pJhiX.js";
import { a as resolveChannelMediaMaxBytes } from "../../media-runtime-TWRGvE0c.js";
import { t as chunkTextForOutbound } from "../../text-chunking-CzdY9jpk.js";
import { t as PAIRING_APPROVED_MESSAGE } from "../../pairing-message-DYaDTk0X.js";
import { c as collectStatusIssuesFromLastError, r as buildComputedAccountStatusSnapshot } from "../../status-helpers-Cq69rTZT.js";
import "../../channel-status-BlTHLps2.js";
import { i as IMessageConfigSchema } from "../../bundled-channel-config-schema-DPKbsGeZ.js";
import { i as resolveIMessageAccount } from "../../accounts-DNbP_BOX.js";
import { t as probeIMessage } from "../../probe-D-BevuJU.js";
import { n as resolveIMessageGroupToolPolicy, r as imessageMessageActions, t as resolveIMessageGroupRequireMention } from "../../group-policy-BIi1cYe7.js";
import { o as looksLikeIMessageTargetId, s as normalizeIMessageMessagingTarget } from "../../sanitize-outbound-CDCBE3QI.js";
import "../../config-api-DDXBIgql.js";
import { n as sendMessageIMessage, t as monitorIMessageProvider } from "../../monitor-DXPCDfNy.js";
//#region extensions/imessage/src/config-accessors.ts
function resolveIMessageConfigAllowFrom(params) {
	return (resolveIMessageAccount(params).config.allowFrom ?? []).map((entry) => String(entry));
}
function resolveIMessageConfigDefaultTo(params) {
	const defaultTo = resolveIMessageAccount(params).config.defaultTo;
	if (defaultTo == null) return;
	return defaultTo.trim() || void 0;
}
//#endregion
//#region extensions/imessage/src/runtime.ts
const { setRuntime: setIMessageRuntime } = createPluginRuntimeStore({
	pluginId: "imessage",
	errorMessage: "iMessage runtime not initialized"
});
//#endregion
export { DEFAULT_ACCOUNT_ID, IMessageConfigSchema, PAIRING_APPROVED_MESSAGE, buildChannelConfigSchema, buildComputedAccountStatusSnapshot, chunkTextForOutbound, collectStatusIssuesFromLastError, formatTrimmedAllowFromEntries, getChatChannelMeta, imessageMessageActions, looksLikeIMessageTargetId, monitorIMessageProvider, normalizeIMessageMessagingTarget, probeIMessage, resolveChannelMediaMaxBytes, resolveIMessageConfigAllowFrom, resolveIMessageConfigDefaultTo, resolveIMessageGroupRequireMention, resolveIMessageGroupToolPolicy, sendMessageIMessage, setIMessageRuntime };
