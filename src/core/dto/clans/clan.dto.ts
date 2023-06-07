import { Expose, Type } from "class-transformer";
import { ClanInformationDto } from "./clan-information.dto";
import { ClanHierarchyDto } from "./ranks/clan-hierarchy.dto";
import { UserDto } from "../user/user.dto";
import { DiscordGuildDto } from "../guild/discord-guild.dto";


export class ClanDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  tag: string;

  @Expose()
  @Type(() => UserDto)
  leader: UserDto;

  @Expose()
  @Type(() => UserDto)
  users: UserDto[];

  @Expose()
  @Type(() => ClanHierarchyDto)
  clanHierarchy: ClanHierarchyDto

  @Expose()
  @Type(() => DiscordGuildDto)
  discordGuild: DiscordGuildDto;

  @Expose()
  @Type(() => ClanInformationDto)
  clanInformation: ClanInformationDto;
}