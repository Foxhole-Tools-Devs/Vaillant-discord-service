import { BotEvent } from "../../types";
import { Client, Events } from "discord.js";

const event: BotEvent = {
  name: Events.ClientReady,
  once: true,
  async execute( client: Client ){
    await client.guilds.fetch();
  }
}

export default event;