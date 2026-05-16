import { t as definePluginEntry } from "../../plugin-entry-CYHnh3Tl.js";
import { n as buildFalImageGenerationProvider } from "../../image-generation-provider-BnJTxCqX.js";
import { t as createFalProvider } from "../../provider-registration-CW5opqyX.js";
import { n as buildFalVideoGenerationProvider } from "../../video-generation-provider-Cc-rah1f.js";
var fal_default = definePluginEntry({
	id: "fal",
	name: "fal Provider",
	description: "Bundled fal image and video generation provider",
	register(api) {
		api.registerProvider(createFalProvider());
		api.registerImageGenerationProvider(buildFalImageGenerationProvider());
		api.registerVideoGenerationProvider(buildFalVideoGenerationProvider());
	}
});
//#endregion
export { fal_default as default };
