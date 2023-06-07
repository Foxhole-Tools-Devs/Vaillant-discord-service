import { Expose } from "class-transformer";

export class ClanInformationDto {
  @Expose()
  id: number;

  @Expose()
  description: string;

  @Expose()
  logoUrl: string;

  @Expose()
  citation: string;

  @Expose()
  summary: string;

  @Expose()
  discordInviteLink: string;

  @Expose()
  openHiring: boolean;
}