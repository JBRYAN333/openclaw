import { c as normalizeOptionalString } from "../../string-coerce-LndEvhRk.js";
import { c as isRecord } from "../../utils-CKsuXgDI.js";
import { r as normalizeProviderId } from "../../provider-id-Cz7K6wgK.js";
import "../../provider-model-shared-D63oGaKJ.js";
import { t as createProviderApiKeyAuthMethod } from "../../provider-api-key-auth-BlqqnOKu.js";
import "../../string-coerce-runtime-Ce59bOpy.js";
import { t as definePluginEntry } from "../../plugin-entry-CYHnh3Tl.js";
import "../../provider-auth-api-key-Bx4Tt3J1.js";
import { a as normalizeKimiCodingModelId, i as buildKimiCodingProvider } from "../../provider-catalog-cFD5SIPm.js";
import { r as applyKimiCodeConfig, t as KIMI_CODING_MODEL_REF } from "../../onboard-DowbwLos.js";
import { t as KIMI_REPLAY_POLICY } from "../../replay-policy-jbmL4CHt.js";
import { a as wrapKimiProviderStream } from "../../stream-D30jG0SW.js";
//#region extensions/kimi-coding/index.ts
const PLUGIN_ID = "kimi";
const PROVIDER_ID = "kimi";
function findExplicitProviderConfig(providers, providerId) {
	if (!providers) return;
	const normalizedProviderId = normalizeProviderId(providerId);
	const match = Object.entries(providers).find(([configuredProviderId]) => normalizeProviderId(configuredProviderId) === normalizedProviderId);
	return isRecord(match?.[1]) ? match[1] : void 0;
}
var kimi_coding_default = definePluginEntry({
	id: PLUGIN_ID,
	name: "Kimi Provider",
	description: "Bundled Kimi provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "Kimi",
			aliases: ["kimi-code", "kimi-coding"],
			docsPath: "/providers/moonshot",
			envVars: ["KIMI_API_KEY", "KIMICODE_API_KEY"],
			auth: [createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key",
				label: "Kimi Code API key (subscription)",
				hint: "Kimi K2.6 + Kimi",
				optionKey: "kimiCodeApiKey",
				flagName: "--kimi-code-api-key",
				envVar: "KIMI_API_KEY",
				promptMessage: "Enter Kimi API key",
				defaultModel: KIMI_CODING_MODEL_REF,
				expectedProviders: [
					"kimi",
					"kimi-code",
					"kimi-coding"
				],
				applyConfig: (cfg) => applyKimiCodeConfig(cfg),
				noteMessage: ["Kimi uses a dedicated coding endpoint and API key.", "Get your API key at: https://www.kimi.com/code/en"].join("\n"),
				noteTitle: "Kimi",
				wizard: {
					choiceId: "kimi-code-api-key",
					choiceLabel: "Kimi Code API key (subscription)",
					groupId: "moonshot",
					groupLabel: "Moonshot AI (Kimi K2.6)",
					groupHint: "Kimi K2.6"
				}
			})],
			catalog: {
				order: "simple",
				run: async (ctx) => {
					const apiKey = ctx.resolveProviderApiKey(PROVIDER_ID).apiKey;
					if (!apiKey) return null;
					const explicitProvider = findExplicitProviderConfig(ctx.config.models?.providers, PROVIDER_ID);
					const builtInProvider = buildKimiCodingProvider();
					const explicitBaseUrl = normalizeOptionalString(explicitProvider?.baseUrl) ?? "";
					const explicitHeaders = isRecord(explicitProvider?.headers) ? explicitProvider.headers : void 0;
					return { provider: {
						...builtInProvider,
						...explicitBaseUrl ? { baseUrl: explicitBaseUrl } : {},
						...explicitHeaders ? { headers: {
							...builtInProvider.headers,
							...explicitHeaders
						} } : {},
						apiKey
					} };
				}
			},
			buildReplayPolicy: () => KIMI_REPLAY_POLICY,
			normalizeResolvedModel: ({ model }) => {
				const normalizedId = normalizeKimiCodingModelId(model.id);
				return normalizedId === model.id ? void 0 : {
					...model,
					id: normalizedId
				};
			},
			resolveThinkingProfile: () => ({
				levels: [{
					id: "off",
					label: "off"
				}, {
					id: "low",
					label: "on"
				}],
				defaultLevel: "off"
			}),
			wrapStreamFn: wrapKimiProviderStream
		});
	}
});
//#endregion
export { kimi_coding_default as default };
