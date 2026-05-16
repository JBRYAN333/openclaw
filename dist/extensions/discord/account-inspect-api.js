import { t as inspectDiscordAccount } from "../../account-inspect-CdmAKd0P.js";
//#region extensions/discord/account-inspect-api.ts
function inspectDiscordReadOnlyAccount(cfg, accountId) {
	return inspectDiscordAccount({
		cfg,
		accountId
	});
}
//#endregion
export { inspectDiscordReadOnlyAccount };
