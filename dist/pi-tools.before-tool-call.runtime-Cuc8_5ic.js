import { c as logToolLoopAction } from "./diagnostic-DHfs4op1.js";
import { n as getDiagnosticSessionState } from "./diagnostic-session-state-BZYrqs9n.js";
import { n as recordToolCall, r as recordToolCallOutcome, t as detectToolCallLoop } from "./tool-loop-detection-BYe1nyoX.js";
//#region src/agents/pi-tools.before-tool-call.runtime.ts
const beforeToolCallRuntime = {
	getDiagnosticSessionState,
	logToolLoopAction,
	detectToolCallLoop,
	recordToolCall,
	recordToolCallOutcome
};
//#endregion
export { beforeToolCallRuntime };
