import { l as ImageGenerationProvider } from "./types-BF51_DA2.js";
import { a as fetchWithSsrFGuard } from "./fetch-guard-BrF-hlfo.js";
//#region extensions/fal/image-generation-provider.d.ts
declare function _setFalFetchGuardForTesting(impl: typeof fetchWithSsrFGuard | null): void;
declare function buildFalImageGenerationProvider(): ImageGenerationProvider;
//#endregion
export { buildFalImageGenerationProvider as n, _setFalFetchGuardForTesting as t };