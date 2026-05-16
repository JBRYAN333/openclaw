import "./errors-CBds2awY.js";
import { t as __testing$1 } from "./manager-eVkt8UUV.js";
import { t as __testing$2 } from "./registry-KXoxNxEQ.js";
import "./session-meta-DKGWLJ_k.js";
import "./acp-runtime-backend-BfV10B6W.js";
//#region src/plugin-sdk/acp-runtime.ts
const __testing = new Proxy({}, {
	get(_target, prop, receiver) {
		if (Reflect.has(__testing$1, prop)) return Reflect.get(__testing$1, prop, receiver);
		return Reflect.get(__testing$2, prop, receiver);
	},
	has(_target, prop) {
		return Reflect.has(__testing$1, prop) || Reflect.has(__testing$2, prop);
	},
	ownKeys() {
		return Array.from(new Set([...Reflect.ownKeys(__testing$1), ...Reflect.ownKeys(__testing$2)]));
	},
	getOwnPropertyDescriptor(_target, prop) {
		if (Reflect.has(__testing$1, prop) || Reflect.has(__testing$2, prop)) return {
			configurable: true,
			enumerable: true
		};
	}
});
//#endregion
export { __testing as t };
