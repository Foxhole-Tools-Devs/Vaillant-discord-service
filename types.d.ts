import { Collection, CommandInteraction, SlashCommandBuilder } from "discord.js";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLIENT_ID: string;
      TOKEN: string;
      PORT: string;
      MONGO_URI: string;
    }
  }
}

declare module "discord.js" {
  export interface Client {
    slashCommands: Collection<string, SlashCommand>;
  }
}

export interface BotEvent {
  name: string;
  once?: boolean | false;
  execute: (...args) => void;
}

export interface SlashCommand {
  name: string;
  data: Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
  execute:  (interaction: CommandInteraction) => Promise<void>;
}

export {}