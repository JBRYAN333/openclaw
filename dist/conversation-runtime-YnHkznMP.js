import "./session-binding-service-B8tjGRXG.js";
import "./thread-bindings-policy-C9LnDFHJ.js";
import "./conversation-binding-BB_vDBQI.js";
import "./binding-registry-uHeXp0eS.js";
import "./session-D5zDfReP.js";
import "./pairing-store-k9igi9l7.js";
import "./channel-access-compat-B9LIiIL5.js";
import "./binding-targets-B4fIcHGd.js";
import "./binding-routing-BeyWbmiY.js";
import "./pairing-labels-qPyIJmKZ.js";
//#region src/channels/session-meta.ts
let inboundSessionRuntimePromise = null;
function loadInboundSessionRuntime() {
	inboundSessionRuntimePromise ??= import("./inbound.runtime-DWf7izEA.js");
	return inboundSessionRuntimePromise;
}
async function recordInboundSessionMetaSafe(params) {
	const runtime = await loadInboundSessionRuntime();
	const storePath = runtime.resolveStorePath(params.cfg.session?.store, { agentId: params.agentId });
	try {
		await runtime.recordSessionMetaFromInbound({
			storePath,
			sessionKey: params.sessionKey,
			ctx: params.ctx
		});
	} catch (err) {
		params.onError?.(err);
	}
}
//#endregion
export { recordInboundSessionMetaSafe as t };
