import { a as MigrationItem, u as MigrationProviderContext } from "../../types-BJbJ1fix.js";
import { t as HermesSource } from "../../source-CH44diaV.js";
import { t as PlannedTargets } from "../../targets-B2TmsC3v.js";

//#region extensions/migrate-hermes/secrets.d.ts
declare function buildSecretItems(params: {
  ctx: MigrationProviderContext;
  source: HermesSource;
  targets: PlannedTargets;
}): Promise<MigrationItem[]>;
declare function applySecretItem(ctx: MigrationProviderContext, item: MigrationItem, targets: PlannedTargets): Promise<MigrationItem>;
//#endregion
export { applySecretItem, buildSecretItems };