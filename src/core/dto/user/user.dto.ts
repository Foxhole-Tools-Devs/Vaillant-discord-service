import { Expose, Type } from "class-transformer";
import { ClanRankDto } from "../clans/ranks/clan-rank.dto";
import { DiscordUserDto } from "./discord-user.dto";
import { FactionEnumDto } from "../foxhole/faction.enum.dto";

export class UserDto {
  @Expose()
  id: number

  @Expose()
  name: string;

  @Expose()
  clanID: string;

  @Expose()
  factionEnum: FactionEnumDto;

  @Expose()
  @Type(() => DiscordUserDto)
  discordUser: DiscordUserDto;

  @Expose()
  @Type(() => ClanRankDto)
  actualRank: ClanRankDto;

  @Expose()
  moderator: boolean;

  @Expose()
  banned: boolean;
}