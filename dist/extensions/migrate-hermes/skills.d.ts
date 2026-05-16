import { a as MigrationItem } from "../../types-BJbJ1fix.js";
import { t as HermesSource } from "../../source-CH44diaV.js";
import { t as PlannedTargets } from "../../targets-B2TmsC3v.js";

//#region extensions/migrate-hermes/skills.d.ts
declare function buildSkillItems(params: {
  source: HermesSource;
  targets: PlannedTargets;
  overwrite?: boolean;
}): Promise<MigrationItem[]>;
//#endregion
export { buildSkillItems };