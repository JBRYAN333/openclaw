import { a as normalizeLowercaseStringOrEmpty } from "../../string-coerce-LndEvhRk.js";
import { t as applyModelCompatPatch } from "../../provider-model-compat-DsjaSJAR.js";
import "../../provider-model-shared-D63oGaKJ.js";
import "../../string-coerce-runtime-Ce59bOpy.js";
import { t as defineSingleProviderPluginEntry } from "../../provider-entry-Dx_GJiwF.js";
import { n as VENICE_DEFAULT_MODEL_REF } from "../../models-CT_r0nuA.js";
import { t as buildVeniceProvider } from "../../provider-catalog-DbXZFUGm.js";
import { t as applyVeniceConfig } from "../../onboard-6l2nrru5.js";
import { t as createVeniceDeepSeekV4Wrapper } from "../../stream-C7up0-wx.js";
//#region extensions/venice/index.ts
const PROVIDER_ID = "venice";
const XAI_UNSUPPORTED_SCHEMA_KEYWORDS = [
	"minLength",
	"maxLength",
	"minItems",
	"maxItems",
	"minContains",
	"maxContains"
];
function applyXaiModelCompat(model) {
	return applyModelCompatPatch(model, {
		toolSchemaProfile: "xai",
		unsupportedToolSchemaKeywords: [...XAI_UNSUPPORTED_SCHEMA_KEYWORDS],
		nativeWebSearchTool: true,
		toolCallArgumentsEncoding: "html-entities"
	});
}
function isXaiBackedVeniceModel(modelId) {
	return normalizeLowercaseStringOrEmpty(modelId).includes("grok");
}
var venice_default = defineSingleProviderPluginEntry({
	id: PROVIDER_ID,
	name: "Venice Provider",
	description: "Bundled Venice provider plugin",
	provider: {
		label: "Venice",
		docsPath: "/providers/venice",
		auth: [{
			methodId: "api-key",
			label: "Venice AI API key",
			hint: "Privacy-focused (uncensored models)",
			optionKey: "veniceApiKey",
			flagName: "--venice-api-key",
			envVar: "VENICE_API_KEY",
			promptMessage: "Enter Venice AI API key",
			defaultModel: VENICE_DEFAULT_MODEL_REF,
			applyConfig: (cfg) => applyVeniceConfig(cfg),
			noteMessage: [
				"Venice AI provides privacy-focused inference with uncensored models.",
				"Get your API key at: https://venice.ai/settings/api",
				"Supports 'private' (fully private) and 'anonymized' (proxy) modes."
			].join("\n"),
			noteTitle: "Venice AI",
			wizard: { groupLabel: "Venice AI" }
		}],
		catalog: { buildProvider: buildVeniceProvider },
		normalizeResolvedModel: ({ modelId, model }) => isXaiBackedVeniceModel(modelId) ? applyXaiModelCompat(model) : void 0,
		wrapStreamFn: (ctx) => createVeniceDeepSeekV4Wrapper(ctx.streamFn, ctx.thinkingLevel)
	}
});
//#endregion
export { venice_default as default };
