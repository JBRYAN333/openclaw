import { a as MigrationItem } from "../../types-BJbJ1fix.js";
import { t as ClaudeSource } from "../../source-Bkefl2ui.js";
import { t as PlannedTargets } from "../../targets-CnvXKkBf.js";

//#region extensions/migrate-claude/memory.d.ts
declare function buildMemoryItems(params: {
  source: ClaudeSource;
  targets: PlannedTargets;
  overwrite?: boolean;
}): Promise<MigrationItem[]>;
//#endregion
export { buildMemoryItems };