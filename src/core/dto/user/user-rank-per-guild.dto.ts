import { DiscordRoleDto } from "./discord-role.dto";
import { Expose, Type } from "class-transformer";
import { DiscordGuildDto } from "../guild/discord-guild.dto";

export class UserRankPerGuildDto {
  @Expose()
  @Type(() => DiscordRoleDto)
  roles: DiscordRoleDto[];

  @Expose()
  @Type(() => DiscordGuildDto)
  guild: DiscordGuildDto;

  @Expose()
  admin: boolean;
}