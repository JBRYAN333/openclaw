import { n as buildManifestModelProviderConfig } from "./provider-catalog-shared-DgATgvNi.js";
import { t as modelCatalog } from "./openclaw.plugin-BJd3XdbZ.js";
//#region extensions/mistral/provider-catalog.ts
function buildMistralProvider() {
	return buildManifestModelProviderConfig({
		providerId: "mistral",
		catalog: modelCatalog.providers.mistral
	});
}
//#endregion
export { buildMistralProvider as t };
