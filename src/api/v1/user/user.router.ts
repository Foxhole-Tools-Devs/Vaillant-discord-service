import express, { Request, Response } from "express";
import client from "../../../index";
import { UserRankPerGuildDto } from "../../../core/dto/user/user-rank-per-guild.dto";
import { DiscordRoleDto } from "../../../core/dto/user/discord-role.dto";

export const userRouter = express.Router();

/*
  URL :       /users/guilds
  Param :     id={discord::user.id},
  Get all guild where user id is in;
 */
userRouter.get("/guilds", async (req: Request, res: Response) => {
  const { id } = req.query;
  const guilds = [...client.guilds.cache.values()];
  const userGuilds: UserRankPerGuildDto[] = [];

  for(const guild of guilds) {
    try {
      const member = await guild.members.fetch(id.toString());
      await member.fetch();

      const roles = member.roles.cache.map((value, key) => {
        const hexValue = value.color.toString(16);
        return {
          id: key,
          name: value.name,
          color:  ("000000"+hexValue).slice(-hexValue.length),
        } as DiscordRoleDto
      })
      userGuilds.push({
        guild: {
          id: guild.id,
          name: guild.name,
          image: `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`,
          bannerImage: `https://cdn.discordapp.com/icons/${guild.id}/${guild.banner}.png`,
        },
        roles: roles,
        admin: member.permissions.has("Administrator"),
      });
    } catch ( e ) {
    }
  }

  res.status(200).send(userGuilds);
});
