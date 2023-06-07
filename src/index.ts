import * as dotenv from 'dotenv';
import { Client, Collection, GatewayIntentBits } from "discord.js";
import express from "express";
import cors from "cors";
import { join } from 'path';
import { readdirSync } from "fs";
import { healthCheckRouter } from "./api/health/health-check.router";
import { SlashCommand } from "../types";
import { userRouter } from "./api/v1/user/user.router";
import { guildRouter } from "./api/v1/guild/guild.router";

dotenv.config();

// ================= Discord =================

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ]
});

client.slashCommands = new Collection<string, SlashCommand>();

const handlersDirs = join(__dirname, "./handlers");

readdirSync(handlersDirs).forEach(file => {
  require(`${handlersDirs}/${file}`)(client);
})

client.login(process.env.TOKEN);


// ================= Express =================

if (!process.env.PORT) {
  console.error("No port found !");
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/health", healthCheckRouter);
app.use("/v1/users",userRouter);
app.use("/v1/guilds",guildRouter);

app.listen(PORT, () => {
  console.log(`SERVER on port : ${PORT}`)
})

export default client;