import { i as OpenClawConfig } from "./types.openclaw-Cf8cBIXK.js";
import { K as GenerateImageParams, q as GenerateImageRuntimeResult } from "./types-core-h1DJrzm3.js";
import { l as ImageGenerationProvider } from "./types-BF51_DA2.js";
import { t as SubsystemLogger } from "./subsystem-CFM9F5Ih.js";
import { n as getProviderEnvVars } from "./provider-env-vars-0K3JYFfY.js";
import { n as listImageGenerationProviders, t as getImageGenerationProvider } from "./provider-registry-DZxsrjmy.js";

//#region src/image-generation/runtime.d.ts
declare const log: SubsystemLogger;
type ImageGenerationRuntimeDeps = {
  getProvider?: typeof getImageGenerationProvider;
  listProviders?: typeof listImageGenerationProviders;
  getProviderEnvVars?: typeof getProviderEnvVars;
  log?: Pick<typeof log, "warn">;
};
declare function listRuntimeImageGenerationProviders(params?: {
  config?: OpenClawConfig;
}, deps?: ImageGenerationRuntimeDeps): ImageGenerationProvider[];
declare function generateImage(params: GenerateImageParams, deps?: ImageGenerationRuntimeDeps): Promise<GenerateImageRuntimeResult>;
//#endregion
export { listRuntimeImageGenerationProviders as n, generateImage as t };