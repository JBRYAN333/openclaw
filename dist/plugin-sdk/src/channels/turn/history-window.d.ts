import type { HistoryEntry, HistoryMediaEntry } from "../../auto-reply/reply/history.types.js";
type MaybePromise<T> = T | Promise<T>;
export type ChannelHistoryWindow = {
    record: (params: {
        historyKey: string;
        entry?: HistoryEntry | null;
        limit: number;
    }) => HistoryEntry[];
    recordWithMedia: (params: {
        historyKey: string;
        entry?: HistoryEntry | null;
        limit: number;
        media?: readonly HistoryMediaEntry[] | null | (() => MaybePromise<readonly HistoryMediaEntry[] | null | undefined>);
        mediaLimit?: number;
        messageId?: string;
        shouldRecord?: () => boolean;
    }) => Promise<HistoryEntry[]>;
    buildPendingContext: (params: {
        historyKey: string;
        limit: number;
        currentMessage: string;
        formatEntry: (entry: HistoryEntry) => string;
        lineBreak?: string;
    }) => string;
    buildInboundHistory: (params: {
        historyKey: string;
        limit: number;
    }) => HistoryEntry[] | undefined;
    clear: (params: {
        historyKey: string;
        limit: number;
    }) => void;
};
export declare function createChannelHistoryWindow(params: {
    historyMap: Map<string, HistoryEntry[]>;
}): ChannelHistoryWindow;
export {};
