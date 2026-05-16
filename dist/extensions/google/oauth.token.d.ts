import { s as GeminiCliOAuthCredentials } from "../../oauth.shared-o6ZCCwUD.js";

//#region extensions/google/oauth.token.d.ts
declare function exchangeCodeForTokens(code: string, verifier: string): Promise<GeminiCliOAuthCredentials>;
//#endregion
export { exchangeCodeForTokens };