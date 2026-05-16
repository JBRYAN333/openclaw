import { i as OpenClawConfig } from "./types.openclaw-Cf8cBIXK.js";
import { G as GenerateVideoRuntimeResult, W as GenerateVideoParams } from "./types-core-h1DJrzm3.js";
import { s as VideoGenerationProvider } from "./types-DNam9MN2.js";
import { t as SubsystemLogger } from "./subsystem-CFM9F5Ih.js";
import { n as getProviderEnvVars } from "./provider-env-vars-0K3JYFfY.js";
import { n as listVideoGenerationProviders, t as getVideoGenerationProvider } from "./provider-registry-CvPAW7jU.js";

//#region src/video-generation/runtime.d.ts
declare const log: SubsystemLogger;
type VideoGenerationRuntimeDeps = {
  getProvider?: typeof getVideoGenerationProvider;
  listProviders?: typeof listVideoGenerationProviders;
  getProviderEnvVars?: typeof getProviderEnvVars;
  log?: Pick<typeof log, "debug" | "warn">;
};
declare function listRuntimeVideoGenerationProviders(params?: {
  config?: OpenClawConfig;
}, deps?: VideoGenerationRuntimeDeps): VideoGenerationProvider[];
declare function generateVideo(params: GenerateVideoParams, deps?: VideoGenerationRuntimeDeps): Promise<GenerateVideoRuntimeResult>;
//#endregion
export { listRuntimeVideoGenerationProviders as n, generateVideo as t };