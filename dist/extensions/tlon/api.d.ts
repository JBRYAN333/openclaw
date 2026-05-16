import { i as OpenClawConfig } from "../../types.openclaw-Cf8cBIXK.js";
import { a as SsrFBlockedError, o as SsrFPolicy, p as isBlockedHostnameOrIp, t as LookupFn } from "../../ssrf-BER3qS75.js";
import { n as RuntimeEnv } from "../../runtime-BpWhmB3g.js";
import { r as ReplyPayload } from "../../reply-payload-BCfY32YY.js";
import { n as PluginRuntime } from "../../types-lks7QeRY.js";
import { r as createDedupeCache } from "../../dedupe-hVXvDHv4.js";
import { a as fetchWithSsrFGuard } from "../../fetch-guard-BrF-hlfo.js";
import { d as ssrfPolicyFromDangerouslyAllowPrivateNetwork, u as ssrfPolicyFromAllowPrivateNetwork } from "../../ssrf-policy-CUwsu3am.js";
import { t as createLoggerBackedRuntime } from "../../runtime-logger-gOIoaKhR.js";
import { t as tlonPlugin } from "../../channel-cRedbPDP.js";

//#region extensions/tlon/src/runtime.d.ts
declare const setTlonRuntime: (next: PluginRuntime) => void, getTlonRuntime: () => PluginRuntime;
//#endregion
export { type LookupFn, type OpenClawConfig, type ReplyPayload, type RuntimeEnv, SsrFBlockedError, type SsrFPolicy, createDedupeCache, createLoggerBackedRuntime, fetchWithSsrFGuard, isBlockedHostnameOrIp, setTlonRuntime, ssrfPolicyFromAllowPrivateNetwork, ssrfPolicyFromDangerouslyAllowPrivateNetwork, tlonPlugin };