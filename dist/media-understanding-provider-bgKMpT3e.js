import { r as describeImagesWithModel, t as describeImageWithModel } from "./image-runtime-BPJzkI3w.js";
import { t as transcribeOpenAiCompatibleAudio } from "./media-understanding-C5ULV8vj.js";
import { t as DEEPINFRA_BASE_URL } from "./provider-models-Y-R-uIP3.js";
import { d as DEFAULT_DEEPINFRA_IMAGE_UNDERSTANDING_MODEL, s as DEFAULT_DEEPINFRA_AUDIO_TRANSCRIPTION_MODEL } from "./media-models-DP7Prjl6.js";
//#region extensions/deepinfra/media-understanding-provider.ts
async function transcribeDeepInfraAudio(params) {
	return await transcribeOpenAiCompatibleAudio({
		...params,
		provider: "deepinfra",
		defaultBaseUrl: DEEPINFRA_BASE_URL,
		defaultModel: DEFAULT_DEEPINFRA_AUDIO_TRANSCRIPTION_MODEL
	});
}
const deepinfraMediaUnderstandingProvider = {
	id: "deepinfra",
	capabilities: ["image", "audio"],
	defaultModels: {
		image: DEFAULT_DEEPINFRA_IMAGE_UNDERSTANDING_MODEL,
		audio: DEFAULT_DEEPINFRA_AUDIO_TRANSCRIPTION_MODEL
	},
	autoPriority: {
		image: 45,
		audio: 45
	},
	transcribeAudio: transcribeDeepInfraAudio,
	describeImage: describeImageWithModel,
	describeImages: describeImagesWithModel
};
//#endregion
export { transcribeDeepInfraAudio as n, deepinfraMediaUnderstandingProvider as t };
