import { i as OpenClawConfig } from "./types.openclaw-Cf8cBIXK.js";
import { x as ToolLoopDetectionConfig } from "./types.tools-BVia_nZx.js";
import { s as SandboxFsBridge } from "./backend-handle.types-BKtozKOa.js";
import { t as DiagnosticTraceContext } from "./diagnostic-trace-context-D0UGV7lW.js";
import { r as AnyAgentTool } from "./common-DjyTFcrM.js";

//#region src/agents/pi-tools.before-tool-call.d.ts
type ToolOutcomeObservation = {
  toolName: string;
  argsHash: string;
  resultHash: string;
};
type ToolOutcomeObserver = (observation: ToolOutcomeObservation) => void;
type HookContext = {
  agentId?: string;
  config?: OpenClawConfig; /** Tool execution cwd for host-derived path facts. */
  cwd?: string;
  sessionKey?: string; /** Ephemeral session UUID — regenerated on /new and /reset. */
  sessionId?: string;
  runId?: string;
  trace?: DiagnosticTraceContext;
  channelId?: string;
  loopDetection?: ToolLoopDetectionConfig;
  onToolOutcome?: ToolOutcomeObserver;
  sandbox?: {
    root: string;
    bridge: SandboxFsBridge;
  };
};
declare function wrapToolWithBeforeToolCallHook(tool: AnyAgentTool, ctx?: HookContext): AnyAgentTool;
declare function isToolWrappedWithBeforeToolCallHook(tool: AnyAgentTool): boolean;
//#endregion
export { isToolWrappedWithBeforeToolCallHook as n, wrapToolWithBeforeToolCallHook as r, ToolOutcomeObserver as t };