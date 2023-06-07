import { Expose, Type } from "class-transformer";
import { DiscordRoleDto } from "../../user/discord-role.dto";

export class ClanRankDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  @Type(() => DiscordRoleDto)
  discordRole: DiscordRoleDto;

  @Expose()
  @Type(() => ClanRankDto)
  inferiorRanks: ClanRankDto[];
}