import { o as SsrFPolicy } from "../../ssrf-BER3qS75.js";
import { Di as MemoryEmbeddingProviderCreateOptions, Ti as MemoryEmbeddingProvider } from "../../types-BJbJ1fix.js";
//#region extensions/mistral/embedding-provider.d.ts
type MistralEmbeddingClient = {
  baseUrl: string;
  headers: Record<string, string>;
  ssrfPolicy?: SsrFPolicy;
  model: string;
};
declare const DEFAULT_MISTRAL_EMBEDDING_MODEL = "mistral-embed";
declare function createMistralEmbeddingProvider(options: MemoryEmbeddingProviderCreateOptions): Promise<{
  provider: MemoryEmbeddingProvider;
  client: MistralEmbeddingClient;
}>;
//#endregion
export { DEFAULT_MISTRAL_EMBEDDING_MODEL, createMistralEmbeddingProvider };