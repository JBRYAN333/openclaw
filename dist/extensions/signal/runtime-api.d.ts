import { i as OpenClawConfig } from "../../types.openclaw-Cf8cBIXK.js";
import { n as normalizeAccountId, t as DEFAULT_ACCOUNT_ID } from "../../account-id-CzJ3W3_E.js";
import { h as chunkText } from "../../outbound.types-Rnmk_sma.js";
import { y as ChannelMessageActionAdapter } from "../../types.core-CMfrqeLH.js";
import { y as OpenClawPluginApi } from "../../types-BJbJ1fix.js";
import { l as normalizeE164 } from "../../utils-D4XRRSUN.js";
import { n as ChannelPlugin } from "../../types.public-CDyR0ChV.js";
import { n as PluginRuntime } from "../../types-lks7QeRY.js";
import { r as emptyPluginConfigSchema } from "../../config-schema-FJTquV_f.js";
import { r as buildChannelConfigSchema } from "../../config-schema-3eBNQ6UX.js";
import { s as migrateBaseNameToDefaultAccount, t as applyAccountNameToChannelSection } from "../../setup-helpers-DYFYyBEh.js";
import { n as deleteAccountFromConfigSection, r as setAccountEnabledInConfigSection } from "../../config-helpers-D3jERTLP.js";
import { n as formatPairingApproveHint } from "../../helpers-D8w_5H46.js";
import { d as getChatChannelMeta } from "../../core-D1x8crNc.js";
import { t as formatCliCommand } from "../../command-format-pcmb_-Bf.js";
import { E as resolveChannelMediaMaxBytes } from "../../media-runtime-BQ0RxDv6.js";
import { t as detectBinary } from "../../detect-binary-sofBFj91.js";
import { t as formatDocsLink } from "../../links-BC3SBUZB.js";
import { n as resolveAllowlistProviderRuntimeGroupPolicy, r as resolveDefaultGroupPolicy } from "../../runtime-group-policy-CJS3_leB.js";
import { t as PAIRING_APPROVED_MESSAGE } from "../../pairing-message-Cqkj7BSQ.js";
import { c as collectStatusIssuesFromLastError, d as createDefaultChannelRuntimeState, n as buildBaseChannelStatusSummary, t as buildBaseAccountStatusSnapshot } from "../../status-helpers-BIahbGar.js";
import { o as SignalConfigSchema } from "../../bundled-channel-config-schema-x5OCu1aA.js";
import { a as resolveSignalAccount, c as probeSignal, i as resolveDefaultSignalAccountId, n as listEnabledSignalAccounts, o as SignalAccountConfig, r as listSignalAccountIds, t as ResolvedSignalAccount } from "../../accounts-WJFmyogw.js";
import { a as sendMessageSignal, f as monitorSignalProvider, p as signalMessageActions, u as resolveSignalReactionLevel } from "../../send-CuSq4yFE.js";
import { c as installSignalCli, n as normalizeSignalMessagingTarget, t as looksLikeSignalTargetId } from "../../normalize-LoEVWqED.js";
import { i as sendReactionSignal, r as removeReactionSignal } from "../../send-reactions-CfZ0m25o.js";

//#region extensions/signal/src/runtime.d.ts
declare const setSignalRuntime: (next: PluginRuntime) => void, clearSignalRuntime: () => void;
//#endregion
export { type ChannelMessageActionAdapter, type ChannelPlugin, DEFAULT_ACCOUNT_ID, type OpenClawConfig, type OpenClawPluginApi, PAIRING_APPROVED_MESSAGE, type PluginRuntime, type ResolvedSignalAccount, type SignalAccountConfig, SignalConfigSchema, applyAccountNameToChannelSection, buildBaseAccountStatusSnapshot, buildBaseChannelStatusSummary, buildChannelConfigSchema, chunkText, collectStatusIssuesFromLastError, createDefaultChannelRuntimeState, deleteAccountFromConfigSection, detectBinary, emptyPluginConfigSchema, formatCliCommand, formatDocsLink, formatPairingApproveHint, getChatChannelMeta, installSignalCli, listEnabledSignalAccounts, listSignalAccountIds, looksLikeSignalTargetId, migrateBaseNameToDefaultAccount, monitorSignalProvider, normalizeAccountId, normalizeE164, normalizeSignalMessagingTarget, probeSignal, removeReactionSignal, resolveAllowlistProviderRuntimeGroupPolicy, resolveChannelMediaMaxBytes, resolveDefaultGroupPolicy, resolveDefaultSignalAccountId, resolveSignalAccount, resolveSignalReactionLevel, sendMessageSignal, sendReactionSignal, setAccountEnabledInConfigSection, setSignalRuntime, signalMessageActions };