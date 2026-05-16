import { i as OpenClawConfig } from "../types.openclaw-Cf8cBIXK.js";
import { t as PluginMetadataRegistryView } from "../plugin-metadata-snapshot.types-DpqBjT-h.js";
import { rn as ProviderPlugin } from "../types-BJbJ1fix.js";

//#region src/plugins/provider-discovery.runtime.d.ts
declare function resolvePluginDiscoveryProvidersRuntime(params: {
  config?: OpenClawConfig;
  workspaceDir?: string;
  env?: NodeJS.ProcessEnv;
  onlyPluginIds?: string[];
  includeUntrustedWorkspacePlugins?: boolean;
  requireCompleteDiscoveryEntryCoverage?: boolean;
  discoveryEntriesOnly?: boolean;
  pluginMetadataSnapshot?: PluginMetadataRegistryView;
}): ProviderPlugin[];
//#endregion
export { resolvePluginDiscoveryProvidersRuntime };