import { i as OpenClawConfig } from "../../types.openclaw-Cf8cBIXK.js";
import { S as MarkdownTableMode } from "../../types.base-1mE0Ctdt.js";
import { o as GroupToolPolicyConfig } from "../../types.tools-BVia_nZx.js";
import { n as normalizeAccountId, t as DEFAULT_ACCOUNT_ID } from "../../account-id-CzJ3W3_E.js";
import { C as OpenClawPluginToolContext } from "../../types-core-h1DJrzm3.js";
import { n as RuntimeEnv } from "../../runtime-BpWhmB3g.js";
import { r as AnyAgentTool } from "../../common-DjyTFcrM.js";
import { F as ChannelStatusIssue, m as ChannelGroupContext, r as ChannelAccountSnapshot, t as BaseProbeResult, u as ChannelDirectoryEntry, y as ChannelMessageActionAdapter } from "../../types.core-CMfrqeLH.js";
import { c as deliverTextOrMediaReply, p as isNumericTargetId, r as ReplyPayload, t as OutboundReplyPayload, v as resolveSendableOutboundReplyParts, w as sendPayloadWithChunkedTextAndMedia } from "../../reply-payload-BCfY32YY.js";
import { n as ChannelPlugin } from "../../types.public-CDyR0ChV.js";
import { n as PluginRuntime } from "../../types-lks7QeRY.js";
import { p as resolveInboundMentionDecision } from "../../mention-gating-DhwUxmI-.js";
import { i as createChannelReplyPipeline } from "../../reply-pipeline-CkP3Y3OW.js";
import { r as buildChannelConfigSchema } from "../../config-schema-3eBNQ6UX.js";
import { r as resolvePreferredOpenClawTmpDir } from "../../tmp-openclaw-dir-vRixbn93.js";
import { n as isDangerousNameMatchingEnabled } from "../../dangerous-name-matching-BZPjtHVf.js";
import { a as warnMissingProviderGroupPolicyFallbackOnce, i as resolveOpenProviderRuntimeGroupPolicy, r as resolveDefaultGroupPolicy } from "../../runtime-group-policy-CJS3_leB.js";
import { t as buildBaseAccountStatusSnapshot } from "../../status-helpers-BIahbGar.js";
import { n as loadOutboundMediaFromUrl } from "../../outbound-media-CZVVE2d2.js";
import { f as mergeAllowlist, m as summarizeMapping, n as formatAllowFromLowercase } from "../../allow-from-BP9o0agN.js";
import { r as createChannelPairingController } from "../../channel-pairing-DizXYXnF.js";
import { t as chunkTextForOutbound } from "../../text-chunking-a7X759mT.js";
import { t as zalouserPlugin } from "../../channel-9ehrg7hR.js";
import { t as zalouserSetupPlugin } from "../../channel.setup-DwjEPTL8.js";
import { i as createZalouserTool, n as createZalouserSetupWizardProxy, r as zalouserSetupAdapter, t as zalouserSetupWizard } from "../../api-DFmWNbWY.js";
import { n as isZalouserMutableGroupEntry, t as collectZalouserSecurityAuditFindings } from "../../security-audit-Cn9NUtVr.js";

//#region extensions/zalouser/src/runtime.d.ts
declare const setZalouserRuntime: (next: PluginRuntime) => void, getZalouserRuntime: () => PluginRuntime;
//#endregion
export { type AnyAgentTool, type BaseProbeResult, type ChannelAccountSnapshot, type ChannelDirectoryEntry, type ChannelGroupContext, type ChannelMessageActionAdapter, type ChannelPlugin, type ChannelStatusIssue, DEFAULT_ACCOUNT_ID, type GroupToolPolicyConfig, type MarkdownTableMode, type OpenClawConfig, type OpenClawPluginToolContext, type OutboundReplyPayload, type PluginRuntime, type ReplyPayload, type RuntimeEnv, buildBaseAccountStatusSnapshot, buildChannelConfigSchema, chunkTextForOutbound, collectZalouserSecurityAuditFindings, createChannelReplyPipeline as createChannelMessageReplyPipeline, createChannelPairingController, createZalouserSetupWizardProxy, createZalouserTool, deliverTextOrMediaReply, formatAllowFromLowercase, isDangerousNameMatchingEnabled, isNumericTargetId, isZalouserMutableGroupEntry, loadOutboundMediaFromUrl, mergeAllowlist, normalizeAccountId, resolveDefaultGroupPolicy, resolveInboundMentionDecision, resolveOpenProviderRuntimeGroupPolicy, resolvePreferredOpenClawTmpDir, resolveSendableOutboundReplyParts, sendPayloadWithChunkedTextAndMedia, setZalouserRuntime, summarizeMapping, warnMissingProviderGroupPolicyFallbackOnce, zalouserPlugin, zalouserSetupAdapter, zalouserSetupPlugin, zalouserSetupWizard };