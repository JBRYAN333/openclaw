import "./safe-text-Dw_rwKEN.js";
import { l as chunkTextByBreakResolver } from "./chunk-BuZiQNsg.js";
import "./tables-CxWpx3C6.js";
import "./chunk-items-Bb6ZQPQH.js";
import "./auto-linked-file-ref-BvqMC_dX.js";
//#region src/plugin-sdk/text-chunking.ts
/** Chunk outbound text while preferring newline boundaries over spaces. */
function chunkTextForOutbound(text, limit) {
	return chunkTextByBreakResolver(text, limit, (window) => {
		const lastNewline = window.lastIndexOf("\n");
		const lastSpace = window.lastIndexOf(" ");
		return lastNewline > 0 ? lastNewline : lastSpace;
	});
}
//#endregion
export { chunkTextForOutbound as t };
