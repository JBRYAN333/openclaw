import { t as formatCliCommand } from "../../command-format-OwPqnbXG.js";
import { t as formatDocsLink } from "../../links-Dz4PCYCN.js";
import { l as normalizeE164 } from "../../utils-CKsuXgDI.js";
import { n as normalizeAccountId, t as DEFAULT_ACCOUNT_ID } from "../../account-id-CwBWagLE.js";
import { r as buildChannelConfigSchema } from "../../config-schema-SCiVDjbS.js";
import { a as chunkText } from "../../chunk-BuZiQNsg.js";
import { n as deleteAccountFromConfigSection, r as setAccountEnabledInConfigSection } from "../../config-helpers-8s057diy.js";
import { n as formatPairingApproveHint } from "../../helpers-3OXh29M7.js";
import { r as emptyPluginConfigSchema } from "../../config-schema-BRTPsLOt.js";
import { s as migrateBaseNameToDefaultAccount, t as applyAccountNameToChannelSection } from "../../setup-helpers-D1h9Zq-C.js";
import { c as getChatChannelMeta } from "../../core-B8QH4qMk.js";
import { t as createPluginRuntimeStore } from "../../runtime-store-Bd-pJhiX.js";
import { n as resolveAllowlistProviderRuntimeGroupPolicy, r as resolveDefaultGroupPolicy } from "../../runtime-group-policy-FYSjCk2V.js";
import { t as detectBinary } from "../../detect-binary-D4E6-K5C.js";
import "../../setup-tools--YNJotnL.js";
import "../../reply-runtime-DBqKZfyR.js";
import { a as resolveChannelMediaMaxBytes } from "../../media-runtime-TWRGvE0c.js";
import { t as PAIRING_APPROVED_MESSAGE } from "../../pairing-message-DYaDTk0X.js";
import { c as collectStatusIssuesFromLastError, d as createDefaultChannelRuntimeState, n as buildBaseChannelStatusSummary, t as buildBaseAccountStatusSnapshot } from "../../status-helpers-Cq69rTZT.js";
import "../../channel-status-BlTHLps2.js";
import { o as SignalConfigSchema } from "../../bundled-channel-config-schema-DPKbsGeZ.js";
import "../../text-utility-runtime-BTb-XrMk.js";
import { i as resolveSignalAccount, n as listSignalAccountIds, r as resolveDefaultSignalAccountId, t as listEnabledSignalAccounts } from "../../accounts-BTnWRiDe.js";
import { d as normalizeSignalMessagingTarget, u as looksLikeSignalTargetId } from "../../identity-CTFOi5ae.js";
import { n as sendReactionSignal, t as removeReactionSignal } from "../../reaction-runtime-api-DAwq3G0m.js";
import { n as resolveSignalReactionLevel, t as signalMessageActions } from "../../message-actions-CnrVzXvB.js";
import "../../config-api-CiRiUbXu.js";
import { r as installSignalCli } from "../../install-signal-cli-w_TNcXC-.js";
import { t as monitorSignalProvider } from "../../monitor-XE3tL1kY.js";
import { t as sendMessageSignal } from "../../send-CGGGxKUM.js";
import { t as probeSignal } from "../../probe-DwVFeTe1.js";
//#region extensions/signal/src/runtime.ts
const { setRuntime: setSignalRuntime, clearRuntime: clearSignalRuntime } = createPluginRuntimeStore({
	pluginId: "signal",
	errorMessage: "Signal runtime not initialized"
});
//#endregion
export { DEFAULT_ACCOUNT_ID, PAIRING_APPROVED_MESSAGE, SignalConfigSchema, applyAccountNameToChannelSection, buildBaseAccountStatusSnapshot, buildBaseChannelStatusSummary, buildChannelConfigSchema, chunkText, collectStatusIssuesFromLastError, createDefaultChannelRuntimeState, deleteAccountFromConfigSection, detectBinary, emptyPluginConfigSchema, formatCliCommand, formatDocsLink, formatPairingApproveHint, getChatChannelMeta, installSignalCli, listEnabledSignalAccounts, listSignalAccountIds, looksLikeSignalTargetId, migrateBaseNameToDefaultAccount, monitorSignalProvider, normalizeAccountId, normalizeE164, normalizeSignalMessagingTarget, probeSignal, removeReactionSignal, resolveAllowlistProviderRuntimeGroupPolicy, resolveChannelMediaMaxBytes, resolveDefaultGroupPolicy, resolveDefaultSignalAccountId, resolveSignalAccount, resolveSignalReactionLevel, sendMessageSignal, sendReactionSignal, setAccountEnabledInConfigSection, setSignalRuntime, signalMessageActions };
