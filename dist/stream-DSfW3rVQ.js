import { r as createDeepSeekV4OpenAICompatibleThinkingWrapper } from "./provider-stream-shared-CWK08Hdz.js";
import { n as isMiMoReasoningModelRef } from "./thinking-UeSgXYIh.js";
//#region extensions/xiaomi/stream.ts
function createMiMoThinkingWrapper(baseStreamFn, thinkingLevel) {
	return createDeepSeekV4OpenAICompatibleThinkingWrapper({
		baseStreamFn,
		thinkingLevel,
		shouldPatchModel: isMiMoReasoningModelRef
	});
}
//#endregion
export { createMiMoThinkingWrapper as t };
