import { d as ContextVisibilityMode } from "./types.base-1mE0Ctdt.js";
import { i as CommandTurnContext, t as FinalizedMsgContext } from "./templating-B8FV8TdU.js";
import { A as SenderFacts, D as RouteFacts, E as ReplyPlanFacts, S as MessageFacts, j as SupplementalContextFacts, t as AccessFacts, v as CommandFacts, x as InboundMediaFacts, y as ConversationFacts } from "./types-WG4Sq2RG.js";

//#region src/channels/turn/context.d.ts
type BuildChannelTurnContextParams = {
  channel: string;
  accountId?: string;
  provider?: string;
  surface?: string;
  messageId?: string;
  messageIdFull?: string;
  timestamp?: number;
  from: string;
  sender: SenderFacts;
  conversation: ConversationFacts;
  route: RouteFacts;
  reply: ReplyPlanFacts;
  message: MessageFacts;
  access?: AccessFacts;
  command?: CommandFacts;
  commandTurn?: CommandTurnContext;
  media?: InboundMediaFacts[];
  supplemental?: SupplementalContextFacts;
  contextVisibility?: ContextVisibilityMode;
  extra?: Record<string, unknown>;
};
type BuiltChannelTurnContext = FinalizedMsgContext & {
  Body: string;
  BodyForAgent: string;
  BodyForCommands: string;
  ChatType: ConversationFacts["kind"];
  CommandAuthorized: boolean;
  CommandBody: string;
  From: string;
  RawBody: string;
  SessionKey: string;
  To: string;
};
declare function filterChannelTurnSupplementalContext(params: {
  supplemental?: SupplementalContextFacts;
  contextVisibility?: ContextVisibilityMode;
}): SupplementalContextFacts | undefined;
declare function buildChannelTurnContext(params: BuildChannelTurnContextParams): BuiltChannelTurnContext;
//#endregion
export { filterChannelTurnSupplementalContext as i, BuiltChannelTurnContext as n, buildChannelTurnContext as r, BuildChannelTurnContextParams as t };