import "./net-BlyVdi7u.js";
import "./auth-GPf6GUnF.js";
import "./client-Dw9CM1kL.js";
import "./protocol-aiM-cUL5.js";
import "./operator-approvals-client-D0VAgCxf.js";
import "./gateway-rpc-KTutXl_g.js";
import "./hosted-plugin-surface-url-mDb73t9n.js";
import "./node-command-policy-DTnB7VKj.js";
import "./nodes.helpers-CVsSvJ-I.js";
import "./startup-auth-DGmbVhtO.js";
//#region src/gateway/channel-status-patches.ts
function createConnectedChannelStatusPatch(at = Date.now()) {
	return {
		connected: true,
		lastConnectedAt: at,
		lastEventAt: at
	};
}
function createTransportActivityStatusPatch(at = Date.now()) {
	return { lastTransportActivityAt: at };
}
//#endregion
export { createTransportActivityStatusPatch as n, createConnectedChannelStatusPatch as t };
