import { t as definePluginEntry } from "../../plugin-entry-CYHnh3Tl.js";
import { t as elevenLabsMediaUnderstandingProvider } from "../../media-understanding-provider-DjC8Y5AF.js";
import { n as buildElevenLabsRealtimeTranscriptionProvider } from "../../realtime-transcription-provider-DpgrHB5y.js";
import { t as buildElevenLabsSpeechProvider } from "../../speech-provider-D4-4ugsM.js";
//#region extensions/elevenlabs/index.ts
var elevenlabs_default = definePluginEntry({
	id: "elevenlabs",
	name: "ElevenLabs Speech",
	description: "Bundled ElevenLabs speech provider",
	register(api) {
		api.registerSpeechProvider(buildElevenLabsSpeechProvider());
		api.registerMediaUnderstandingProvider(elevenLabsMediaUnderstandingProvider);
		api.registerRealtimeTranscriptionProvider(buildElevenLabsRealtimeTranscriptionProvider());
	}
});
//#endregion
export { elevenlabs_default as default };
