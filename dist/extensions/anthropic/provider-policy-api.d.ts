import { i as OpenClawConfig } from "../../types.openclaw-Cf8cBIXK.js";
import { l as ModelProviderConfig } from "../../types.models-QyPQH8al.js";
import { qn as ProviderThinkingProfile } from "../../types-BJbJ1fix.js";
import { t as applyAnthropicConfigDefaults } from "../../config-defaults-PLVoiDQs.js";
//#region extensions/anthropic/provider-policy-api.d.ts
declare function normalizeConfig(params: {
  provider: string;
  providerConfig: ModelProviderConfig;
}): ModelProviderConfig;
declare function applyConfigDefaults(params: Parameters<typeof applyAnthropicConfigDefaults>[0]): OpenClawConfig;
declare function resolveThinkingProfile(params: {
  provider: string;
  modelId: string;
}): ProviderThinkingProfile | null;
//#endregion
export { applyConfigDefaults, normalizeConfig, resolveThinkingProfile };