import { Expose, Type } from "class-transformer";
import { ClanRankDto } from "./clan-rank.dto";

export class ClanHierarchyDto {
  @Expose()
  id: number;

  @Expose()
  @Type(() => ClanRankDto)
  leader: ClanRankDto;
}