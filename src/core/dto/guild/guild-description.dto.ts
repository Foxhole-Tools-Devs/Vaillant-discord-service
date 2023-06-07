import { Expose, Type } from "class-transformer";
import { DiscordGuildDto } from "./discord-guild.dto";
import { DiscordRoleDto } from "../user/discord-role.dto";

export class GuildDescriptionDto {
  @Expose()
  @Type(() => DiscordGuildDto)
  discordGuild: DiscordGuildDto;

  @Expose()
  @Type(() => DiscordRoleDto)
  discordRoles: DiscordRoleDto[];

  @Expose()
  description: string;
}