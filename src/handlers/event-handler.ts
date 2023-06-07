import {Client} from "discord.js";
import {join} from "path";
import {readdirSync} from "fs";
import {BotEvent} from "../../types";

module.exports = (client: Client) => {
  let eventsDir = join(__dirname, '../events');

  readdirSync(eventsDir).forEach(file => {
    if (!file.endsWith('.js')) return;

    const event: BotEvent = require(`${eventsDir}/${file}`).default;

    if (event.once)
      client.once(event.name, (...args) => event.execute(...args));
    else
      client.on(event.name, (...args) => event.execute(...args));

    console.log(`Event ${event.name} loaded`);
  });
}