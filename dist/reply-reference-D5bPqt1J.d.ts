import { T as ReplyToMode } from "./types.base-1mE0Ctdt.js";
import { i as ReplyThreadingPolicy } from "./get-reply-options.types-DZZgqFKR.js";
//#region src/auto-reply/reply/reply-threading.d.ts
declare function resolveBatchedReplyThreadingPolicy(mode: ReplyToMode, isBatched: boolean): ReplyThreadingPolicy | undefined;
//#endregion
export { resolveBatchedReplyThreadingPolicy as t };