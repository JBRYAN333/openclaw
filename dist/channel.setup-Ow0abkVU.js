import { t as createZalouserPluginBase } from "./shared-TyDa-FR_2.js";
import { n as zalouserSetupAdapter } from "./setup-core-Cg-hPsy5.js";
import { t as zalouserSetupWizard } from "./setup-surface-QMCqNQ5r.js";
//#region extensions/zalouser/src/channel.setup.ts
const zalouserSetupPlugin = { ...createZalouserPluginBase({
	setupWizard: zalouserSetupWizard,
	setup: zalouserSetupAdapter
}) };
//#endregion
export { zalouserSetupPlugin as t };
