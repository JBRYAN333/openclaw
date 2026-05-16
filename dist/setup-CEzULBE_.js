import "./utils-CKsuXgDI.js";
import "./types.secrets-BxqheYvy.js";
import "./setup-helpers-D1h9Zq-C.js";
import "./setup-binary-D5MywLit.js";
import "./setup-wizard-helpers-BQNfKSOi.js";
import "./setup-wizard-proxy-DkEwyLIl.js";
//#region src/plugin-sdk/resolution-notes.ts
/** Format a short note that separates successfully resolved targets from unresolved passthrough values. */
function formatResolvedUnresolvedNote(params) {
	if (params.resolved.length === 0 && params.unresolved.length === 0) return;
	return [params.resolved.length > 0 ? `Resolved: ${params.resolved.join(", ")}` : void 0, params.unresolved.length > 0 ? `Unresolved (kept as typed): ${params.unresolved.join(", ")}` : void 0].filter(Boolean).join("\n");
}
//#endregion
export { formatResolvedUnresolvedNote as t };
