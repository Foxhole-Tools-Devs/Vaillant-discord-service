import express, { Request, Response } from "express";
import client from "../../../index";
import { DiscordGuildDto } from "../../../core/dto/guild/discord-guild.dto";
import { GuildDescriptionDto } from "../../../core/dto/guild/guild-description.dto";
import { DiscordRoleDto } from "../../../core/dto/user/discord-role.dto";
import { decimalToHex } from "../../../core/utils/hex-decimal";

export const guildRouter = express.Router()

guildRouter.get("/", async (req: Request, res: Response)=> {
  const { id } = req.query;
  try {
    const fetchedGuild = await client.guilds.fetch(id.toString());
    const roles = await fetchedGuild.roles.fetch();

    const discordRoles = roles.map((role, key) => {
      return {
        id: role.id,
        name: role.name,
        color: decimalToHex(role.color),
      } as DiscordRoleDto;
    })

    const rep = {
      discordGuild: {
        id: fetchedGuild.id,
        name: fetchedGuild.name,
        image: `https://cdn.discordapp.com/icons/${fetchedGuild.id}/${fetchedGuild.icon}.png`,
        bannerImage: `https://cdn.discordapp.com/icons/${fetchedGuild.id}/${fetchedGuild.banner}.png`,
      } as DiscordGuildDto,
      discordRoles,
      description: fetchedGuild.description,
    } as GuildDescriptionDto;

    res.status(200).send(rep);
  } catch ( e ) {
    res.status(404).end();
  }
});